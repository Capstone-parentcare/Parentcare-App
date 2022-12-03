import QuestionSource from '../../data/question-source';
<<<<<<< HEAD
import { createArticleItemTemplate } from '../templates/template-creator';
=======
import { articleListTemplate } from '../templates/template-creator';
>>>>>>> bc4513d4dd51cc954d36631461c7e1a389e1d377

const Artikel = {
  async render() {
    return `
<<<<<<< HEAD
      <div class="artikel-container">
        <span class="judul"><h1>Artikel List</h1></span>
      </div>
=======
      <div id="articleId"></div>
>>>>>>> bc4513d4dd51cc954d36631461c7e1a389e1d377
    `;
  },

  async afterRender() {
    const articles = await QuestionSource.articleList();
<<<<<<< HEAD
    const articlesContainer = document.querySelector('.artikel-container');
    articles.forEach((article) => {
      articlesContainer.innerHTML += createArticleItemTemplate(article);
=======
    const articleListContainer = document.querySelector('#articleId');
    articles.forEach((article) => {
      articleListContainer.innerHTML += articleListTemplate(article);
>>>>>>> bc4513d4dd51cc954d36631461c7e1a389e1d377
    });
  },
};

export default Artikel;
