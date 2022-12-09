import CONFIG from '../../globals/config';

const createQuestionItemTemplate = (question) => `
  <a href="#/questions/${question.id}" class="question">
    <div>
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

const createQuestionItemTemplatePsychologist = (question) => `
  
  <a href="#/questions/${question.id}" class="question">
    <div>
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
<div class="question-title">${answer.question.title}</div>
<div class="answer-container">
  <div class="answer">
    <div><img src="../../image/user_ikon.png" alt="Gambar User"></div>
    <div class="user">${answer.question.writer}</div>
  </div>
  <div class="pertanyaan-user">${answer.question.content}</div>
  <div class="line-boundary"></div>
<br>
<div>Dijawab oleh:</div>
  <div class="answer">
    <div><img src="../../image/dokter_ikon.png" alt="Gambar User"></div>
    <div class="user">${answer.doctor.username}</div>
  </div>
  <div class="pertanyaan-user">${answer.content}</div>
  <div class="line-boundary"></div>
</div>
`;

const detailQuestionTemplate = (question) => `
<div class="question-title">${question.title}</div>
<div class="answer-container">
  <div class="answer">
    <div><img src="../../image/user_ikon.png" alt="Gambar User"></div>
    <div class="user">${question.writer}</div>
  </div>
  <div class="pertanyaan-user">${question.content}</div>
  <div class="line-boundary"></div>
<br>
`;

const createArticleItemTemplate = (article) => `
  <div class="article">
    <img src="${CONFIG.BASE_IMAGE_URL + article.image}" class="article-picture" alt="Gambar artikel">
    <p>
      <a href="#/articles/${article.id}">${article.title}</a>
    </p>
  </div>
  <hr>
`;

const detailArticleTemplate = (article) => `
  <div class="container-detail-article">
    <div class="article-title">${article.title}</div>
    <img src="${CONFIG.BASE_IMAGE_URL + article.image}" class="gambar-artikel" alt="Gambar artikel">
    <div class="article-content">
      <p>${article.content}</p>
      <div class="agag"></div>
  </div>
`;
const answeredTemplatePyscho = (answer) => `
<div class="question-title">${answer.question.title}</div>
<div class="answer-container">
  <div class="answer">
    <div><img src="../../image/user_ikon.png" alt="Gambar User"></div>
    <div class="user">${answer.question.writer}</div>
  </div>
  <div class="pertanyaan-user">${answer.question.content}</div>
  <div class="line-boundary"></div>
<br>
<div>Dijawab oleh:</div>
  <div class="answer">
    <div><img src="../../image/dokter_ikon.png" alt="Gambar User"></div>
    <div class="user">${answer.doctor.username}</div>
  </div>
  <div class="pertanyaan-user">${answer.content}</div>
  <div class="line-boundary"></div>
</div>
`;

const detailAnswerTemplate = (question) => `
<div class="question-title">${question.title}</div>
<div class="answer-container">
  <div class="answer">
    <div><img src="../../image/user_ikon.png" alt="Gambar User"></div>
    <div class="user">${question.writer}</div>
  </div>
  <div class="pertanyaan-user">${question.content}</div>
  <div class="line-boundary"></div>
<br>
`;

const logoutButton = () => `
<li class="logout"><a>
  <i class="fa fa-sign-out" aria-hidden="true"></i>
  <span>Keluar</span>
</a></li>
`;

const answerButton = (question) => `
<div class="question-title">${question.title}</div>
<div class="answer-container">
  <div class="answer">
    <div><img src="../../image/user_ikon.png" alt="Gambar User"></div>
    <div class="user">${question.writer}</div>
  </div>
  <div class="pertanyaan-user">${question.content}</div>
  <div class="line-boundary"></div>
<br>
<a href="#/answer/${question.id}" class="button-answer">Jawab</a>
`;

export {
  createQuestionItemTemplate,
  detailQuestionWithAnswerTemplate,
  detailQuestionTemplate,
  createArticleItemTemplate,
  detailArticleTemplate,
  createQuestionItemTemplatePsychologist,
  answeredTemplatePyscho,
  detailAnswerTemplate,
  logoutButton,
  answerButton,
};
