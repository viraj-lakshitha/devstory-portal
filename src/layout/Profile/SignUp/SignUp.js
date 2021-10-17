import { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import axios from "axios";
import { signUpFormData } from "../../../utils/Utils";
import SignUpImage from "../../../img/signup/signup.png";
import "./SignUp.scss";

const SignUp = () => {
  const initialValue = "";

  const [fullName, setFullName] = useState(initialValue);
  const [username, setUsername] = useState(initialValue);
  const [email, setEmail] = useState(initialValue);
  const [password, setPassword] = useState(initialValue);
  const [passwordCopy, setPasswordCopy] = useState(initialValue);

  const handleOnChange = (item, value) => {
    switch (item) {
      case "fullName":
        setFullName(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "passwordCopy":
        setPasswordCopy(value);
        break;
      default:
        console.error("Invalid Value!");
    }
  };

  const handleOnSubmit = () => {
    // Check for User Inputs
    if (
      fullName === initialValue ||
      username === initialValue ||
      email === initialValue ||
      password === initialValue
    ) {
      console.error("Params can't be empty!");
    } else {
      // Validate Email
      if (!validator.isEmail(email)) {
        console.error("Invalid Email!");
      } else {
        // Check Password and Re-Enter Password
        password !== passwordCopy && console.error("Passwords doesn't match!");

        // Create form data from details
        const signUpReq = {
          fullName: fullName,
          username: username,
          email: email,
          password: password,
        };
        console.log(signUpReq);

        // Send API request to the BE
        axios
          .post("http://localhost:8081/auth/signup", signUpReq)
          .then(() => {
            console.log("Success!");
          })
          .catch(() => {
            console.log("Error!");
          });
      }
    }
  };

  return (
    <div className="signup container">
      <div className="signup-left">
        <img
          src={SignUpImage}
          alt="signup-left-svg"
          className="signup-left-image"
        />
        <p className="signup-left-quote">
          &quot;The best of expressing ideas is blogging&quot;
        </p>
      </div>
      <div className="signup-right">
        <div className="signup-right-container">
          <div className="signup-right-container-form">
            <p className="signup-right-container-form-header">
              Hey, New User !
            </p>
            {signUpFormData.map((item) => {
              return (
                <div key={item.id} className="signup-right-container-form-item">
                  <label
                    for={item.itemId}
                    className="login-right-container-form-item-label"
                  >
                    {item.name} {/* <a>{item.errorMessage}</a> */}
                  </label>
                  <input
                    type={item.type}
                    className="login-right-container-form-item-input"
                    id={item.itemId}
                    onChange={(e) => {
                      handleOnChange(item.itemId, e.target.value);
                    }}
                  />
                </div>
              );
            })}
            <div>
              <button
                onClick={() => {
                  handleOnSubmit();
                }}
                className="signup-right-container-form-action"
              >
                SignUp <i className="bi bi-person-check-fill"></i>
              </button>
            </div>
          </div>
          <Link to="/login">
            <p className="signup-right-container-login">
              New User to DevStory? SignUp
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
