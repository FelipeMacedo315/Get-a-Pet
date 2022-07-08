import React from "react";
import { useContext } from "react";
import axios from "axios";
import Form from "./form";
import { useState } from "react";
import UserContext from "./ContextUser";
import { useNavigate } from "react-router-dom";
function UpdateUserInfo() {
  const nomeUser = localStorage.getItem("nomeUser");
  const emailUser = localStorage.getItem("emailUser");
  const senhaUser = localStorage.getItem("senhaUser");
  const { dataRegister, setDataRegister } = useContext(UserContext);
  const [modalFeedback, setModalFeedback] = useState("");
  const redirectToHome = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(
        "http://localhost:5000/updateUser",
        {
          nome: dataRegister.nome,
          email: dataRegister.email,
          senha: dataRegister.senha,
        },
        {
          headers: { email: emailUser },
        }
      )
      .then((sucess) => {
        console.log(sucess);
        redirectToHome("/");
        return setModalFeedback(sucess.data.msg);
      })
      .catch((erro) => {
        console.log(erro);
        return setModalFeedback(erro.response.data.msg);
      });
  };

  return (
    <div className="form-completed">
      <h2>Atualizar Informações</h2>
      <h2>{modalFeedback} </h2>
      <form onSubmit={handleSubmit}>
        <Form type="text" title="Nome" name="nome" placeholder={nomeUser} />
        <Form type="text" title="Email" name="email" placeholder={emailUser} />
        <Form type="password" title="Senha" name="senha" placeholder={senhaUser} />
        <Form type="password" title="Confirmar" name="confirmar_senha" placeholder=" Digite a senha novamente" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
export default UpdateUserInfo;
