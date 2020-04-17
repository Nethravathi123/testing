import React from "react";
import "./Spinner.css";

const divStyle = {
  position: "absolute",
  top: "50%",
  left: "48%",
};

/* Loader for IE 11 */
const ComponentLoading = () => (
  <div style={divStyle}>
    <div className="spinner" />
  </div>
);

export default ComponentLoading;
