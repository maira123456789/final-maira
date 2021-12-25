import React, { useContext, useEffect, useState } from "react";
import { FormControl, InputGroup, Button, Card } from "react-bootstrap";
import { timeSince } from "../../helpers/calcTimeLeft";
import { commentsContext } from "../../contexts/CommentContext";
import { useParams } from "react-router";
import { authContext } from "../../contexts/authContext";

const CommentBody = ({ item }) => {
  const params = useParams();
  const { user } = useContext(authContext);
  const { getCommentsForRoom, saveEditedComment, deleteComment } =
    useContext(commentsContext);

  function handleDelete(com) {
    deleteComment(com);
  }
  useEffect(() => {
    getCommentsForRoom(params.id);
  }, []);

  let commenting;
  const [bool, setBool] = useState(false);
  const [editComm, setEditComm] = useState("");
  function handleChangeEdit(e) {
    setEditComm(e.target.value);
  }
  function saveComment(item) {
    let ed = { ...item, text: editComm };

    saveEditedComment(ed, item.id);
    setBool(false);
  }

  commenting = (
    <>
      <InputGroup className="mb-3 createComment">
        <FormControl
          rows={2}
          as="textarea"
          placeholder="Оставить комментаррий"
          maxLength="140"
          onChange={handleChangeEdit}
          value={editComm}
        />
      </InputGroup>
      <Button onClick={() => saveComment(item)}>Сохранить</Button>
    </>
  );

  return (
    <Card className="mt-2" style={{ width: "100%", border: "2px solid grey" }}>
      <Card.Header style={{ margin: "1%" }}>
        <img
          style={{ width: "22px", height: "22px", margin: "1%" }}
          src="http://cdn.onlinewebfonts.com/svg/img_299586.png"
        />
        <span style={{ fontWeight: "bold", color: "#979797" }}>
          {item.owner}
        </span>
        <span>
          {item.createdAt.slice(0, 10)}, {timeSince(item.createdAtMs)} назад{" "}
        </span>
      </Card.Header>
      <Card.Body style={{ margin: "3%" }}>
        <Card.Title>{bool ? commenting : item.text}</Card.Title>
        {user.email === item.owner ? (
          <>
            <small
              onClick={() => handleDelete(item)}
              style={{ color: "red", cursor: "pointer" }}
            >
              Удалить
            </small>
          </>
        ) : (
          <></>
        )}
      </Card.Body>
    </Card>
  );
};

export default CommentBody;
