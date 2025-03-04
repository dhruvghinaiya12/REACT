import { CREATE_POST, DELETE_POST, GET_POST } from "./ActionType";

let initialstate = {
  post: [],
};

export const postreducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case CREATE_POST:
      return {
        ...state,
        post: [...state.post, payload],
      };
    case GET_POST:
      return {
        ...state,
        post: payload,
      };

      case DELETE_POST:
        return{
          ...state,
          post:state.post.filter((post)=>post.id!=payload)
        }

    default:
      return state;
  }
};
