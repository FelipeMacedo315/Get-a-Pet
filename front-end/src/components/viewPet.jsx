import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../assets/viewpet.css";

function ViewPet() {
  const { id } = useParams();
  const [petData, setPetData] = useState("");
  const [loading, setloading] = useState(true);
  const [chevronRotate, setChevronRotate] = useState(0);

  useEffect(() => {
    setloading(true);
    axios
      .get("http://localhost:5000/x")
      .then((infoPets) => {
        return infoPets.data.allPets;
      })
      .then((allpets) => {
        const exactPet = allpets.filter((item) => {
          return item._id === id;
        });
        setloading(false);
        setPetData(exactPet[0]);
      });
  }, []);
  console.log(petData);
  return (
    <div className="unique-pet-content">
      {!loading && petData.imagens.length > 0 ? (
        <div className="unique-pet-card">
          <img className="img-unique-pet" src={require(`../assets/imagenspet/${petData.imagens[0]}`)} alt="" />

          <p>Nome:{petData.animal}</p>
          <p>Peso: {petData.peso}</p>
          <p>Cor: {petData.cor}</p>
          <p>Sexo: {petData.sexo}</p>
          <div className="open-more-info">
            <p>Disponivel: {petData.disponivel ? <span>Sim</span> : <span>Não</span>}</p>
            <button
              className="btn-chevron"
              onClick={() => {
                if (chevronRotate === 0) {
                  setChevronRotate(90);
                } else {
                  setChevronRotate(0);
                }
              }}
              style={{ transform: `rotate(${chevronRotate}deg)` }}></button>
          </div>
          {chevronRotate === 90 ? (
            <div>
              <p>Dono: {petData.dono.nome}</p>
              <p>Contato: {petData.dono.email}</p>
              
            </div>
          ) : null}
        </div>
      ) : (
        <h1>carregando</h1>
      )}
    </div>
  );
}

export default ViewPet;
