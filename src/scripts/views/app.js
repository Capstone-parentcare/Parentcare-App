import DrawerInitiator from '../utils/drawer-initiator';
import logoutButtonInitiator from '../utils/logout-button-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, content, menu,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._menu = menu;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    logoutButtonInitiator.init({
      logoutButtonContainer: this._menu,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
