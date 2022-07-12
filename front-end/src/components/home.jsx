import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="all-my-pets-container">
      {allPets.length > 0
        ? allPets.map((item, index) => {
            const img = require(`../assets/imagenspet/${item.imagens[0]}`);
            //   console.log(`../assets/imagenspet/${item.imagens[0]}`);
            return (
              <div className="pet-card">
                <Link to={`/pet/view/${item._id}`}>
                  <img className="img-pet" src={img} alt="" />
                  <h2>{item.animal}</h2>
                </Link>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Home;
