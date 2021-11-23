import React, { useState } from "react";
import DefaultButton from "../components/button/DefaultButton";
import axios from "axios";

const SignUpPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);


  const passwordValidation = (password: string) => {
    let pattern = /^[a-zA-Z0-9]*$/;
    let matches = pattern.exec(password);
    if (matches == null) {
      console.log("matches");
      return true;
    }
    return false;
  };

  return (
    <div className={"signUpPage"}>
      <div className={"default-block"}>
        <div className={"signUpPage__inner-container"}>
          <span className={"default-title"}>SIGN UP</span>
          <div style={{ display: "flex" }}>
            <input
              placeholder={"First Name"}
              className={"default-input"}
              value={firstName}
              onChange={(elem) => setFirstName(elem.target.value)}
            />
            <input
              placeholder={"Last Name"}
              className={"default-input"}
              value={lastName}
              onChange={(elem) => setLastName(elem.target.value)}
            />
          </div>
          <input
            placeholder={"Display Name"}
            className={"default-input"}
            value={displayName}
            onChange={(elem) => setDisplayName(elem.target.value)}
          />
          <input
            placeholder={"Email Address"}
            className={"default-input"}
            value={email}
            onChange={(elem) => setEmail(elem.target.value)}
          />

          <div style={{ display: "flex" }}>
            <input
              type={passwordShown ? "text" : "password"}
              placeholder={"Password"}
              className={"default-input"}
              value={password}
              onChange={(elem) => setPassword(elem.target.value)}
            />
            <input
              type={passwordShown ? "text" : "password"}
              placeholder={"Confirm Password"}
              className={"default-input"}
              value={confirmPassword}
              onChange={(elem) => setConfirmPassword(elem.target.value)}
            />
          </div>
        </div>
        <div className={"signUpPage__bottom-block"}>
          <div style={{ display: "flex" }}>
            <input type={"checkbox"} />
            <span>Accept Terms of Services</span>
          </div>
          <div className={"signUpPage__bottom-buttons"}>
            <button
              className={"default-button"}
              onClick={() => {
                if (passwordValidation(password) === true) axios.post("#");
              }}
            >
              SIGN UP
            </button>

            <DefaultButton text={"SIGN IN"} link={"/sign-in"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
