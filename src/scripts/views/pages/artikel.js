import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const Upcoming = {
  async render() {
    return `
      <span class="judul">Artikel List</span>
      
      <div class="artikel-container">
        <div class="artikel">
          <div><img src="../../image/article_image_1.jpg" alt="Gambar artikel"></div>
          <div><a href="#/detail1">Tips Mendampingi Anak Mengerjakan PR</a></div>
        </div>
        <div class="garis"></div>
      </div>

      <div class="artikel-container">
        <div class="artikel">
          <div><img src="../../image/article_image_1.jpg" alt="Gambar artikel"></div>
          <div><a href="/">Tips Mendampingi Anak Mengerjakan PR</a></div>
        </div>
        <div class="garis"></div>
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
