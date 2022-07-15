import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/home.css";
import Btn from "./btn";

function Home() {
  const [allPets, setAllPets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/x")
      .then((result) => {
        setAllPets(result.data.allPets);
      })
      .catch((err) => {
        setAllPets(err);
      });
  }, []);

  console.log(allPets);
  return (
    <div className="home-page">
      {allPets.length > 0
        ? allPets.map((item, index) => {
            const img = require(`../assets/imagenspet/${item.imagens[0]}`);
            return (
              <div className="home-page-pet-card">
                <div style={{ backgroundImage: `url(${img})` }} className="img-pet-home-card"></div>
                <h2>{item.animal}</h2>
                <Link to={`/pet/view/${item._id}`}>
                  <Btn class="btn-mais-detalhes" content={"Mais detalhes"}></Btn>
                </Link>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Home;
