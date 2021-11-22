import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();

  return (
    <div className={"signInPage"}>
      <div className={"default-block signInPage__container"}>
        <div className={"signInPage__inner-container"}>
          <span className={"default-title"}>LOGIN</span>
          <input placeholder={"Email address"} className={"default-input"} />
          <input placeholder={"Password"} className={"default-input"} />
          <div className={"signInPage__checkbox"}>
            <input type={"checkbox"} /> <span>Remember me</span>
          </div>
          <button
            className={"default-button"}
            onClick={() => {
              navigate("/profile");
            }}
          >
            SIGN IN
          </button>
        </div>
        <div className={"signInPage__bottom-container"}>
          <Link to={"/sign-up"} className={"no-link"}>
            <div>New around here? Sign up</div>
          </Link>
          <Link to={"/forgotten-password"} className={"no-link"}>
            <div>Forgot password?</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
