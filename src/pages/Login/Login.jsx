import "./Login.css";
import logo from "../../assets/logo.png";
import { useState } from "react";

function Login() {
  const [signState, setSignState] = useState("Sign In");

  return (
    <div className="login">
      <img src={logo} alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" && (
            <input type="text" placeholder="Your name" />
          )}

          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button className="SignIn">{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
          <div className="form-switch">
            {signState === "Sign In" ? (
              <p>
                New to Netflix?
                <span
                  onClick={() => setSignState("Sign Up")}
                  style={{ cursor: "pointer", color: "white" }}
                >
                  Sign Up now
                </span>
              </p>
            ) : (
              <p>
                Already have an account?
                <span
                  onClick={() => setSignState("Sign In")}
                  style={{ cursor: "pointer", color: "blue" }}
                >
                  Sign In
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
