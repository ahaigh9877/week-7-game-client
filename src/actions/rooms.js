import request from "superagent";

// const baseUrl = "https://evening-fortress-04185.herokuapp.com";
const baseUrl = "http://localhost:4000";

export const newRoom = name => dispatch => {
  request
    .post(`${baseUrl}/rooms`)
    .send({ name })
    .then(response => {
      console.log(response.body)
    })
    .catch(console.error);
};
