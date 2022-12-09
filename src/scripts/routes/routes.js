import Article from '../views/pages/article';
import ArticleDetail from '../views/pages/article-detail';
import ArticleForm from '../views/pages/article-form';
import Home from '../views/pages/home';
import QuestionForm from '../views/pages/question-form';
import QuestionDetail from '../views/pages/question-detail';
import AnswerForm from '../views/pages/answer';
import Login from '../views/pages/login';
import Register from '../views/pages/register';

const routes = {
  '/': Home, // default page
  '/questions': Home,
  '/questions/:id': QuestionDetail,
  '/questions_form': QuestionForm,
  '/articles': Article,
  '/articles/:id': ArticleDetail,
  '/articles_form': ArticleForm,
  '/answers_form/:id': AnswerForm,
  '/login': Login,
  '/register': Register,
};

export default routes;
