class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>Copyright © 2022 - ParentCare</p>
      <a href="https://github.com/orgs/Capstone-parentcare/repositories" class="github">
        <i class="fa fa-github" aria-hidden="true"></i> 
        <p>C22-235</p>
      </a>
    `;
  }
}
customElements.define('footer-element', FooterElement);
