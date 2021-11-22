import React from "react";
import photo from "../assets/autumn.jpg";

const results: { photo: string; title: string; summary: string }[] = [];
for (let i = 0; i <= 4; i++)
  results.push({
    photo,
    title: "[USER/GROUP/COMMENT/PHOTO]",
    summary: "Truncated results of descriptions...",
  });

const SearchPage = () => {
  return (
    <div className={"searchPage"}>
      <span>Search Result</span>
      <div className={"searchPage__container"}>
        {results.map((elem, index) => (
          <div className={"searchPage__result"}>
            <img src={elem.photo} alt={"icon"} />
            <div>
              <div>Title: {elem.title}</div>
              <div>Summary: {elem.summary}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
