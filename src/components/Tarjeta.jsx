import React from "react";  
import "../components/Tarjeta.css";
function Tarjeta({ nombre, juego, epoca, descripcion, imagen }) {
  return (
    <div className="tarjeta">
      <div className="tarjetaImgWrapper">
  <img className="tarjetaImg mx-auto block object-contain" src={imagen} alt={nombre} />
</div>


      <h3 className="tarjetaNombre">{nombre}</h3>
      <p className="tarjetaJuego">{juego}</p>
      <p className="tarjetaEpoca">{epoca}</p>
      <p className="tarjetaDescripcion">{descripcion}</p>
    </div>
  );
}

export default Tarjeta;
