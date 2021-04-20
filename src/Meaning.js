import React from "react";
import Synonyms from "./Synonyms.js";
export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="meaning">
      <h2>{props.meaning.partOfSpeech}</h2>
      {[
        props.meaning.definitions.map(function (definition, index) {
          return (
            <p key={index}>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
              <Synonyms synonyms={definition.synonyms} />
            </p>
          );
        }),
      ]}
    </div>
  );
}
