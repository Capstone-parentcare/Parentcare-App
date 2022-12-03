import QuestionSource from '../../data/question-source';
import UrlParser from '../../routes/url-parser';

import { detailArticleTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="article"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const article = await QuestionSource.articleDetail(url.id);
    const articleContainer = document.querySelector('#article');
    articleContainer.innerHTML += detailArticleTemplate(article);
  },
};

export default Detail;
