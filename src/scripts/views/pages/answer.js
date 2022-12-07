import API_ENDPOINT from '../../globals/api-endpoint';

const Answer = {
  async render() {
    return `
    <div class="form-container">
      <h1>Form Artikel</h1>
      <form id="question-form" method="POST" action="${API_ENDPOINT.QUESTION}">
        <div>
          <label for="name">Nama:</label><br>
          <input type="text" id="name" name="name" placeholder="Nama" required><br>
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

export default Answer;
