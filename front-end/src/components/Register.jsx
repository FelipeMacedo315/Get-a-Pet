import Form from "./form";
import "../assets/login.css";
import React, { useContext } from "react";
import UserContext from "./ContextUser";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const { dataRegister, setDataRegister, session, setSession } = useContext(UserContext);
  const [errorFieldNome, setErrorFieldNome] = useState("");
  const [errorFieldEmail, setErrorFieldEmail] = useState("");
  const [errorFieldSenha, setErrorFieldSenha] = useState("");
  const [errorFieldConfirmSenha, setErrorFieldConfirmSenha] = useState("");
  let redirectHome = useNavigate();

  const checkFiels = () => {
    //check field nome
    if (!dataRegister.nome) {
      setErrorFieldNome("O campo nome não pode ficar vazio");
    } else {
      setErrorFieldNome("");
    }
    // check field email
    if (!dataRegister.email) {
      setErrorFieldEmail("O campo Email não pode ficar vazio");
    } else if (dataRegister.email.includes("@") && dataRegister.email.includes(".com")) {
      setErrorFieldEmail("");
    } else {
      setErrorFieldEmail("O email digitado não é válido");
    }
    //check fild senha
    if (!dataRegister.senha) {
      setErrorFieldSenha("o campo senha não pode ficar vazio");
    } else {
      setErrorFieldSenha("");
    }
    // check confirm senha
    if (!dataRegister.confirmar_senha) {
      setErrorFieldConfirmSenha("O campo senha não pode ficar vazio");
    } else if (dataRegister.confirmar_senha !== dataRegister.senha) {
      setErrorFieldConfirmSenha("Os dois campos de senha precisam ser iguais!");
    } else {
      setErrorFieldConfirmSenha("");
    }
  };

  const handleSubmit = (h) => {
    h.preventDefault();
    checkFiels();
    axios
      .post("http://localhost:5000/register/data", {
        nome: dataRegister.nome,
        email: dataRegister.email,
        senha: dataRegister.senha,
      })
      .then((sucess) => {
        console.log(sucess);
        localStorage.setItem("keyAuth", sucess.data.keytoken);
        redirectHome("/");
        setSession(true);
      })
      .catch((err) => console.log(err));
    console.log(dataRegister);
  };
  return (
    <div className="form-completed">
      <h2>Create Profile</h2>
      <form action="">
        <Form type="text" title="Nome" name="nome" placeholder=" Nome completo" errorFieldMsg={errorFieldNome} />
        <Form type="text" title="Email" name="email" placeholder=" Email válido" errorFieldMsg={errorFieldEmail} />
        <Form type="password" title="Senha" name="senha" placeholder=" Defina uma senha" errorFieldMsg={errorFieldSenha} />
        <Form
          type="password"
          title="Confirmar"
          name="confirmar_senha"
          placeholder=" Digite a senha novamente"
          errorFieldMsg={errorFieldConfirmSenha}
        />
        <button onClick={handleSubmit} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
export default Register;
