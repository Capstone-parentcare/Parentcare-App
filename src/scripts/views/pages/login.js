import API_ENDPOINT from '../../globals/api-endpoint';
import LoginFormInitiator from '../../utils/form-initiator';

const Login = {
  async render() {
    return `
    <div class="login-container">
        <h1>Login</h1>
        <form id="login-form" method="POST" action="${API_ENDPOINT.LOGIN}">
            <label>Email</label><br>
            <input type="email" id="email" name ="email" placeholder="Isi Email Anda" required><br>
            <label>Password</label><br>
            <input type="password" id="password" name="password" placeholder="Isi Password Anda" required><br>
            <input type="submit" value="Submit">
        </form>
      </div>
    `;
  },

  async afterRender() {
    LoginFormInitiator.init({
      formContainer: document.querySelector('#login-form'),
    });
  },
};

export default Login;
