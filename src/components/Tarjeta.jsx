import React from "react";  

function Tarjeta({ nombre, juego, epoca, descripcion, imagen }) {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={nombre} className="tarjetaImg" />

      <h3 className="tarjetaNombre">{nombre}</h3>
      <p className="tarjetaJuego">{juego}</p>
      <p className="tarjetaEpoca">{epoca}</p>
      <p className="tarjetaDescripcion">{descripcion}</p>
    </div>
  );
}

export default Tarjeta;
