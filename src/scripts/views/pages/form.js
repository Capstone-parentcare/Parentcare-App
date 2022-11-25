import FavoriteMovieIdb from '../../data/favorite-movie-idb';
import { createMovieItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <div class="form-container">
      <h1>Form Pertanyaan</h1>
      <form action="/">
        <div>
          <label for="nama">Nama:</label><br>
          <input type="text" id="nama" placeholder="Nama" value=""><br>
        </div>
        <div>
          <label for="judul">Judul:</label><br>
          <input type="text" id="judul" placeholder="Judul Pertanyaan" value=""><br>
        </div>
        <div>
          <label for="pertanyaan">Pertanyaan:</label><br>
          <textarea id="pertanyaan" placeholder="Isi Pertanyaan" value=""></textarea><br>        
        </div>
        <input type="submit" value="Submit">
      </form> 
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

export default Like;
