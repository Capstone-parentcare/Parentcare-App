class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero"></div>
    `;
  }
}
customElements.define('hero-element', HeroElement);
