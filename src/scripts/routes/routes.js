import Home from '../views/pages/home';
import Article from '../views/pages/article';
import ArticleDetail from '../views/pages/article-detail';
import QuestionForm from '../views/pages/question-form';
import QuestionDetail from '../views/pages/question-detail';
import Login from '../views/pages/login';
import HomePsychologist from '../views/pages/home-psychologist';
import ArticlePsychologist from '../views/pages/article-psychologist';
import ArticleForm from '../views/pages/article-form';
import Answer from '../views/pages/answer';

const routes = {
  '/': Home, // default page
  '/questions': Home,
  '/questions/:id': QuestionDetail,
  '/form': QuestionForm,
  '/articles': Article,
  '/articles/:id': ArticleDetail,
  '/login': Login,
  '/questions_psychologist': HomePsychologist,
  '/articles_psychologist': ArticlePsychologist,
  '/articles_form': ArticleForm,
  '/answer': Answer,
};

export default routes;
