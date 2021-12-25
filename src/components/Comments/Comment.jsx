import React, { useContext, useEffect, useState } from "react";
import { InputGroup, Button } from "react-bootstrap";
import { commentsContext } from "../../contexts/CommentContext";
import CommentBody from "./CommentBody";
import { useParams } from "react-router";
import { authContext } from "../../contexts/authContext";
import TextArea from "antd/lib/input/TextArea";

const Comment = (props) => {
  const params = useParams();
  const { user } = useContext(authContext);
  const { addComments, getCommentsForRoom, comments } =
    useContext(commentsContext);
  const [comment, setComment] = useState("");
  function handleChange(e) {
    //   console.log(true)
    setComment(e.target.value);
  }

  useEffect(() => {
    getCommentsForRoom(params.id);
  }, []);

  function creatingComment(e) {
    e.preventDefault();
    let time = new Date();
    let timeMls = Date.now();
    addComments(comment, user.email, params.id, time, timeMls);
    setComment("");
  }

  return (
    <>
      <div
        className="mt-5"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          margin: "5px auto",
        }}
      >
        <InputGroup
          className="mb-3 createComment"
          style={{ width: "100%" }}
          placeholder="asd"
        >
          <TextArea rows={3} onChange={handleChange} value={comment} />
          <Button
            style={{ border: "none", margin: "2%" }}
            onClick={creatingComment}
          >
            Отправить
          </Button>
        </InputGroup>
        {comments ? (
          comments
            .sort((a, b) => b.createdAtMs - a.createdAtMs)
            .map((item) => <CommentBody key={item.id} item={item} />)
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
};

export default Comment;
