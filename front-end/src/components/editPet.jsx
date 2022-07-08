import React from "react";
import { useParams } from "react-router-dom";
function EditPet() {
  const { id } = useParams();
  return (
    <div className="edit-pet-page">
      <h1 className="title-edit-pet">Atualizando informações do pet!</h1>
      <form action="">
     
      </form>
    </div>
  );
}

export default EditPet;
