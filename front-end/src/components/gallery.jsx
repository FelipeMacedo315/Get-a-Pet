import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../assets/gallery.css";

function Gallery(props) {
  const [petimages, setPetImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [indexImages, setIndexImages] = useState(0);

  useEffect(() => {
    for (let index = 0; petimages.length < props.imagens.length; index++) {
      var img = require(`../assets/imagenspet/${props.imagens[index]}`);
      petimages.push(img);
      setLoading(true);
    }
    console.log(petimages.length);
  }, [loading]);

  return (
    <div  className="gallery-container">
      {petimages.length === 0 ? (
        <h1>carregando...</h1>
      ) : (
        <div className="gallery">
          <button onClick={()=>props.handleGallery(false)} className="btn-close-icon"></button>
          <img src={petimages[indexImages]} />
          <div className="btns-container">
            {petimages.map((item, index) => {
              return <button className="btn-gallery" name="btn" onClick={(e) => setIndexImages(e.target.value)} value={index} type="radio"></button>;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
