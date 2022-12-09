import API_ENDPOINT from '../../globals/api-endpoint';
import { QuestionFormInitiator } from '../../utils/form-initiator';

const QuestionForm = {
  async render() {
    return `
    <div class="form-container">
      <h1>Form Pertanyaan</h1>
      <form id="question-form" method="POST" action="${API_ENDPOINT.QUESTION}">
        <div>
          <label for="writer">Nama:</label><br>
          <input type="text" id="writer" name ="writer" placeholder="nama" required><br>
        </div>
        <div>
          <label for="title">Judul:</label><br>
          <input type="text" id="title" name="title" placeholder="Judul Pertanyaan" required><br>
        </div>
        <div>
          <label for="content">Pertanyaan:</label><br>
          <textarea id="content" name="content" placeholder="Isi Pertanyaan" required></textarea><br>        
        </div>
        <input type="submit" value="Submit">
      </form> 
    </div>
    `;
  },

  async afterRender() {
    QuestionFormInitiator.init({
      formContainer: document.querySelector('#question-form'),
    });
  },
};

export default QuestionForm;
