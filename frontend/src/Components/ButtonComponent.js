import { Button } from "react-bootstrap";
import React from "react";

const ButtonComponent = ({name, backgroundColor,color,border}) => {
  return (
    <>
      <Button
        style={{
          border:border,
          padding: "5px 30px",
          color: color,
          backgroundColor:backgroundColor
        }}
      >
{name}      </Button>
    </>
  );
};

export default ButtonComponent;
