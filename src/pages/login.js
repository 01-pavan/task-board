import "./login.css";
import img_01 from "../images/img-01.png";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login-container">
      <div className="login-container-small">
        <div className="login-img">
          <img src={img_01} alt="login-img"></img>
        </div>
        <form className="login-form">
          <h1 className="form-title">Login</h1>
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
          <button type="submit" className="login-btn">
            Login
          </button>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
