import EndpointSource from '../../data/endpoint-source';
import { createQuestionItemTemplatePsychologist } from '../templates/template-creator';

const HomePsychologist = {
  async render() {
    return `
    <hero-element></hero-element>
    <div id="question-container">
      <h1 class="new-discussion">Diskusi Terbaru</h1>
    </div>
    `;
  },

  async afterRender() {
    const questions = await EndpointSource.questionList();
    const questionContainer = document.querySelector('#question-container');
    questions.forEach((question) => {
      questionContainer.innerHTML += createQuestionItemTemplatePsychologist(question);
    });
  },
};

export default HomePsychologist;
