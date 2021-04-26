import React from "react";
import "./Phonetic.css";
export default function Phonetic(props) {
  return (
    <div className="phonetics">
      <a href={props.phonetic.audio}>Listen</a>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
