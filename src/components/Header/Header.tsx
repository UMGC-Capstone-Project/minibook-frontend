import React from "react";
import { Link } from "react-router-dom";
import DefaultButton from "../button/DefaultButton";

import { useNavigate } from "react-router-dom";

const Header = (props: { login: boolean; loading: boolean }) => {
  const { login, loading } = props;
  const notifications = 0;
  const navigate = useNavigate();

  const handleKeyPress = (e: any) => {
    console.log(e.key);
    if (e.key === "Enter") {
      navigate("/search");
    }
  };

  return (
    <div className={"header"}>
      <Link to={"/"} className={"no-link"}>
        <span className={"header__logo "}>Minibook</span>
      </Link>
      {loading ? (
        <></>
      ) : (
        <>
          {login ? (
            <>
              <div style={{ width: "180px" }}>
                <input
                  placeholder={"Search"}
                  className={"default-input"}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <div className={"header__notification-block"}>
                Notification <span>{notifications}</span>
              </div>
            </>
          ) : (
            <div className={"header__button-container"}>
              <DefaultButton text={"SIGN IN"} link={"/sign-in"} />
              <DefaultButton text={"SIGN UP"} link={"/sign-up"} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Header;
