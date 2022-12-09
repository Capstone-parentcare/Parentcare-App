import API_ENDPOINT from '../../globals/api-endpoint';
// import LoginFormInitiator from '../../utils/login-form-initiator';

const Register = {
  async render() {
    return `
    <div class="register-container">
        <h1>Register</h1>
        <form id="register-form" method="POST" action="${API_ENDPOINT.LOGIN}">
            <label>Email</label><br>
            <input type="email" id="email" name ="email" placeholder="Isi Email Anda" required><br>
            <label>Password</label><br>
            <input type="password" id="password" name="password" placeholder="Isi Password Anda" required><br>
            <label>Confirm Password</label><br>
            <input type="password" id="password" name="password" placeholder="Isi Password Anda" required><br>
            <input type="submit" value="Submit">
        </form>
      </div>
    `;
  },

//   async afterRender() {
//     LoginFormInitiator.init({
//       formContainer: document.querySelector('#register-form'),
//     });
//   },
};

export default Register;
