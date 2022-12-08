import articleFormHandler from './article-form-handler';

const ArticleFormInitiator = {
  init({ formContainer }) {
    formContainer.addEventListener('submit', (event) => {
      articleFormHandler(event);
    });
  },
};

export default ArticleFormInitiator;
