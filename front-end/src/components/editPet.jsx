import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Form from "./form";
import UserContext from "./ContextUser";
function EditPet() {
  const { id } = useParams();
  const [dataPet, setDataPet] = useState([]);
  const { dataRegister, setDataRegister } = useContext(UserContext);
  const [images, setImages] = useState("");

  function handlesubmit(e) {
    e.preventDefault();
    // console.log(dataRegister);
    //alert(localStorage.getItem("emailUser"));
    console.log(images);
    const multi_part_form = new FormData();
    multi_part_form.append("animalPet", dataRegister.animalPet);
    multi_part_form.append("pesoPet", dataRegister.pesoPet);
    multi_part_form.append("corPet", dataRegister.animalPet);
    multi_part_form.append("sexoPet", dataRegister.sexoPet);
    for (let index = 0; index < images.length; index++) {
      multi_part_form.append("fotopet", images[index]);
    }

    axios
      .patch("http://localhost:5000/updatePet", multi_part_form, {
        headers: {
          "Content-Type": "multipart/form-data",
          idpet: id,
          email: localStorage.getItem("emailUser"),
        },
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="form-completed">
      <form action="">
        <h2 className="title-edit-pet">Atualizando informações do pet!</h2>
        <Form type="text" title="apelido"name="animalPet" placeholder="nome do seu pet" />
        <Form type="number" title="Kg"name="pesoPet" placeholder="Peso" />
        <Form type="text" title="Cor"name="corPet" placeholder="cor" />
        <Form type="text" title="Sexo"name="sexoPet" placeholder="macho ou femea ?" />
        <input onChange={(v) => setImages(v.target.files)} type="file" multiple />
        <button onClick={handlesubmit} className="btn-submit">
          Atualizar
        </button>
      </form>
    </div>
  );
}

export default EditPet;
