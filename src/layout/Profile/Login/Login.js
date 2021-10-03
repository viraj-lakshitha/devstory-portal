import LoginImage from "../../../img/login/login.png";
import FacebookImage from "../../../img/login/facebook.png";
import GoogleImage from "../../../img/login/google.png";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
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
                Email Address {/* <a>Invalid Email Address</a> */}
              </label>
              <input
                type="email"
                className="login-right-container-form-item-input"
                id="emailField"
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
                id="passwordField"
              />
            </div>
            <div>
              <button className="login-right-container-form-action">
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
