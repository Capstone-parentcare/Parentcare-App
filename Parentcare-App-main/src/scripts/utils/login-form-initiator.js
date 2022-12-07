import loginFormHandler from './login-form-handler';

const LoginFormInitiator = {
  init({ formContainer }) {
    formContainer.addEventListener('submit', (event) => {
      loginFormHandler(event);
    });
  },
};

export default LoginFormInitiator;
