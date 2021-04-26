import React from "react";
export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="photos">
        {props.photos.map(function (photo, index) {
          return (
            <img src={photo.src.landscape} alt="dictionary word" key={index} />
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
