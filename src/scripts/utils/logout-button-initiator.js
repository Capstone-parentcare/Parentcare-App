/* eslint-disable no-param-reassign */
import { logoutButtonTemplate } from '../views/templates/template-creator';

const logoutButtonInitiator = {
  init({ logoutButtonContainer }) {
    logoutButtonContainer.innerHTML += logoutButtonTemplate();
    const logoutButton = document.querySelector('.logout');
    logoutButton.addEventListener('click', async () => {
      logoutButton.remove();
      window.localStorage.removeItem('doctorID');
      window.localStorage.removeItem('doctorUsername');
      window.location.href = '#/login';
    });
  },
};

export default logoutButtonInitiator;
