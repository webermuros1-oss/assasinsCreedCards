import { useState } from 'react';
import './App.css';

function App() {
  const assassins = [
    {
      id: 1,
      nombre: "Ezio Auditore",
      juego: "AC II, Brotherhood, Revelations",
      epoca: "Renacimiento Italiano (1459-1524)",
      descripcion: "El Asesino más icónico de la saga. Maestro italiano que vengó a su familia.",
      imagen: "/images/ezioAuditore.jpg"
    },
    {
      id: 2,
      nombre: "Altaïr Ibn-La'Ahad",
      juego: "AC I",
      epoca: "Tercera Cruzada (1165-1257)",
      descripcion: "El primer protagonista de la saga. Asesino sirio durante las Cruzadas.",
      imagen: "/images/altair.jpg"
    },
    {
      id: 3,
      nombre: "Connor Kenway",
      juego: "AC III",
      epoca: "Revolución Americana (1756-1820s)",
      descripcion: "Asesino nativo americano que luchó en la Guerra de Independencia.",
      imagen: "/images/connor.jpg"
    },
    {
      id: 4,
      nombre: "Edward Kenway",
      juego: "AC IV: Black Flag",
      epoca: "Edad de Oro de la Piratería (1693-1735)",
      descripcion: "Pirata galés convertido en Asesino. Padre de Haytham y abuelo de Connor.",
      imagen: "/images/edward.jpg"
    },
    {
      id: 5,
      nombre: "Bayek de Siwa",
      juego: "AC Origins",
      epoca: "Egipto Ptolemaico (49 BCE)",
      descripcion: "Medjay egipcio, fundador de la Hermandad de Asesinos.",
      imagen: "/images/bayek.jpg"
    },
    {
      id: 6,
      nombre: "Kassandra",
      juego: "AC Odyssey",
      epoca: "Antigua Grecia (431 BCE)",
      descripcion: "Mercenaria espartana con linaje de la Primera Civilización.",
      imagen: "/images/kasandra.jpg"
    },
    {
      id: 7,
      nombre: "Eivor",
      juego: "AC Valhalla",
      epoca: "Era Vikinga (873 CE)",
      descripcion: "Guerrero vikingo que lidera su clan en la conquista de Inglaterra.",
      imagen: "/images/eivor.jpg"
    },
    {
      id: 8,
      nombre: "Arno Dorian",
      juego: "AC Unity",
      epoca: "Revolución Francesa (1768-1808)",
      descripcion: "Asesino francés que opera durante la Revolución Francesa.",
      imagen: "/images/arno.jpg"
    }
  ];

  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="app-container">
      <div className="app-content">
        <div className="header">
          <h1 className="title">ASSASSIN'S CREED</h1>
          <p className="subtitle">"Nothing is true, everything is permitted"</p>
        </div>

        <div className="cards-grid">
          {assassins.map((assassin) => (
            <div
              key={assassin.id}
              onClick={() => setSelectedCard(assassin)}
              className="card"
            >
              <div className="card-image-container">
                <img
                  src={assassin.imagen}
                  alt={assassin.nombre}
                  className="card-image"
                />
                <div className="card-overlay"></div>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">{assassin.nombre}</h3>
                <p className="card-game">{assassin.juego}</p>
                <p className="card-epoca">{assassin.epoca}</p>
                <p className="card-description">{assassin.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedCard && (
          <div className="modal-overlay" onClick={() => setSelectedCard(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2 className="modal-title">{selectedCard.nombre}</h2>
                <button
                  onClick={() => setSelectedCard(null)}
                  className="modal-close"
                >
                  ×
                </button>
              </div>
              
              <img
                src={selectedCard.imagen}
                alt={selectedCard.nombre}
                className="modal-image"
              />
              
              <div className="modal-info">
                <p className="modal-game">{selectedCard.juego}</p>
                <p className="modal-epoca">
                  <span className="label">Época:</span> {selectedCard.epoca}
                </p>
                <p className="modal-description">{selectedCard.descripcion}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;