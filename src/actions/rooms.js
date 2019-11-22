import request from "superagent";
import Url from "../components/consts";

// const baseUrl = "https://evening-fortress-04185.herokuapp.com";
const baseUrl = Url;

export const newRoom = name => dispatch => {
  request
    .post(`${baseUrl}/rooms`)
    .send({ name })
    .then(response => {
      console.log(response.body);
    })
    .catch(console.error);
};
