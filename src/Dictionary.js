import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";
export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    setResults(response.data[0]);
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
      <Results results={results} />
    </div>
  );
}
