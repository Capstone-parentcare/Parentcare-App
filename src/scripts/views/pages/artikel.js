import QuestionSource from '../../data/question-source';
import { createArticleItemTemplate } from '../templates/template-creator';

const Upcoming = {
  async render() {
    return `
      <div class="artikel-container">
        <span class="judul"><h1>Artikel List</h1></span>
      </div>
    `;
  },

  async afterRender() {
    const articles = await QuestionSource.articleList();
    const articlesContainer = document.querySelector('.artikel-container');
    articles.forEach((article) => {
      articlesContainer.innerHTML += createArticleItemTemplate(article);
    });
  },
};

export default Upcoming;
