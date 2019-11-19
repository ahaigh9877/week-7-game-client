import request from "superagent";

export const CREATE_ROOM = "CREATE_ROOM";

// const baseUrl = "https://serene-harbor-35844.herokuapp.com/";
const baseUrl = "http://localhost:4000";

function createRoom(payload) {
    return {
      type: CREATE_ROOM,
      payload
    };
  }
  
  export const newRoom = name => (dispatch) => {  
    request
      .post(`${baseUrl}/rooms`)
      .send({ name })
      .then(response => {
        const room = response.body.room;
        const action = createRoom(room);
        dispatch(action);
      })
      .catch(console.error);
  };