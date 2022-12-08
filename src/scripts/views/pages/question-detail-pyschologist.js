import UrlParser from '../../routes/url-parser';
import EndpointSource from '../../data/endpoint-source';
import { answeredTemplatePyscho, detailAnswerTemplate } from '../templates/template-creator';

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
    if (answer) {
      answersContainer.innerHTML = answeredTemplatePyscho(answer);
      console.log('cekcekcekkanswer', answer.id);
    } else {
      const question = await EndpointSource.questionDetail(url.id);
      console.log('cekcekcekk', question.id);
      answersContainer.innerHTML = detailAnswerTemplate(question);
    }
  },
};
export default QuestionDetail;
