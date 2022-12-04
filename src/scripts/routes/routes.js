import Home from '../views/pages/home';
import Article from '../views/pages/article';
import ArticleDetail from '../views/pages/article-detail';
import QuestionForm from '../views/pages/question-form';
import QuestionDetail from '../views/pages/question-detail';

const routes = {
  '/': Home, // default page
  '/questions': Home,
  '/questions/:id': QuestionDetail,
  '/form': QuestionForm,
  '/articles': Article,
  '/articles/:id': ArticleDetail,
};

export default routes;
