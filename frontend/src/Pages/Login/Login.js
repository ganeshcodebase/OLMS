import React, { useState } from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import InputField from "../../Components/InputField";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleLogin = (e) => {
    if (username !== "" && password !== "") {
      e.preventDefault();
      setShowError(false);
    } else {
      setShowError(true);
    }
  };
  return (
    <>
      <div
        sx={{
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          backgroundColor: "#e3e2ff",
        }}
      >
        <div className="login_page"></div>
        <div className="login_page_layer">
          <div className="heading">
            <h1 style={{ color: "#4b42e5" }}>Login</h1>
            <p style={{ paddingTop: "10px", color: "#2c296c" }}>
              Securely Login to your <b style={{ color: "#4b42e5" }}>OLMS</b>{" "}
              account
            </p>
          </div>
          <Form
            onSubmit={handleLogin}
            style={{ width: "600px", maxWidth: "600px" }}
          >
            <InputField
              label="Email"
              name="username"
              type="text"
              value={username}
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputField
              label="Password"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              placeholder="Enter Password"
            />
            <div
              style={{
                margin: "auto",
                width: "450px",
                textAlign: "right",
                color: "#ff1f80",
              }}
            >
              Forgot password
            </div>
            {showError && (
              <span style={{ color: "red" }}>Invalid Username/Password</span>
            )}
            <div
              style={{
                margin: "auto",
                width: "450px",
                marginTop: "20px",
              }}
            >
              <Button
                size="lg"
                type="submit"
                style={{
                  width: "100%",
                  height: "50px",
                  backgroundColor: "#4f46e5",
                }}
              >
                Login
              </Button>
            </div>
            {/* <div
              style={{
                width: "450px",
                margin: "auto",
                textAlign: "center",
                padding: "5px 0px",
                color: "#534ae6",
                fontWeight: "bold",
              }}
            >
              Dont have an accout?
            </div>
            <div
              style={{
                margin: "auto",
                width: "450px",
              }}
            >
              <Button
                size="lg"
                type="submit"
                style={{
                  width: "100%",
                  height: "50px",
                  backgroundColor: "transparent",
                  color: "#5c53e7",
                }}
              >
                Create an account
              </Button>
            </div> */}
          </Form>
        </div>
      </div>
    </>
  );
};
export default Login;
