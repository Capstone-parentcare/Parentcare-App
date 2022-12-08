import questionFormHandler from './article-form-handler';

const QuestionFormInitiator = {
  init({ formContainer }) {
    formContainer.addEventListener('submit', (event) => {
      questionFormHandler(event);
    });
  },
};

export default QuestionFormInitiator;
