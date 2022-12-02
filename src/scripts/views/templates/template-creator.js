import CONFIG from '../../globals/config';

const createQuestionItemTemplate = (question) => `
  <a href="#/jawab" class="question">
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

const articleListTemplate = (article) => `
  <div class="artikel-container">
    <span class="judul"><h1>Artikel List</h1></span>
    <div class="artikel">
      <div class="gambar-artikel">${article.image}</div>
      <p>
        <a href="#/detail1">${article.title}</a>
      </p>
    </div>
    <hr>
`;

const detailArticleTemplate = (article) => `
  <div class="judul-artikel">${article.title}</div>
  <div>${article.image}</div>
  <div class="isi-artikel">
    <p>${article.content}</p>
  </div>
`;

const answerTemplate = (answer) => `
  <div class="judul-pertanyaan">${answer.title}</div>

  <div class="jawab-container">
    <div class="jawab">
      <div><img src="../../image/user_ikon.png" alt="Gambar User"></div>
      <div class="user">${answer.writer}</div>
    </div>
    <div class="pertanyaan-user">${answer.content}</div>
    <div class="garis-batas"></div>
  <br>

  <div>Dijawab oleh:</div>
    <div class="jawab">
      <div><img src="../../image/dokter_ikon.png" alt="Gambar User"></div>
      <div class="user">${answer.writer}</div>
    </div>
    <div class="pertanyaan-user">${answer.content}</div>
    <div class="garis-batas"></div>
  </div>
`;

const createMovieDetailTemplate = (movie) => `
  <h2 class="movie__title">${movie.title}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + movie.poster_path}" alt="${movie.title}" />
  <div class="movie__info">
  <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${movie.tagline}</p>
    <h4>Release Date</h4>
    <p>${movie.release_date}</p>
    <h4>Duration</h4>
    <p>${movie.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${movie.vote_average}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${movie.overview}</p>
  </div>
`;

const createMovieItemTemplate = (movie) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster" alt="${movie.title}"
           src="${movie.backdrop_path ? CONFIG.BASE_IMAGE_URL + movie.backdrop_path : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${movie.vote_average}</span></p>
      </div>
    </div>
    <div class="movie-item__content">
      <h3><a href="/#/detail/${movie.id}">${movie.title}</a></h3>
      <p>${movie.overview}</p>
    </div>
  </div>
`;

export {
  createMovieItemTemplate,
  createMovieDetailTemplate,
  createQuestionItemTemplate,
  detailArticleTemplate,
  articleListTemplate,
  answerTemplate,
};
