import React from "react";
import "./Phonetic.css";
export default function Phonetic(props) {
  return (
    <div className="phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
        Listen
      </a>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
