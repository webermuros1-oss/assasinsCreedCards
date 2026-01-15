import { Routes, Route } from "react-router-dom";
import Tarjeta from "./components/Tarjeta";
import Navbar from "./components/Navbar";
import PageBooks from "./pages/PageBooks";

import ezio from "./assets/images/character/ezio.jpg";
import altair from "./assets/images/character/altair.jpg";
import connor from "./assets/images/character/connor.jpg";
import edward from "./assets/images/character/edward.jpg";
import bayek from "./assets/images/character/bayek.jpg";

import "./App.css";

function App() {
  const assassins = [
    {
      id: 1,
      nombre: "Ezio Auditore",
      juego: "Assassin's Creed II",
      epoca: "Renacimiento",
      descripcion: "Ezio Auditore da Firenze es el noble florentino el carismático protagonista de la trilogía renacentista de Assassin's Creed, un noble florentino que se convierte en Maestro Asesino tras la ejecución de su familia, transformándose de un joven mujeriego y arrogante a un líder valiente y sabio que lucha contra los Templarios, representando la venganza, el honor y la búsqueda de la verdad a través de Italia y el Imperio Otomano, y convirtiéndose en un icono de la saga por su carisma y profundidad.",
      imagen: ezio,
    },
    {
      id: 2,
      nombre: "Altaïr",
      juego: "Assassin's Creed I",
      epoca: "Cruzadas",
      descripcion: "Maestro Asesino árabe de la Tercera Cruzada, conocido por su arrogancia inicial que lo lleva a ser degradado y a redescubrir el Credo, convirtiéndose en un sabio Mentor que innovó en técnicas y armamento, dejando un legado vital para la hermandad, destacando por sus habilidades acrobáticas y maestría en el combate sigiloso y cuerpo a cuerpo.",
      imagen: altair,
    },
    {
      id: 3,
      nombre: "Connor",
      juego: "Assassin's Creed III",
      epoca: "Revolución Americana",
      descripcion: "Guerrero nativo americano. El protagonista de Assassin's Creed III, un mestizo mohawk y británico que se convierte en Maestro Asesino durante la Revolución Americana; es un personaje noble, leal a sus principios de proteger a su pueblo y luchar contra los Templarios, mostrando una gran determinación y una moral estricta, aunque a menudo en conflicto con las figuras históricas con las que se alía. .",
      imagen: connor,
    },
    {
      id: 4,
      nombre: "Edward Kenway",
      juego: "Assassin's Creed IV",
      epoca: "Edad de los Piratas",
      descripcion: "Edward Kenway es un carismático y ambicioso pirata galés, que inicialmente busca fortuna pero se ve envuelto en el conflicto entre Asesinos y Templarios, evolucionando de egoísta a un miembro redimido de la Hermandad, siendo además el padre de Haytham Kenway y abuelo de Connor Kenway. Es un hábil capitán del navío Jackdaw, famoso por sus duelos y su capacidad para navegar y luchar en el Caribe, aliándose con figuras como Barbanegra.",
      imagen: edward,
    },
    {
      id: 5,
      nombre: "Bayek",
      juego: "Assassin's Creed Origins",
      epoca: "Antiguo Egipto",
      descripcion: "Bayek de Siwa es  el último Medjay (protector) de Egipto, un guerrero leal y compasivo que busca justicia tras la tragedia personal de perder a su hijo, lo que lo lleva a fundar la Hermandad de Asesinos junto a su esposa Aya para luchar contra la tiranía y proteger a los oprimidos, combinando valentía, habilidades de combate y astucia estratégica para derrocar a la Orden de los Antiguos",
      imagen: bayek,
    },
  ];

  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Assassin's Creed Cards</h1>
              <div className="tarjetas-grid">
                {assassins.map((a) => (
                  <Tarjeta key={a.id} {...a} />
                ))}
              </div>
            </>
          }
        />

        <Route path="/books" element={<PageBooks />} />
      </Routes>
    </div>
  );
}

export default App;