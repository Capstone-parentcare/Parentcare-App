import Home from '../views/pages/home';
import Article from '../views/pages/article';
import ArticleDetail from '../views/pages/article-detail';
import Form from '../views/pages/form';
import Jawab from '../views/pages/jawab';

const routes = {
  '/': Home, // default page
  '/questions': Home,
  '/questions/:id': Jawab,
  '/form': Form,
  '/articles': Article,
  '/articles/:id': ArticleDetail,
};

export default routes;
