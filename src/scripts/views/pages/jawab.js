import FavoriteMovieIdb from '../../data/favorite-movie-idb';
import { createMovieItemTemplate } from '../templates/template-creator';

const Jawab = {
  async render() {
    return `
    <div class="judul-pertanyaan">Anak jadi nakal</div>

    <div class="jawab-container">
      <div class="jawab">
        <div><img src="../../image/user_ikon.png" alt="Gambar User"></div>
        <div class="user">anonymous</div>
      </div>
      <div class="pertanyaan-user">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</div>
      <div class="garis-batas"></div>
    
      <br>
      <div>Dijawab oleh:</div>
      <div class="jawab">
        <div><img src="../../image/dokter_ikon.png" alt="Gambar User"></div>
        <div class="user">anonymous</div>
      </div>
      <div class="pertanyaan-user">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</div>
      <div class="garis-batas"></div>
    </div>
    `;
  },

  async afterRender() {
    const movies = await FavoriteMovieIdb.getAllMovies();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default Jawab;
