import CONFIG from '../../globals/config';

const createQuestionItemTemplate = (question) => `
  <a href="#/questions/${question.id}" class="question">
    <div class="question-title">
      <h2>${question.title}</h2>
    </div>
    <div class="question-content">
      <p>${question.content}</p>
    </div>
    <div class="question-writer">
      oleh : ${question.writer}
    </div>
    <hr>
  </a>
`;

const detailQuestionWithAnswerTemplate = (answer) => `
<div class="judul-pertanyaan">${answer.question.title}</div>
<div class="jawab-container">
  <div class="jawab">
    <div><img src="../../image/user_ikon.png" alt="Gambar User"></div>
    <div class="user">${answer.question.writer}</div>
  </div>
  <div class="pertanyaan-user">${answer.question.content}</div>
  <div class="garis-batas"></div>
<br>
<div>Dijawab oleh:</div>
  <div class="jawab">
    <div><img src="../../image/dokter_ikon.png" alt="Gambar User"></div>
    <div class="user">${answer.doctor.username}</div>
  </div>
  <div class="pertanyaan-user">${answer.content}</div>
  <div class="garis-batas"></div>
</div>
`;

const detailQuestionTemplate = (question) => `
<div class="judul-pertanyaan">${question.title}</div>
<div class="jawab-container">
  <div class="jawab">
    <div><img src="../../image/user_ikon.png" alt="Gambar User"></div>
    <div class="user">${question.writer}</div>
  </div>
  <div class="pertanyaan-user">${question.content}</div>
  <div class="garis-batas"></div>
<br>
`;

const createArticleItemTemplate = (article) => `
  <div class="artikel">
    <img src="${CONFIG.BASE_IMAGE_URL + article.image}" class="gambar-artikel" alt="Gambar artikel">
    <p>
      <a href="#/articles/${article.id}">${article.title}</a>
    </p>
  </div>
  <hr>
`;

const detailArticleTemplate = (article) => `
  <div class="judul-artikel">${article.title}</div>
  <img src="${CONFIG.BASE_IMAGE_URL + article.image}" class="gambar-artikel" alt="Gambar artikel">
  <div class="isi-artikel">
    <p>${article.content}</p>
  </div>
`;

export {
  createQuestionItemTemplate,
  detailQuestionWithAnswerTemplate,
  detailQuestionTemplate,
  createArticleItemTemplate,
  detailArticleTemplate,
};
