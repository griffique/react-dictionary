import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
import "./Photos.css";
export default function Dictionary() {
  const [keyword, setKeyword] = useState("hello");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);
  function load() {
    setLoaded(true);
    search();
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f917000010000010fa516c3ebec4dee8499fc3b7fad0047";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    axios
      .get(pexelsApiUrl, {
        headers: {
          Authorization: `Bearer ${pexelsApiKey}`,
        },
      })
      .then(handlePexelsResponse);
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
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
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
        <Photos photos={photos} />
      </div>
    );
  else {
    load();
    return "Loading";
  }
}
