import React, { useState } from "react";
import "./Dictionary.css";
export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      {" "}
      <form onSubmit={search}>
        {" "}
        <input
          type="search"
          placeholder="Type a word here"
          onChange={handleKeywordChange}
        />{" "}
        <input type="submit" className="btn-success submit-button" />{" "}
      </form>
    </div>
  );
}
