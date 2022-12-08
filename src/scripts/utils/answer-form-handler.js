/* eslint-disable camelcase */
import API_ENDPOINT from '../globals/api-endpoint';

const answerFormHandler = async (event) => {
  event.preventDefault();
  const doctor_id = document.querySelector('#doctor_id').value.trim();
  const question_id = document.querySelector('#question_id').value.trim();
  const content = document.querySelector('#content').value.trim();
  console.log('cekcek1', content);
  console.log('cekcek2', doctor_id);
  console.log('cekcek3', question_id);
  if (doctor_id && question_id && content) {
    const response = await fetch(API_ENDPOINT.ANSWER, {
      method: 'POST',
      body: JSON.stringify({ doctor_id, question_id, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.status);
    if (response.status === 202) {
      window.location.href = '#/questions_psychologist';
    }
  }
};

export default answerFormHandler;
