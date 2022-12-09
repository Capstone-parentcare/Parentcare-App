const logoutButtonInitiator = {
  init({ logoutButtonContainer }) {
    logoutButtonContainer.addEventListener('click', async () => {
      // delete this button from navbar using class logout
      logoutButtonContainer.classList.add('logout');
      logoutButtonContainer.remove();
      window.localStorage.removeItem('doctorID');
      window.location.href = '#/login';
    });
  },
};

export default logoutButtonInitiator;
