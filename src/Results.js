import React from "react";
import "./Results.css";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";
export default function Results(props) {
  if (props.results)
    return (
      <div className="results">
        {" "}
        <div className="div-section">
          <h2>{props.results.word} </h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                {" "}
                <Phonetic phonetic={phonetic} />{" "}
              </div>
            );
          })}
        </div>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <div className="div-section">
                <Meaning meaning={meaning} />
              </div>
            </div>
          );
        })}
      </div>
    );
  else return null;
}
