import "./signup.css";
import img_01 from "../images/img-01.png";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup-container-small">
        <div className="signup-img">
          <img src={img_01} alt="signup-img"></img>
        </div>
        <form className="signup-form">
          <h1 className="form-title">SignUp</h1>
          <input
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="off"
            className="input-box"
          ></input>
          <input
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="off"
            className="input-box"
          ></input>
          <input
            type="password"
            name="email"
            placeholder="Password"
            className="input-box"
          ></input>
          <button type="submit" className="signup-btn">
            SignUp
          </button>
          <p>
            Already haave an account? <Link to="/">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
