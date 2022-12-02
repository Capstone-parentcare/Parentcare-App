class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>Copyright © 2022 - ParentCare <a href="https://github.com/orgs/Capstone-parentcare/repositories" class="github"><i class="fa fa-github" aria-hidden="true"></i> Github </a></p>
    `;
  }
}
customElements.define('footer-element', FooterElement);
