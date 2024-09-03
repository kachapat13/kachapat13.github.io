import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div className="layout">
      <div className="mix-layout">
        <div className="loader"></div>
        <div className="loader-text">Loading</div>
      </div>
    </div>
  );
}

export default Loading;
