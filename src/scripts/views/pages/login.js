import API_ENDPOINT from '../../globals/api-endpoint';

const Login = {
  async render() {
    return `
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
  },

  async afterRender() {
    
  },
};

export default Login;
