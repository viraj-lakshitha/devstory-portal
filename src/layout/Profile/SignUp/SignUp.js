import { Link } from "react-router-dom";
import { signUpFormData } from "../../../utils/Utils";
import SignUpImage from "../../../img/signup/signup.png";
import "./SignUp.scss";

const SignUp = () => {
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
                  />
                </div>
              );
            })}
            <div>
              <button className="signup-right-container-form-action">
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
