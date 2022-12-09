import EndpointSource from '../../data/endpoint-source';
import { createQuestionItemTemplatePsychologist } from '../templates/template-creator';

const HomePsychologist = {
  async render() {
    const isDoctor = window.localStorage.getItem('doctorUsername');

    return `
    <hero-element></hero-element>
    <div id="question-container">
    <h1 class="doctor-name">Halo Dokter, ${isDoctor}!</h1>
      <h1 class="welcome">Selamat datang di ParentCare.</h1>
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
