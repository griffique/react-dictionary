import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";
export default function Dictionary() {
  const [keyword, setKeyword] = useState("hello");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  function load() {
    setLoaded(true);
    search();
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    setResults(response.data[0]);
  }

  if (loaded)
    return (
      <div className="dictionary">
        {" "}
        <div className="div-section">
          <h3>What word do you want to look up?</h3>
          <form onSubmit={handleSubmit}>
            {" "}
            <input
              className="search-bar"
              type="search"
              placeholder="Type a word here"
              onChange={handleKeywordChange}
            />{" "}
          </form>
          <p> i.e., pearl, aqua, swim </p>
        </div>
        <Results results={results} />
      </div>
    );
  else {
    load();
    return "Loading";
  }
}
