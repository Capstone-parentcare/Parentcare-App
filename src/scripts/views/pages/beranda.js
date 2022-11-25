import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const NowPlaying = {
  async render() {
    return `
    <hero-element></hero-element>
      <div class="button-pertanyaan">
        <a href="#/form">buat pertanyaan</a>
      </div>
      <span class="diskusi">Diskusi Terbaru</span>
      <div class="pertanyaan">
        <div><a href="#/jawab">Anak nakal</a></div>
        <div>anak saya kenapa ya dok, setelah pulang sekolah dianya sekarang ...</div>
        <div><br>oleh : anonymous</div>
        <div class="garis"></div>
      </div>
      <div class="pertanyaan">
        <div><a href="/">Anak baik</a></div>
        <div>anak saya kenapa ya dok, setelah pulang sekolah dianya sekarang ...</div>
        <div><br>oleh : anonymous</div>
      </div>
    `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.nowPlayingMovies();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default NowPlaying;
