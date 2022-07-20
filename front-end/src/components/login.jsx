import Form from "./form";
import "../assets/login.css";
import React from "react";
import { useContext } from "react";
import UserContext from "./ContextUser";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Btn from "./btn";

function Login() {
  const { dataRegister, setDataRegister, session, setSession } = useContext(UserContext);

  let redirectToHome = useNavigate();
  const [errorFieldEmail, setErrorFieldEmail] = useState("");
  const [errorFieldSenha, setErrorFieldSenha] = useState("");

  function submitLogin() {
    axios
      .post("http://localhost:5000/login", {
        email: dataRegister.Email,
        senha: dataRegister.Senha,
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
    if (!dataRegister.Email) {
      setErrorFieldEmail("email invalido");
    } else {
      setErrorFieldEmail("");
    }
    if (!dataRegister.Senha) {
      setErrorFieldSenha("senha invalida");
    } else {
      setErrorFieldSenha("");
    }
    if (dataRegister.Senha && dataRegister.Email) {
      submitLogin();
    }
  };

  return (
    <div className="content">
      <h2>Bem-vindo</h2>
      <form action="/login" onSubmit={handleSubmit}>
        <Form type="text" title="Email" name="Email" placeholder=" Digite um email válido" errorFieldMsg={errorFieldEmail} />
        <Form type="password" title="Senha" name="Senha" placeholder=" Digite uma senha" errorFieldMsg={errorFieldSenha} />
        <Btn event={handleSubmit} content={"Login"} class="btn-login" />
      </form>
    </div>
  );
}

export default Login;
