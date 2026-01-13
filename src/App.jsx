import Tarjeta from "./components/Tarjeta";
import "./App.css";

import ezio from "./assets/images/ezio.jpg";
import altair from "./assets/images/altair.jpg";
import connor from "./assets/images/connor.jpg";
import edward from "./assets/images/edward.jpg";
import bayek from "./assets/images/bayek.jpg";

function App() {
  const assassins = [
    {
      id: 1,
      nombre: "Ezio Auditore",
      juego: "Assassin's Creed II",
      epoca: "Renacimiento",
      descripcion: "Ezio Auditore da Firenze es el noble florentino que se transforma de joven vengador a Mentor de la Hermandad de los Asesinos.",
      imagen: ezio,
    },
    {
      id: 2,
      nombre: "Altaïr",
      juego: "Assassin's Creed I",
      epoca: "Cruzadas",
      descripcion: "Maestro Asesino sirio que redimió su arrogancia durante la Tercera Cruzada, reformando la Hermandad y asegurando su legado mediante el Códice. Es el pilar fundamental del Credo.",
      imagen: altair,
    },
    {
      id: 3,
      nombre: "Connor",
      juego: "Assassin's Creed III",
      epoca: "Revolución Americana",
      descripcion: "Guerrero nativo americano, un luchador por la libertad y la justicia, con espíritu indomable que busca la igualdad para su pueblo.",
      imagen: connor,
    },
    {
      id: 4,
      nombre: "Edward Kenway",
      juego: "Assassin's Creed IV",
      epoca: "Edad de los Piratas",
      descripcion: "Audaz pirata galés que navega el Caribe en busca de gloria y riquezas durante la Edad de Oro de la piratería. Su transformación de un forajido egoísta en un legendario Maestro Asesino.",
      imagen: edward,
    },
    {
      id: 5,
      nombre: "Bayek",
      juego: "Assassin's Creed Origins",
      epoca: "Antiguo Egipto",
      descripcion: "Último Medjay, quien busca venganza por la muerte de su hijo. Junto a su esposa Aya, fundó a los Ocultos, la hermandad precursora de los Asesinos en el Antiguo Egipto.",
      imagen: bayek,
    },
  ];

  return (
    <div className="app">
      <h1>Assassin's Creed Cards</h1>

      <div className="tarjetas-grid">
        {assassins.map((a) => (
          <Tarjeta key={a.id} {...a} />
        ))}
      </div>
    </div>
  );
}

export default App;
