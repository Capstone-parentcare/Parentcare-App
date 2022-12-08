import questionFormHandler from './answer-form-handler';

const AnswerFormInitiator = {
  init({ formContainer }) {
    formContainer.addEventListener('submit', (event) => {
      questionFormHandler(event);
    });
  },
};

export default AnswerFormInitiator;
