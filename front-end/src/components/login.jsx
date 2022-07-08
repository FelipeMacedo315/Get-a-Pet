import Form from "./form";
import "../assets/login.css";
import React from "react";
import { useContext } from "react";
import UserContext from "./ContextUser";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const { dataRegister, setDataRegister, session, setSession } = useContext(UserContext);

  let redirectToHome = useNavigate();
  const [errorFieldEmail, setErrorFieldEmail] = useState("");
  const [errorFieldSenha, setErrorFieldSenha] = useState("");

  function submitLogin() {
    axios
      .post("http://localhost:5000/login", {
        email: dataRegister.email,
        senha: dataRegister.senha,
      })
      .then((result) => {
        console.log(result);
        localStorage.setItem("keyAuth", result.data.keytoken);
        localStorage.setItem("nomeUser", result.data.nomeUser);
        localStorage.setItem("emailUser", result.data.emailUser);
        localStorage.setItem("senhaUser", result.data.senhaUser);
        setSession(true);
        redirectToHome("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Email ou senha errados");
      });
  }

  const handleSubmit = (h) => {
    h.preventDefault();
    console.log(dataRegister);
    if (dataRegister.email === undefined) {
      setErrorFieldEmail("Campo email não pode ficar vazio");
    } else if (!dataRegister.email.includes("@") || !dataRegister.email.includes(".com")) {
      setErrorFieldEmail("Este email e invalido");
    } else {
      setErrorFieldEmail("");
    }

    if (!dataRegister.senha) {
      setErrorFieldSenha("o campo senha não pode ficar vazio");
    } else {
      setErrorFieldSenha("");
    }
    if (dataRegister.email.includes("@") && dataRegister.email.includes(".com") && dataRegister.senha) {
      submitLogin();
    }
  };

  return (
    <div className="form-completed">
      <h2>Login</h2>
      <form action="/login" onSubmit={handleSubmit}>
        <Form type="text" title="Email" name="email" placeholder=" Email" errorFieldMsg={errorFieldEmail} />
        <Form type="password" title="Senha" placeholder=" Senha" name="senha" errorFieldMsg={errorFieldSenha} />
        <button onClick={handleSubmit} type="submit">
          Entry
        </button>
      </form>
    </div>
  );
}

export default Login;
