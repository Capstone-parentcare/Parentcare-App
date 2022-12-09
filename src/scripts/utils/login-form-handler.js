/* eslint-disable no-undef */
import logoutButtonInitiator from './logout-button-initiator';

const logoutButtonContainer = document.querySelector('.menu');
const axios = require('axios');
const Swal = require('sweetalert2');

const loginFormHandler = async (event) => {
  event.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  axios.post(`http://localhost:8081/api/login?email=${email}&password=${password}`).then((response) => {
    if (response.data.status === 'Success') {
      window.localStorage.setItem('doctorID', response.data.data[0].id);
      window.localStorage.setItem('doctorUsername', response.data.data[0].username);

      logoutButtonInitiator.init({
        logoutButtonContainer,
      });

      window.location.href = '#/questions';
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Password Atau Email Salah',
        text: response.data.display_message,
      });
    }
  });
};

export default loginFormHandler;
