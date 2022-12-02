import questionFormHandler from './question-form-handler';

const QuestionFormInitiator = {
  init({ formContainer }) {
    console.log('init form success');
    formContainer.addEventListener('submit', (event) => {
      questionFormHandler(event);
    });
  },
};

export default QuestionFormInitiator;
