import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <Result
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link style={{ display: "flex", justifyContent: "center" }} to="/">
          <Button type="primary">Home</Button>
        </Link>
      }
    />
  );
};

export default Error404;
