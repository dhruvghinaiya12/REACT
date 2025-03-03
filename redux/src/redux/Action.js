import APiLink from "../config/ApiLink";
import { CREATE_POST, GET_POST } from "./ActionType";

export const create_post = (payload) => async (dispatch) => {
  try {
    let res = await APiLink.post("/posts", payload);
    dispatch({ type: CREATE_POST, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const get_posts = () => async (dispatch) => {
  try {
    let res=await APiLink.get("/posts");
    console.log("featched data",res.data);  
    dispatch({type:GET_POST,payload:res.data})

  } catch (error) {
    console.log(error);
  }
};
