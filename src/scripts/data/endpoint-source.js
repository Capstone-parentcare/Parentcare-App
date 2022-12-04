import API_ENDPOINT from '../globals/api-endpoint';

class EndpointSource {
  static async questionList() {
    const response = await fetch(API_ENDPOINT.QUESTION);
    const responseJson = await response.json();

    return responseJson.data;
  }

  static async questionDetail(id) {
    const response = await fetch(API_ENDPOINT.QUESTION_DETAIL(id));
    const responseJson = await response.json();

    return responseJson.data;
  }

  static async questionDetailWithAnswer(id) {
    const response = await fetch(API_ENDPOINT.ANSWER_BY_QUESTION_ID(id));
    const responseJson = await response.json();

    return responseJson.data;
  }

  static async articleList() {
    const response = await fetch(API_ENDPOINT.ARTICLE);
    const responseJson = await response.json();

    return responseJson.data;
  }

  static async articleDetail(id) {
    const response = await fetch(API_ENDPOINT.ARTICLE_DETAIL(id));
    const responseJson = await response.json();

    return responseJson.data;
  }
}

export default EndpointSource;
