import React from "react";
import "./Dictionary.css";
export default function Dictionary() {
  return (
    <div className="dictionary">
      {" "}
      <form>
        {" "}
        <input type="search" />{" "}
        <input type="submit" className="btn-success submit-button" />{" "}
      </form>
    </div>
  );
}
