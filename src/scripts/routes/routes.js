import Home from '../views/pages/home';
import Article from '../views/pages/article';
import ArticleDetail from '../views/pages/article-detail';
import QuestionForm from '../views/pages/question-form';
import QuestionDetail from '../views/pages/question-detail';
import Login from '../views/pages/login';
import HomePsychologist from '../views/pages/home-psychologist';
import ArticleForm from '../views/pages/article-form';
import Answer from '../views/pages/answer';
import AnswerPyscho from '../views/pages/question-detail-pyschologist';

const routes = {
  '/': Home, // default page
  '/questions': HomePsychologist,
  '/questions/:id': QuestionDetail,
  '/questions_form': QuestionForm,
  '/articles': Article,
  '/articles/:id': ArticleDetail,
  '/articles_form': ArticleForm,
  '/answers/:id': AnswerPyscho,
  '/answers_form/:id': Answer,
  '/login': Login,
};

export default routes;
