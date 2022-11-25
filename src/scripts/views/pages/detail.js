import UrlParser from '../../routes/url-parser';
import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div class="judul-artikel">Tips Mendampingi Anak Mengerjakan PR dan Tugas Sekolah di Rumah</div>
      <div><img src="../../image/article_image_1.jpg" alt="Gambar artikel"></div>
      <div class="isi-artikel">Meskipun ada wacana untuk menghapus Pekerjaan Rumah (PR) , namun sampai sekarang banyak sekolah tetap memberikan PR dan tugas sekolah untuk dikerjakan di rumah. Bila tidak disiasati dengan benar maka baik bagi orangtua maupun anak hal tersebut akan menimbulkan stress.
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    const movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML = createMovieDetailTemplate(movie);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        backdrop_path: movie.backdrop_path,
        vote_average: movie.vote_average,
      },
    });
  },
};

export default Detail;
