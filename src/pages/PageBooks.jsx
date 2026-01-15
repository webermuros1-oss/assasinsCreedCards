import React from "react";
import Books from "../components/Books";

import renaissance from "../assets/images/books/renaissance.jpg";
import revelaciones from "../assets/images/books/revelaciones.jpg";
import blackFlag from "../assets/images/books/blackFlag.jpg";
import forsaken from "../assets/images/books/forsaken.jpg";
import odyssey from "../assets/images/books/odyssey.jpg";

function PageBooks() {
    const books = [
        {
            id: 1,
            nombre: "Renaissance",
            libro: "Assassin's Creed II",
            escritor: "Oliver Bowden",
            descripcion: "La historia de Ezio Auditore en su camino de venganza durante el Renacimiento italiano.",
            imagen: renaissance,
        },
        {
            id: 2,
            nombre: "Revelaciones",
            libro: "Assassin's Creed: Revelations",
            escritor: "Oliver Bowden",
            descripcion: "El viaje final de Ezio a Constantinopla siguiendo los pasos de Altaïr.",
            imagen: revelaciones,
        },
        {
            id: 3,
            nombre: "Black Flag",
            libro: "Assassin's Creed IV",
            escritor: "Oliver Bowden",
            descripcion: "Las aventuras del pirata Edward Kenway en el Caribe durante la Edad de Oro de la piratería.",
            imagen: blackFlag,
        },
        {
            id: 4,
            nombre: "Forsaken",
            libro: "Assassin's Creed III",
            escritor: "Oliver Bowden",
            descripcion: "La historia de Haytham Kenway y su relación con Connor durante la Revolución Americana.",
            imagen: forsaken,
        },
        {
            id: 5,
            nombre: "Odyssey",
            libro: "Assassin's Creed: Odyssey",
            escritor: "Gordon Doherty",
            descripcion: "La épica aventura en la Antigua Grecia siguiendo al héroe espartano.",
            imagen: odyssey,
        },
    ];

    return (
        <div className="app">
            <h1>Libros de Assassin's Creed</h1>
            <div className="tarjetas-grid">
                {books.map((book) => (
                    <Books key={book.id} {...book} />
                ))}
            </div>
        </div>
    );
}

export default PageBooks;