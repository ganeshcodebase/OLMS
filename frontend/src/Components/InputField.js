import React from "react";
import { Form } from "react-bootstrap";

const InputField = ({ label, name, value, onChange, type, placeholder }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      <Form.Group size="lg" controlId="text">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          style={{ width: "450px", height: "40px" }}
          autoFocus
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required
          placeholder={placeholder}
          autoComplete="off"
        />
      </Form.Group>
    </div>
  );
};

export default InputField;
