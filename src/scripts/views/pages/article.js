import EndpointSource from '../../data/endpoint-source';
import { createArticleItemTemplate } from '../templates/template-creator';

const Article = {
  async render() {
    const isDoctor = window.localStorage.getItem('doctorID');

    if (isDoctor) {
      return `
        <div id="articleContainer" class="article-container">
          <h1 class="judul">Artikel List <a href="#/articles_form" class="button-article">Buat Artikel</a></h1>  
        </div>
      `;
    }

    return `
      <div id="articleContainer" class="article-container">
        <span class="judul"><h1>Artikel List</h1></span>
      </div>
    `;
  },

  async afterRender() {
    const articles = await EndpointSource.articleList();
    const articlesContainer = document.querySelector('#articleContainer');
    articles.forEach((article) => {
      articlesContainer.innerHTML += createArticleItemTemplate(article);
    });
  },
};

export default Article;
