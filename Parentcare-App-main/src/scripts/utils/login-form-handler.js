/* eslint-disable no-undef */
const axios = require('axios');
const Swal = require('sweetalert2');

const questionFormHandler = async (event) => {
  event.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  axios.post(`http://localhost:8081/api/login?email=${email}&password=${password}`).then((response) => {
    console.log('HIHI', response.data.status);
    if (response.data.status === 'Success') {
      console.log('MASUKK');
      window.location.href = '/questions';
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Password Atau Email Salah',
        text: response.data.display_message,
      });
    }
  });
};

export default questionFormHandler;
