import React, { useReducer } from "react";
import { COMMENTS_API } from "../helpers/consts";
import axios from "axios";

export const commentsContext = React.createContext();
const INIT_STATE = {
  comments: [],
  commentToEdit: null,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_COMMENTS_FOR_ROOM":
      return { ...state, comments: action.payload };
    case "GET_COMMENTS_TO_EDIT":
      return { ...state, commentToEdit: action.payload };
    default:
      return state;
  }
};

const CommentContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addComments = async (
    text,
    owner,
    productId,
    createdAt,
    createdAtMs
  ) => {
    try {
      let comment = {
        text,
        owner,
        productId,
        createdAt,
        createdAtMs,
      };
      const response = await axios.post(COMMENTS_API, comment);
      getCommentsForRoom(productId);
    } catch (e) {
      console.log(e);
    }
  };

  const getCommentsForRoom = async (productId) => {
    try {
      const response = await axios(COMMENTS_API + "?productId=" + productId);
      let action = {
        type: "GET_COMMENTS_FOR_ROOM",
        payload: response.data,
      };
      dispatch(action);
    } catch (e) {
      console.log(e);
    }
  };

  const getCommentToEdit = async (id) => {
    try {
      const response = await axios(` 
                ${COMMENTS_API}/${id}`);
      let action = {
        type: "GET_COMMENTS_TO_EDIT",
        payload: response.data,
      };
      dispatch(action);
    } catch (e) {
      console.log(e);
    }
  };

  const saveEditedComment = async (editedComment, id) => {
    try {
      const response = await axios.patch(`${COMMENTS_API}/${id}`, editedComment);
      getCommentsForRoom(editedComment.productId);
      // clearState()
    } catch (e) {
      console.log(e);
    }
  };

  const deleteComment = async (comment) => {
    try {
      await axios.delete(`${COMMENTS_API}/${comment.id}`);
      getCommentsForRoom(comment.productId);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <commentsContext.Provider
      value={{
        addComments,
        getCommentsForRoom,
        getCommentToEdit,
        deleteComment,
        saveEditedComment,
        comments: state.comments,
        commentToEdit: state.commentToEdit,
        state,
      }}
    >
      {props.children}
    </commentsContext.Provider>
  );
};

export default CommentContextProvider;
