/* eslint-disable camelcase */
import API_ENDPOINT from "../globals/api-endpoint";
const axios = require('axios');

const questionFormHandler = async (event) => {
  event.preventDefault();
  var data = new FormData();
  const doctorid = document.querySelector("#doctor_id");
  const tit = document.querySelector("#title");
  const con = document.querySelector("#content");
  const img = document.querySelector("#image");

  // const doctor_id = data.append("doctor_id", doctorid);
  // const title = data.append("title", tit);
  // const content = data.append("content", con);
  // const image = data.append("image", img.files[0].value);
  // console.log("cekcek1", doctor_id);
  // console.log("cekcek2", title);
  // console.log("cekcek3", content);
  // console.log("cekcek3", image);
  data.append("doctor_id", doctorid.value),
  data.append("title", tit.value),
  data.append("content", con.value),
  data.append("image", img.files[0]);
  console.log("data", data);

  var config = {
    method: "post",
    url: "http://localhost:8081/api/articles/",
    data: data,
  };
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      alert("data berhasil masuk");
      location.replace("#/articles_psychologist");
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default questionFormHandler;
