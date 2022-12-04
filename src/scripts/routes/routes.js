import Beranda from '../views/pages/beranda';
import article from '../views/pages/article';
import Detail from '../views/pages/detail';
import Form from '../views/pages/form';
import Jawab from '../views/pages/jawab';

const routes = {
  '/': Beranda, // default page
  '/questions': Beranda,
  '/questions/:id': Jawab,
  '/form': Form,
  '/articles': article,
  '/articles/:id': Detail,
};

export default routes;
