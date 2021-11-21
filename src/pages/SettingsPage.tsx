import React, { useState } from "react";

const SettingsPage = () => {
  const [activeElement, setActiveElement] = useState(0);
  return (
    <div className={"settingPage"}>
      <div className={"settingPage__control-bar"}>
        <div onClick={() => setActiveElement(0)}>General</div>
        <div onClick={() => setActiveElement(1)}>Security</div>
        <div onClick={() => setActiveElement(2)}>Privacy</div>
        <div onClick={() => setActiveElement(3)}>Support</div>
      </div>
      {activeElement === 0 && (
        <div className={"settingPage__general-settings"}>
          <span className={"default-title"}>
            <span>General Settings</span>
          </span>
          <div className={"general-settings__options"}>
            <div className={"general-settings__option"}>
              <span>Name</span>
              <span>John Doe</span>
              <span>Update</span>
            </div>

            <div className={"general-settings__option"}>
              <span>Display Name</span>
              <span>John Doe</span>
              <span>Update</span>
            </div>

            <div className={"general-settings__option"}>
              <span>E-mail</span>
              <span>John Doe</span>
              <span>Update</span>
            </div>
          </div>
        </div>
      )}
      {activeElement === 1 && (
        <div className={"settingPage__general-settings"}>
          <span className={"default-title"}>
            <span>Security</span>
          </span>
        </div>
      )}
      {activeElement === 2 && (
        <div className={"settingPage__general-settings"}>
          <span className={"default-title"}>
            <span>Privacy</span>
          </span>
          <div className={"general-settings__options"}>
            <div className={"general-settings__option"}>
              <span>Public</span>
              <span>
                <input type={"checkbox"} />
              </span>
              <span></span>
            </div>
          </div>
        </div>
      )}
      {activeElement === 3 && (
        <div className={"settingPage__general-settings"}>
          <span className={"default-title"}>
            <span>Support</span>
          </span>
          <div className={"general-settings__options"}>
            <h3>Enter your problem</h3>
            <textarea style={{ width: "400px", height: "130px" }} />
            <div>
              <button style={{ marginLeft: "0" }} className={"default-button"}>
                Send
              </button>
            </div>
          </div>
        </div>
      )}
      |
    </div>
  );
};

export default SettingsPage;
