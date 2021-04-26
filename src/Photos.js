import React from "react";
export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="photos div-section">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <img
                  src={photo.src.landscape}
                  alt="dictionary word"
                  className="img-fluid"
                />
              </div>
            );
          })}{" "}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
