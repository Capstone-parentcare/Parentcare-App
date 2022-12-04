import UrlParser from '../../routes/url-parser';
import EndpointSource from '../../data/endpoint-source';
import { detailArticleTemplate } from '../templates/template-creator';

const ArticleDetail = {
  async render() {
    return `
      <div id="article"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const article = await EndpointSource.articleDetail(url.id);
    const articleContainer = document.querySelector('#article');
    articleContainer.innerHTML += detailArticleTemplate(article);
  },
};

export default ArticleDetail;
