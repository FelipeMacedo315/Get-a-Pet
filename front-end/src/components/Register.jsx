import Form from "./form";
import "../assets/login.css";
import React, { useContext } from "react";
import UserContext from "./ContextUser";
import axios from "axios";
import { useState } from "react";

function Register() {
  const { dataRegister, setDataRegister } = useContext(UserContext);
  const [errorFieldNome, setErrorFieldNome] = useState("");
  const [errorFieldEmail, setErrorFieldEmail] = useState("");
  const [errorFieldSenha, setErrorFieldSenha] = useState("");
  const [errorFieldConfirmSenha, setErrorFieldConfirmSenha] = useState("");

  const checkFiels = () => {
    //check field nome
    if (!dataRegister.nome) {
      setErrorFieldNome("O campo nome não pode ficar vazio");
    } else {
      setErrorFieldNome("");
    }
    // check field email
    if (!dataRegister.email) {
        setErrorFieldEmail('O campo Email não pode ficar vazio')
    }
    else if (dataRegister.email.includes('@') && dataRegister.email.includes('.com')){
           setErrorFieldEmail('')
    } else {
      setErrorFieldEmail("O email digitado não é válido");
    }
    //check fild senha
    if (!dataRegister.senha) {
      setErrorFieldSenha("o campo senha não pode ficar vazio")
    } else {
       setErrorFieldSenha('')
    }
   // check confirm senha 
   if (!dataRegister.confirm) {
    
   }
  
  };

  const handleSubmit = (h) => {
    h.preventDefault();
    checkFiels();
    axios
      .post("http://localhost:5000/register/data", {
        //    nome: dataRegister.nome,
        //  email: dataRegister.email,
        //senha: dataRegister.senha,
      })
      .then((s) => console.log(s))
      .catch((err) => console.log(err));
    console.log(dataRegister);
  };
  return (
    <div className="form-completed">
      <h2>Create Profile</h2>
      <form action="">
        <Form
          type="text"
          title="nome"
          placeholder=" Nome completo"
          errorFieldMsg={errorFieldNome}
        />

        <Form
          type="text"
          title="email"
          placeholder=" Email válido"
          errorFieldMsg={errorFieldEmail}
        />
        <Form type="text" title="senha" placeholder=" Defina uma senha" errorFieldMsg={errorFieldSenha} />
        <Form
          type="text"
          title="Confirmar"
          placeholder=" Digite a senha novamente"
        />
        <button onClick={handleSubmit} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
export default Register;
