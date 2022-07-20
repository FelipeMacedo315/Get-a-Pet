import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Btn from "./btn";
import "../assets/mypets.css";

function MyPets() {
  const [myPets, setMyPets] = useState([]);
  const [msgfeedback, setMsgFeedback] = useState("");

  const fetchMyPets = async () => {
    try {
      const dataMyPets = await axios.get("http://localhost:5000/myPets", {
        headers: {
          idkeyuser: localStorage.getItem("keyAuth"),
          emailuser: localStorage.getItem("emailUser"),
        },
      });
      setMyPets(dataMyPets.data.yourPetsAdoption);
    } catch (err) {
      console.log(err);
      setMyPets([]);
    }
  };

  async function deletePet(idPetDelete) {
    try {
      const deletePet = await axios.delete("http://localhost:5000/deletePet", {
        headers: {
          idpet: idPetDelete,
        },
      });
      setMsgFeedback("pet foi excluido da plataforma");
    } catch (error) {
      console.log(error, "<<erro");
    }
  }

  useEffect(() => {
    fetchMyPets();
  }, [msgfeedback]);

  return (
    <div className="my-pets-page">
      {myPets.length === 0 ? (
        <div className="nenhum-animal-adotar">
          <h2>Você ainda não tem nenhum pet cadastrado</h2>
          <Link to={"/add/pet"}>Clique aqui para cadastrar seu pet</Link>
        </div>
      ) : (
        <div className="all-my-pets-container">
          {myPets.map((item, index) => {
            const img = require(`../assets/imagenspet/${item.imagens[0]}`);
            return (
              <div className="my-pets-card" key={item.peso}>
                <img className="img-pet" src={img} alt="pet-foto" />
                <h2>Nome: {item.animal}</h2>
                <h2>Kg: {item.peso}</h2>
                <h2>Sexo: {item.sexo}</h2>
                <h2>Cor: {item.cor}</h2>
                <div className="pets-btn-container">
                  <button className="btn-edit">
                    <Link to={`/edit/pet/${item._id}`}>Editar</Link>
                  </button>
                  <Btn class="btn-delete" content="Excluir" event={() => deletePet(item._id)} />
                </div>
              </div>
            );
          })}
        </div>
      )}
      <h3>
        Deseja colocar mais animais para adoção ? Se sim <Link to={"/add/pet"}> clique aqui</Link>
      </h3>
    </div>
  );
}
export default MyPets;
