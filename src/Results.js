import React from "react";
import "./Results.css";
export default function Results(props) {
  if (props.results)
    return (
      <div className="results">
        {" "}
        <h2> Definition of {props.results.word}: </h2>
        <p> {props.results.meanings[0].definitions[0].definition}</p>
      </div>
    );
  else return null;
}
