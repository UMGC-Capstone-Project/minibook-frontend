import React, {useState, useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Redirect } from 'react-router-dom';
import { login } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const SignInPage = (props ) => {
  const navigate = useNavigate();
  const [passwordShown, setpasswordShown] = useState(false);
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          props.history.push("/profile");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }


  return (
    <div className={"signInPage"}>
      <div className={"default-block signInPage__container"}>
        <div className={"signInPage__inner-container"}>
          <span className={"default-title"}>LOGIN</span>
          <input placeholder={"Email address"} className={"default-input"} />
          <input type = {passwordShown ? "text":"password"} placeholder={"Password"} className={"default-input"} />
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
