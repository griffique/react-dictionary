import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms.js";
export default function Meaning(props) {
  return (
    <div className="meaning">
      <h2>{props.meaning.partOfSpeech}</h2>
      {[
        props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              {definition.definition}

              <div className="example">
                <em>{definition.example}</em>
              </div>

              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        }),
      ]}
    </div>
  );
}
