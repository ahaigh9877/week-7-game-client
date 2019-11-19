import request from "superagent";

export const USER_LOGIN = "USER_LOGIN";
export const ALL_USERS = "ALL_USERS";
export const NEW_USER = "NEW_USER";
export const ERROR = "ERROR";

// const baseUrl = "https://serene-harbor-35844.herokuapp.com/";
const baseUrl = "http://localhost:4000";

function allUsers(payload) {
  return {
    type: ALL_USERS,
    payload
  };
}

export const getUsers = () => (dispatch, getState) => {
  const state = getState();
  const { users } = state;
  if (!users.length) {
    request(`${baseUrl}/users`)
      .then(response => {
        const action = allUsers(response.body);

        dispatch(action);
      })
      .catch(console.error);
  }
};

function newUser(payload) {
  return {
    type: NEW_USER,
    payload
  };
}

export const createUser = data => (dispatch, getState) => {
  const state = getState();

  request
    .post(`${baseUrl}/user`)
    .set("Authorization", `Bearer ${state.user}`)
    .send(data)
    .then(response => {
      const user = response.body.user;
      const action = newUser(user);
      dispatch(action);
    })
    .catch(console.error);
};

function userLogin(payload) {
  return {
    type: USER_LOGIN,
    payload
  };
}

function error(payload) {
  return {
    type: ERROR,
    payload
  };
}

export const login = (username, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ username, password })
    .then(response => {
      const action = userLogin(response.body.username);
      dispatch(action);
    })
    .catch(errorResponse => {
      console.error(errorResponse);
      const action = error("Wrong password or username. Please try again.");
      dispatch(action);
    });
};
