import React from "react";
import { Link } from "react-router-dom";
function Btn(props) {
  return (
    <button onClick={() => props.event} className={props.class}>
      {props.content}
    </button>
  );
}

export default Btn;
