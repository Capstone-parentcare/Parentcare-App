import QuestionSource from '../../data/question-source';
import { createArticleItemTemplate } from '../templates/template-creator';

const Artikel = {
  async render() {
    return `
      <div id="articleContainer" class="article-container">
        <span class="judul"><h1>Artikel List</h1></span>
      </div>
    `;
  },

  async afterRender() {
    const articles = await QuestionSource.articleList();
    const articlesContainer = document.querySelector('#articleContainer');
    articles.forEach((article) => {
      articlesContainer.innerHTML += createArticleItemTemplate(article);
    });
  },
};

export default Artikel;
