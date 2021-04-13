import React from "react";
import "./Results.css";
export default function Results(props) {
  if (props.results)
    return (
      <div className="results">
        {" "}
        <p>
          Definition of {props.results.word}:{" "}
          {props.results.meanings[0].definitions[0].definition}
        </p>
      </div>
    );
  else return null;
}
