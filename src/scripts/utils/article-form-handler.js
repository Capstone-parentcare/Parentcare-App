import API_ENDPOINT from '../globals/api-endpoint';

const axios = require('axios');

const articleFormHandler = async (event) => {
  event.preventDefault();
  const data = new FormData();
  const doctorid = document.querySelector('#doctor_id');
  const title = document.querySelector('#title');
  const content = document.querySelector('#content');
  const image = document.querySelector('#image');

  data.append('doctor_id', doctorid.value);
  data.append('title', title.value);
  data.append('content', content.value);
  data.append('image', image.files[0]);

  const config = {
    method: 'POST',
    url: API_ENDPOINT.ARTICLE,
    data,
  };
  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      location.replace('#/articles');
    })
    .catch((error) => {
      console.log(error);
    });
};

export default articleFormHandler;
