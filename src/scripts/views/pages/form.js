import API_ENDPOINT from '../../globals/api-endpoint';
import QuestionFormInitiator from '../../utils/form-initiator';

const Like = {
  async render() {
    return `
    <div class="form-container">
      <h1>Form Pertanyaan</h1>
      <form id="question-form" method="POST" action="${API_ENDPOINT.QUESTION}">
        <div>
          <label for="writer">Nama:</label><br>
          <input type="text" id="writer" name ="writer" placeholder="nama" value="
          bapak anonim
          "><br>
        </div>
        <div>
          <label for="title">Judul:</label><br>
          <input type="text" id="title" name="title" placeholder="Judul Pertanyaan" value="
            QUESTION TITLE
          "><br>
        </div>
        <div>
          <label for="content">Pertanyaan:</label><br>
          <textarea id="content" name="content" placeholder="Isi Pertanyaan" value="
          Vestibulum urna est, dignissim non quam volutpat, commodo rutrum magna. Cras placerat velit in quam porta, vel sollicitudin urna gravida. Etiam pharetra nec tortor eu pellentesque. Vivamus viverra fermentum velit in condimentum. Suspendisse sed lorem sit amet massa interdum imperdiet. Duis luctus sodales congue. Donec vestibulum velit sit amet consectetur euismod. 
          "></textarea><br>        
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

export default Like;
