import UrlParser from '../../routes/url-parser';
import QuestionSource from '../../data/question-source';
import { detailQuestionTemplate, detailQuestionWithAnswerTemplate } from '../templates/template-creator';

const Jawab = {
  async render() {
    return `
    <div id="question-detail"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const answer = await QuestionSource.questionDetailWithAnswer(url.id);
    const answersContainer = document.querySelector('#question-detail');
    if (answer) {
      answersContainer.innerHTML = detailQuestionWithAnswerTemplate(answer);
    } else {
      const question = await QuestionSource.questionDetail(url.id);
      answersContainer.innerHTML = detailQuestionTemplate(question);
    }
  },
};

export default Jawab;
