import history from "../history";
import axios from "axios";

export const signIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const setLocation = (location) => {
  return {
    type: "SET_LOCATION",
    payload: location,
  };
};

export const addProduct = (formValues) => {
  return async (dispatch, getState) => {
    const { auth, loc } = getState();
    const userId = auth.userId;
    const response = await axios.post(
      "https://mighty-harbor-82441.herokuapp.com/products",
      {
        ...formValues,
        loc,
        userId,
      }
    );
    dispatch({ type: "ADD_PRODUCT", payload: response.data });
    history.push("/");
  };
};

export const getProducts = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://mighty-harbor-82441.herokuapp.com/products"
    );
    dispatch({ type: "GET_PRODUCTS", payload: response.data });
  };
};

export const getProduct = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://mighty-harbor-82441.herokuapp.com/${id}`
      );
      dispatch({ type: "GET_PRODUCT", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const editProduct = (id, formValues) => {
  return async (dispatch) => {
    const response = await axios.patch(
      `https://mighty-harbor-82441.herokuapp.com/products/${id}`,
      formValues
    );
    dispatch({ type: "EDIT_STREAM", payload: response.data });
    history.push("/");
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    await axios.delete(
      `https://mighty-harbor-82441.herokuapp.com/products/${id}`
    );
    dispatch({ type: "DELETE_STREAM", payload: id });
    history.push("/");
  };
};

// User Login
export const userLogin = (userInfo) => {
  return { type: "USER_INFO", payload: userInfo };
};

// Logout User
export const userLogout = () => {
  return { type: "USER_INFO_CLEAR" };
};
//Get Comment
export const getComment = (id) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://mighty-harbor-82441.herokuapp.com/comments/?detail_id=${id}`
    );
    const { data } = response;
    if (!data) {
      dispatch({ type: "COMMENT_LIST", payload: [] });
    } else {
      dispatch({
        type: "COMMENT_LIST",
        payload: Array.isArray(data) ? data : [data],
      });
    }
    return data;
  };
};

// Add Comment
export const addComment = (data) => {
  return async (dispatch) => {
    const response = await axios.post(
      `https://mighty-harbor-82441.herokuapp.com/comments/`,
      data
    );
    const { data: body } = response;

    dispatch({ type: "COMMENT_ADD", payload: body || data });
    return body;
  };
};
