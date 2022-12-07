import EndpointSource from '../../data/endpoint-source';
import { createArticleItemTemplate } from '../templates/template-creator';

const Article = {
  async render() {
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
