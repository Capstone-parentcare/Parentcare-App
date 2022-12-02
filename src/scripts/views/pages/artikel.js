import QuestionSource from '../../data/question-source';
import { articleListTemplate } from '../templates/template-creator';

const Artikel = {
  async render() {
    return `
      <div id="articleId"></div>
    `;
  },

  async afterRender() {
    const articles = await QuestionSource.articleList();
    const articleListContainer = document.querySelector('#articleId');
    articles.forEach((article) => {
      articleListContainer.innerHTML += articleListTemplate(article);
    });
  },
};

export default Artikel;
