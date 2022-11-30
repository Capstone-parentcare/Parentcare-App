import QuestionSource from '../../data/question-source';
import { createQuestionItemTemplate } from '../templates/template-creator';

const Beranda = {
  async render() {
    return `
    <hero-element></hero-element>
      <div class="button-pertanyaan">
        <a href="#/form">buat pertanyaan</a>
      </div>
      <div id="content">
        <span class="diskusi">Diskusi Terbaru</span>
      </div>
    `;
  },

  async afterRender() {
    const questions = await QuestionSource.questionList();
    const questionContainer = document.querySelector('#content');
    questions.forEach((question) => {
      questionContainer.innerHTML += createQuestionItemTemplate(question);
    });
  },
};

export default Beranda;
