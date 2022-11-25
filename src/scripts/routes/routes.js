import Beranda from '../views/pages/beranda';
import Artikel from '../views/pages/artikel';
import Detail from '../views/pages/detail';
import Form from '../views/pages/form';
import Jawab from '../views/pages/jawab';

const routes = {
  '/': Beranda, // default page
  '/beranda': Beranda,
  '/artikel': Artikel,
  // '/detail/:id': Detail,
  '/detail1': Detail,
  '/form': Form,
  '/jawab': Jawab,
};

export default routes;
