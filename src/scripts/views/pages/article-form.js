import API_ENDPOINT from '../../globals/api-endpoint';
import ArticleFormInitiator from '../../utils/form-initiator';

const doctorID = localStorage.getItem('doctorID');
const ArticleForm = {
  async render() {
    return `
    <div class="form-container">
      <h1>Form Artikel</h1>
      <form id="article-form" method="POST" action="${API_ENDPOINT.ARTICLE}">
        <div>
          <input hidden type="text" id="doctor_id" name="doctor_id" placeholder="Judul Pertanyaan" value="${doctorID}"  required></input>         
        </div>
        <div>
          <label for="title">Judul:</label><br>
          <input type="text" id="title" name="title" placeholder="Judul Artikel" required><br>
        </div>
        <div>
          <label for="image">Gambar:</label><br>
          <input type="file" id="image" name ="image" required><br>
        </div>
        <div>
          <label for="content">Isi:</label><br>
          <textarea id="content" name="content" placeholder="Isi Artikel" required></textarea><br>        
        </div>
        <input type="submit" value="Submit">
      </form> 
    </div>
    `;
  },

  async afterRender() {
    ArticleFormInitiator.init({
      formContainer: document.querySelector('#article-form'),
    });
  },
};

export default ArticleForm;
