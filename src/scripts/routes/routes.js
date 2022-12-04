import Home from '../views/pages/home';
import article from '../views/pages/article';
import Detail from '../views/pages/detail';
import Form from '../views/pages/form';
import Jawab from '../views/pages/jawab';

const routes = {
  '/': Home, // default page
  '/questions': Home,
  '/questions/:id': Jawab,
  '/form': Form,
  '/articles': article,
  '/articles/:id': Detail,
};

export default routes;
