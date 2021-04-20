import React from "react";
export default function Phonetic(props) {
  return (
    <div className="phonetics">
      <a href={props.phonetic.audio}>Listen</a>
      <h3>{props.phonetic.text}</h3>
    </div>
  );
}
