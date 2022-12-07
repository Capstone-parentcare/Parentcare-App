import API_ENDPOINT from '../../globals/api-endpoint';

const ArticleForm = {
  async render() {
    return `
    <div class="form-container">
      <h1>Form Artikel</h1>
      <form id="question-form" method="POST" action="${API_ENDPOINT.QUESTION}">
        <div>
          <label for="title">Judul:</label><br>
          <input type="text" id="title" name="title" placeholder="Judul Pertanyaan" required><br>
        </div>
        <div>
          <label for="picture">Gambar:</label><br>
          <input type="file" id="picture" name ="picture" required><br>
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

  // eslint-disable-next-line no-empty-function
  async afterRender() {

  },
};

export default ArticleForm;
