import CONFIG from './config';

const API_ENDPOINT = {
  QUESTION: `${CONFIG.BASE_URL}questions/`,
  QUESTION_DETAIL: (id) => `${CONFIG.BASE_URL}questions/${id}`,
  ARTICLE: `${CONFIG.BASE_URL}articles/`,
  ANSWER: `${CONFIG.BASE_URL}answers/`,
};

export default API_ENDPOINT;
