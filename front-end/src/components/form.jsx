import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import UserContext from "./ContextUser";

function Form(props) {
  const { dataRegister, setDataRegister } = useContext(UserContext);
  return (
    <div className="fields">
      <label>{props.title}</label>
      <input
        onChange={(d) => (dataRegister[props.title] = d.target.value)}
        type={props.text}
        placeholder={props.placeholder}
      />
      <small>{props.errorFieldMsg}</small>
    </div>
  );
}
export default Form;
