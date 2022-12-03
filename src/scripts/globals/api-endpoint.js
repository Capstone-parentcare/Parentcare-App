import CONFIG from './config';

const API_ENDPOINT = {
  QUESTION: `${CONFIG.BASE_URL}questions/`,
  QUESTION_DETAIL: (id) => `${CONFIG.BASE_URL}questions/${id}`,
  ARTICLE: `${CONFIG.BASE_URL}articles/`,
  ARTICLE_DETAIL: (id) => `${CONFIG.BASE_URL}articles/${id}`,
  ANSWER: `${CONFIG.BASE_URL}answers/`,
  ANSWER_DETAIL: (id) => `${CONFIG.BASE_URL}answers/${id}`,
  ANSWER_BY_QUESTION_ID: (id) => `${CONFIG.BASE_URL}answers/question/${id}`,
};

export default API_ENDPOINT;
