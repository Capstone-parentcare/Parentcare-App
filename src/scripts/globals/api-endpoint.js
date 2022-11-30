/* eslint-disable max-len */
import CONFIG from './config';

const API_ENDPOINT = {
  QUESTION: `${CONFIG.BASE_URL}questions/`,
  QUESTION_DETAIL: (id) => `${CONFIG.BASE_URL}questions/${id}`,
  ARTICLE: `${CONFIG.BASE_URL}articles/`,
};

export default API_ENDPOINT;
