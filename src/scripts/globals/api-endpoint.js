import CONFIG from './config';

const API_ENDPOINT = {
  QUESTION: `${CONFIG.BASE_URL}questions/`,
  QUESTION_DETAIL: (id) => `${CONFIG.BASE_URL}questions/${id}`,
  ARTICLE: `${CONFIG.BASE_URL}articles/`,
  ARTICLE_DETAIL: (id) => `${CONFIG.BASE_URL}articles/${id}`,
  ANSWER: `${CONFIG.BASE_URL}answers/`,
  ANSWER_DETAIL: (id) => `${CONFIG.BASE_URL}answers/${id}`,
  ANSWER_BY_QUESTION_ID: (id) => `${CONFIG.BASE_URL}answers/question/${id}`,
  LOGIN: `${CONFIG.BASE_URL}login/`,
  REGISTER: `${CONFIG.BASE_URL}doctors/`,
};

export default API_ENDPOINT;
