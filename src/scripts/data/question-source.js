import API_ENDPOINT from '../globals/api-endpoint';

class QuestionSource {
  static async questionList() {
    const response = await fetch(API_ENDPOINT.QUESTION);
    const responseJson = await response.json();
    console.log(responseJson.data);
    return responseJson.data;
  }

  static async articleList() {
    const response = await fetch(API_ENDPOINT.ARTICLE);
    const responseJson = await response.json();
    console.log(responseJson.data);
    return responseJson.data;
  }

  static async questionDetail(id) {
    const response = await fetch(API_ENDPOINT.QUESTION_DETAIL(id));
    return response.json();
  }
}

export default QuestionSource;
