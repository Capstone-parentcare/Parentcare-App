import questionFormHandler from './question-form-handler';
import answerFormHandler from './answer-form-handler';
import articleFormHandler from './article-form-handler';
import loginFormHandler from './login-form-handler';

const QuestionFormInitiator = {
  init({ formContainer }) {
    formContainer.addEventListener('submit', (event) => {
      questionFormHandler(event);
    });
  },
};

const AnswerFormInitiator = {
  init({ formContainer }) {
    formContainer.addEventListener('submit', (event) => {
      answerFormHandler(event);
    });
  },
};

const ArticleFormInitiator = {
  init({ formContainer }) {
    formContainer.addEventListener('submit', (event) => {
      articleFormHandler(event);
    });
  },
};

const LoginFormInitiator = {
  init({ formContainer }) {
    formContainer.addEventListener('submit', (event) => {
      loginFormHandler(event);
    });
  },
};

export {
  QuestionFormInitiator,
  AnswerFormInitiator,
  ArticleFormInitiator,
  LoginFormInitiator,
};
