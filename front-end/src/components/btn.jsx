import React from "react";
function Btn(props) {
  return (
    <button onClick={props.event} className={props.class}>
      {props.content}
    </button>
  );
}

export default Btn;
