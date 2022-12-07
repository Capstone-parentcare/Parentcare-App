import Home from '../views/pages/home';
import Article from '../views/pages/article';
import ArticleDetail from '../views/pages/article-detail';
import QuestionForm from '../views/pages/question-form';
import QuestionDetail from '../views/pages/question-detail';
import LoginForm from '../views/pages/login-form';

const routes = {
  '/': LoginForm, // default page
  '/questions': Home,
  '/questions/:id': QuestionDetail,
  '/form': QuestionForm,
  '/articles': Article,
  '/articles/:id': ArticleDetail,
  '/login': LoginForm,
};

export default routes;
