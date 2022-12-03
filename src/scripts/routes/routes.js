import Beranda from '../views/pages/beranda';
import Artikel from '../views/pages/artikel';
import Detail from '../views/pages/detail';
import Form from '../views/pages/form';
import Jawab from '../views/pages/jawab';

const routes = {
  '/': Beranda, // default page
  '/questions': Beranda,
  '/questions/:id': Jawab,
  '/form': Form,
  '/articles': Artikel,
  '/articles/:id': Detail,
};

export default routes;
