import UrlParser from '../../routes/url-parser';
import EndpointSource from '../../data/endpoint-source';
import { detailQuestionTemplate, detailQuestionWithAnswerTemplate, answerButtonTemplate } from '../templates/template-creator';

const QuestionDetail = {
  async render() {
    return `
    <div id="question-detail"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const answer = await EndpointSource.questionDetailWithAnswer(url.id);
    const answersContainer = document.querySelector('#question-detail');
    const isDoctor = window.localStorage.getItem('doctorID');
    if (answer) {
      answersContainer.innerHTML = detailQuestionWithAnswerTemplate(answer);
    } else {
      const question = await EndpointSource.questionDetail(url.id);
      answersContainer.innerHTML = detailQuestionTemplate(question);
      if (isDoctor) {
        answersContainer.innerHTML = answerButtonTemplate(question);
      }
    }
  },
};

export default QuestionDetail;
