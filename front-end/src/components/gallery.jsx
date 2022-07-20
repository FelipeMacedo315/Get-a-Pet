import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../assets/gallery.css";

function Gallery(props) {
  const [petimages, setPetImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [indexImages, setIndexImages] = useState(0);
  // console.log(props.imagens.length);
  useEffect(() => {
    for (let index = 0; petimages.length < props.imagens.length; index++) {
      var img = require(`../assets/imagenspet/${props.imagens[index]}`);
      petimages.push(img);
      setLoading(true);
    }
  }, [loading]);

  return (
    <div className="gallery-container">
      {petimages.length === 0 ? (
        <h1>carregando...</h1>
      ) : (
        <div className="gallery">
          <img src={petimages[indexImages]} />
          <button
            onClick={() => {
              setIndexImages(indexImages - 1);
              if (indexImages <= 0) {
                setIndexImages(0);
              }
            }}
            className="btn-left"></button>
          <button
            onClick={() => {
              setIndexImages(indexImages + 1);
              if (indexImages >= petimages.length - 1) {
                setIndexImages(petimages.length - 1);
              }
            }}
            className="btn-right"></button>

          <button
            onClick={() => {
              props.handleGallery(false);
            }}
            className="btn-close-gallery"></button>
        </div>
      )}
    </div>
  );
}

export default Gallery;
