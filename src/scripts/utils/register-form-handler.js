import API_ENDPOINT from '../globals/api-endpoint';

const registerFormHandler = async (event) => {
  event.preventDefault();
  const username = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  if (username && email && password) {
    const response = await fetch(API_ENDPOINT.REGISTER, {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    alert('Akun Sudah Dibuat Silahkan Login');
    window.location.href = '#/login';
    if (response.status === 200) {
      alert('Akun Sudah Dibuat Silahkan Login');
      window.location.href = '#/login';
    }
  }
};

export default registerFormHandler;
