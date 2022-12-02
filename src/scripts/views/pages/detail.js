import UrlParser from '../../routes/url-parser';
import QuestionSource from '../../data/question-source';
import { detailArticleTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="article"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailArticle = await QuestionSource.articleDetail(url.id);
    const articleContainer = document.querySelector('#article');
    articleContainer.innerHTML += detailArticleTemplate(detailArticle);
  },
};

export default Detail;
