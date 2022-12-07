import API_ENDPOINT from '../globals/api-endpoint';

const questionFormHandler = async (event) => {
  event.preventDefault();
  const writer = document.querySelector('#writer').value.trim();
  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();
  if (writer && title && content) {
    const response = await fetch(API_ENDPOINT.QUESTION, {
      method: 'POST',
      body: JSON.stringify({ writer, title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      window.location.href = '/';
    }
  }
};

export default questionFormHandler;
