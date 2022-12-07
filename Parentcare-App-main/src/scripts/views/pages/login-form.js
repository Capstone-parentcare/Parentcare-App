import API_ENDPOINT from '../../globals/api-endpoint';
import LoginFormInitiator from '../../utils/login-form-initiator';

const LoginForm = {
  async render() {
    return `
    <div class="form-container">
      <h1>Form Login</h1>
      <form id="question-form" method="POST" action="${API_ENDPOINT.LOGIN}">
        <div>
          <label for="email">Email:</label><br>
          <input type="email" id="email" name ="email" placeholder="Isi Email Anda" required><br>
        </div>
        <div>
          <label for="password">Password:</label><br>
          <input type="password" id="password" name="password" placeholder="Isi Password Anda" required><br>
        </div>
        <input type="submit" value="Submit">
      </form> 
    </div>
    `;
  },

  async afterRender() {
    LoginFormInitiator.init({
      formContainer: document.querySelector('#question-form'),
    });
  },
};

export default LoginForm;
