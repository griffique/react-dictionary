import React from "react";
export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="photos div-section">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={photo.src.landscape}
                    alt="dictionary word"
                    className="img-fluid"
                  />{" "}
                </a>
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
