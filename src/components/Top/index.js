import React from "react";
import "./style.css";

function Top(props) {
  return (
    <div className="top">
        <div><h3> Score: {props.score} Top Score: {props.topscore} </h3></div>
        <h5> {props.text} </h5>
    
    </div>
  );
}

export default Top;