import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ACCESS_TOKEN } from "../../../utils/Constants";
import LoginImage from "../../../img/login/login.png";
import FacebookImage from "../../../img/login/facebook.png";
import GoogleImage from "../../../img/login/google.png";
import "./Login.scss";

const Login = () => {
  const initialValue = "";

  const [username, setUsername] = useState(initialValue);
  const [password, setPassword] = useState(initialValue);

  const handleOnChange = (item, value) => {
    switch (item) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        console.error("Invalid!");
    }
  };

  const handleOnSubmit = () => {
    // Check for Input
    if (username === initialValue || password === initialValue) {
      console.log("Params cant be Empty!");
    } else {
      // Create Form
      const formReq = {
        username: username,
        password: password,
      };
      console.log(formReq);
      // Make a API call
      axios.post("http://localhost:8081/auth/login", formReq)
        .then((res) => {
          localStorage.setItem(ACCESS_TOKEN, res?.data?.jwtToken);
        })
        .catch((err) => {
          console.log("Something went wrong!");
        });
    }
  };

  return (
    <div className="login container">
      <div className="login-left">
        <img src={LoginImage} alt="login-logo" className="login-left-image" />
        <p className="login-left-quote">
          &quot;Styles come and go. Good design is a language, not a style&quot;
        </p>
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-right-container-form">
            <p className="login-right-container-form-header">Welcome Back !</p>
            <div className="login-right-container-form-item">
              <label
                for="emailField"
                className="login-right-container-form-item-label">
                Username
              </label>
              <input
                type="text"
                className="login-right-container-form-item-input"
                id="username"
                onChange={(e) => {
                  handleOnChange("username", e.target.value);
                }}
              />
            </div>
            <div className="login-right-container-form-item">
              <label
                for="passwordField"
                className="login-right-container-form-item-label">
                Password
              </label>
              <input
                type="password"
                className="login-right-container-form-item-input"
                id="password"
                onChange={(e) => {
                  handleOnChange("password", e.target.value);
                }}
              />
            </div>
            <div>
              <button
                onClick={() => {
                  handleOnSubmit();
                }}
                className="login-right-container-form-action">
                Login <i className="bi bi-lock"></i>
              </button>
            </div>
          </div>
          <hr className="login-right-container-line" />
          <div className="login-right-container-social">
            <button className="login-right-container-social-item">
              <img src={GoogleImage} alt="google-login" />
            </button>
            <button className="login-right-container-social-item">
              <img src={FacebookImage} alt="facebook-login" />
            </button>
          </div>
          <Link to="/signup">
            <p className="login-right-container-signup">
              New User to DevStory? SignUp
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
