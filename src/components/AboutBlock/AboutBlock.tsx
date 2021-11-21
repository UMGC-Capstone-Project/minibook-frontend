import React from "react";

const AboutBlock = () => {
  return (
    <div className={"aboutBlock"}>
      <div className={"aboutBlock__about"}>
        <span>About</span>
      </div>
      <div className={"aboutBlock__container"}>
        <div className={"aboutBlock__aboutBlock"}>
          <div>
            <span>First Name</span>
            <span>John</span>
          </div>

          <div>
            <span>Gender</span>
            <span>John</span>
          </div>

          <div>
            <span>Current Location</span>
            <span>Detroit, Michigan</span>
          </div>

          <div>
            <span>Email Address</span>
            <span>john.doe@minibook.com</span>
          </div>
        </div>
        <div className={"aboutBlock__aboutBlock"}>
          <div>
            <span>Last Name</span>
            <span>Doe</span>
          </div>

          <div>
            <span>Contact Number</span>
            <span>+1 (555) 555-5555</span>
          </div>

          <div>
            <span>Current Country</span>
            <span>United States of America</span>
          </div>

          <div>
            <span>Birthday </span>
            <span>Nov 08, 2021</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBlock;
