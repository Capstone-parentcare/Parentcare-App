import EndpointSource from '../../data/endpoint-source';
import { createQuestionItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <hero-element></hero-element>
    <div id="question-container">
      <a class="button-question" href="#/form">
        <i class="fa fa-pencil" aria-hidden="true"></i>
        Buat Pertanyaan
      </a>
      <h1 class="new-discussion">Diskusi Terbaru</h1>
    </div>
    `;
  },

  async afterRender() {
    const questions = await EndpointSource.questionList();
    const questionContainer = document.querySelector('#question-container');
    questions.forEach((question) => {
      questionContainer.innerHTML += createQuestionItemTemplate(question);
    });
  },
};

export default Home;
