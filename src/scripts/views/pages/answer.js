import API_ENDPOINT from '../../globals/api-endpoint';
import UrlParser from '../../routes/url-parser';
import EndpointSource from '../../data/endpoint-source';
import { AnswerFormInitiator } from '../../utils/form-initiator';

const doctorID = localStorage.getItem('doctorID');

const Answer = {
  async render() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const question = await EndpointSource.questionDetail(url.id);
    return `
    <div class="question-title">${question.title}</div>
    <div class="answer-container">
    <div class="answer">
      <div><img src="../../image/user_ikon.png" alt="Gambar User"></div>
      <div class="user">${question.writer}</div>
    </div>
    <div class="pertanyaan-user">${question.content}</div>
    <div class="line-boundary"></div>
    <br>
    <div class="form-container">
      <form id="answer-form" method="POST" action="${API_ENDPOINT.ANSWER}">
        <div>
          <input type="text" id="doctor_id" name="doctor_id" placeholder="Judul Pertanyaan" value="${doctorID}"  hidden required></input>  
        </div>
        <div>
          <input type="text" id="question_id" name="question_id" placeholder="Judul Pertanyaan" value="${question.id}" hidden required></input>
        </div>
        <div>
          <label for="content">Jawab</label><br>
          <textarea id="content" name="content" placeholder="Isi Jawaban Anda" required></textarea><br>        
        </div>
        <input type="submit" value="Submit">
      </form>
    </div>
    `;
  },

  async afterRender() {
    AnswerFormInitiator.init({
      formContainer: document.querySelector('#answer-form'),
    });
  },
};

export default Answer;
