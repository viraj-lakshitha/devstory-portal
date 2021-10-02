import "./PageNotFound.scss";
import pageNotFoundImg from "../../img/svg/page-not-found.svg";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="page-not-found container">
      <img src={pageNotFoundImg} alt="Not-Found" />
      <Link to="/">
        <button className="page-not-found-button">Back to Home</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
