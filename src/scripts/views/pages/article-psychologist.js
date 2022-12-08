import EndpointSource from '../../data/endpoint-source';
import { createArticleItemTemplate } from '../templates/template-creator';

const ArticlePsychologist = {
  async render() {
    return `
      <div id="articleContainer" class="article-container">
        <h1 class="judul">Artikel List <a href="#/articles_form" class="button-article">Buat Artikel</a></h1>
        
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

export default ArticlePsychologist;
