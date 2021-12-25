import axios from "axios";
import React, { useReducer } from "react";
import { LIKES_API } from "../helpers/consts";

export const likesContext = React.createContext();

const INIT_STATE = {
  likes: null,
  likesToEdit: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_LIKES":
      return { ...state, likes: action.payload };
    case "GET_LIKES_TO_EDIT":
      return { ...state, likesToEdit: action.payload };
    default:
      return state;
  }
};

const LikesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addLike = async (owner, productId, rate) => {
    try {
      let likes = {
        owner,
        productId,
        rate,
      };
      const response = await axios.post(LIKES_API, likes);
      getLikes(productId);
    } catch (e) {
      console.log(e);
    }
  };

  const getLikes = async (productId) => {
    try {
      const response = await axios(LIKES_API + "?productId=" + productId);
      let action = {
        type: "GET_LIKES",
        payload: response.data,
      };
      dispatch(action);
    } catch (e) {
      console.log(e);
    }
  };

  const saveEditedLikes = async (editedLikes) => {
    try {
      const response = await axios.patch(
        `${LIKES_API}/${editedLikes.id}`,
        editedLikes
      );
      getLikes(editedLikes.productId);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <likesContext.Provider
      value={{
        addLike: addLike,
        getLikes: getLikes,
        saveEditedLikes: saveEditedLikes,
        likes: state.likes,
        likesToEdit: state.likesToEdit,
      }}
    >
      {props.children}
    </likesContext.Provider>
  );
};

export default LikesContextProvider;
