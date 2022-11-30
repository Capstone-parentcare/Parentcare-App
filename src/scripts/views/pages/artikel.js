import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const Upcoming = {
  async render() {
    return `
      <div class="artikel-container">
        <span class="judul"><h1>Artikel List</h1></span>
        <div class="artikel">
          <img src="../../image/article_image_1.jpg" class="gambar-artikel" alt="Gambar artikel">
          <p>
            <a href="#/detail1">Tips Mendampingi Anak Mengerjakan PR</a>
          </p>
        </div>
        <hr>

        <div class="artikel">
          <img src="../../image/article_image_1.jpg" class="gambar-artikel" alt="Gambar artikel">
          <p>
            <a href="#/detail1">Tips Mendampingi Anak Mengerjakan PR</a>
          </p>
        </div>
        <hr>
      </div>
    `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.upcomingMovies();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default Upcoming;
