class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="login-container">
        <h1>Login</h1>
        <form>
            <label>Username</label><br>
            <input type="text" placeholder="Username"><br>
            <label>Password</label><br>
            <input type="password" placeholder="Password"><br>
            <button>Log in</button>
        </form>
      </div>
      `;
  }
}
customElements.define('login-page', HeroElement);
