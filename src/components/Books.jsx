import React from "react";
import "../components/Books.css";

function Books({ nombre, libro, escritor, descripcion, imagen }) {
    return (
        <div className="books">
            <div className="booksImgWrapper">
                <img className="booksImg mx-auto block object-contain" src={imagen} alt={nombre} />
            </div>

            <h3 className="booksImage">{nombre}</h3>
            <p className="booksTittler">{libro}</p>
            <p className="booksWrite">{escritor}</p>
            <p className="booksDescripcion">{descripcion}</p>
        </div>
    );
}

export default Books;