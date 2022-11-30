import QuestionSource from '../../data/question-source';
import { answerTemplate } from '../templates/template-creator';

const Jawab = {
  async render() {
    return `
      <div id="answer"></div>
    `;
  },

  async afterRender() {
    const answers = await QuestionSource.answerQuestion();
    const answersContainer = document.querySelector('#answer');
    answers.forEach((answer) => {
      answersContainer.innerHTML += answerTemplate(answer);
    });
  },
};

export default Jawab;
