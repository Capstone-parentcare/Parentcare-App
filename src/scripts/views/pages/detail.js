import QuestionSource from '../../data/question-source';

import { detailArticleTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="article"></div>
    `;
  },

  async afterRender() {
    const articles = await QuestionSource.articleList();
    const articleContainer = document.querySelector('#article');
    articles.forEach((question) => {
      articleContainer.innerHTML += detailArticleTemplate(question);
    });
  },
};

export default Detail;
