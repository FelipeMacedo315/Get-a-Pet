import axios from "axios";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "./ContextUser";
import Form from "./form";
import Btn from "./btn";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AddPet() {
  const redirectToHome = useNavigate();
  const { dataRegister, setDataRegister } = useContext(UserContext);
  const [msgFeedBack, setMsgFeedback] = useState("");
  const [files, setFiles] = useState([]);
  async function submitDataPet() {
    const url = "http://localhost:5000/add/pet";
    const formdata = new FormData();
    formdata.append("animal", dataRegister.animal);
    formdata.append("cor", dataRegister.cor);
    formdata.append("sexo", dataRegister.sexo);
    formdata.append("peso", dataRegister.peso);
    formdata.append("titleImages", files[0]);
    formdata.append("titleImages", files[1]);

    try {
      const api = await axios.post(url, formdata, {
        headers: { "Content-Type": "multipart/form-data", idkeyuser: localStorage.getItem("keyAuth"), emailuser: localStorage.getItem("emailUser") },
      });
      redirectToHome("/");
      console.log(api);
    } catch (err) {
      console.log(err);
      setMsgFeedback(err.response.data.msg);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitDataPet();
  }

  return (
    <div className="content">
      <div className="img-pet-preview-container">
        {files.length
          ? files.map((item,index) => {
            const imgPreview = URL.createObjectURL(item)
              return <img className="img-pet-preview" src={imgPreview} alt="imagem-preview" />
            })
          : null}
      </div>
      <p>{msgFeedBack}</p>
      <h2>Dados do meu pet</h2>
      <form>
        <Form type="text" title="animal" name="animal" placeholder="Apelido do Pet" />
        <Form type="number" title="peso" name="peso" placeholder="Quantos Kg ou gramas seu pet tem ?" />
        <Form type="text" title="cor" name="cor" placeholder="Qual a cor predominante do pet ?" />
        <Form type="text" title="sexo" name="sexo" placeholder="macho ou femea?" />
        <input
          type="file"
          onChange={(e) => {
            setFiles(Object.values(e.target.files));
          }}
          multiple
        />
        <Btn class="btn-add-pet" content="Cadastrar Pet" event={handleSubmit} />
      </form>
    </div>
  );
}

export default AddPet;
