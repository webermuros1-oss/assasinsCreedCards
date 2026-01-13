# 🗡️ Assassin’s Creed Cards

Proyecto realizado en **React + Vite** donde se muestran tarjetas informativas de distintos personajes de la saga **Assassin’s Creed**.  
Cada tarjeta incluye imagen, nombre, juego, época y una breve descripción.

---

## 📸 Vista previa

> Proyecto visual tipo cards responsive, ideal para practicar componentes, props y renderizado con `.map()`.
![Captura assasinsCreedCards](https://github.com/user-attachments/assets/15696ca3-0210-4c15-bc87-3bed03e7928d)

---

## 🚀 Tecnologías usadas

- ⚛️ **React**
- ⚡ **Vite**
- 🎨 **CSS**
- 🧩 Componentes reutilizables
- 📦 Importación de imágenes con ES Modules

---

## 🗂️ Estructura del proyecto

src/
├─ assets/
│ └─ images/
│ ├─ ezio.jpg
│ ├─ altair.jpg
│ ├─ connor.jpg
│ ├─ edward.jpg
│ └─ bayek.jpg
├─ components/
│ └─ Tarjeta.jsx
├─ App.jsx
├─ App.css
├─ index.css
└─ main.jsx

yaml
Copiar código

---

## 🧠 Qué se practica en este proyecto

✔ Uso de **componentes React**  
✔ Paso de datos con **props**  
✔ Renderizado dinámico con **map()**  
✔ Organización de imágenes en Vite  
✔ Maquetación con **Flexbox**  
✔ Estilos centralizados en `App.css`

---

## 🧩 Ejemplo de componente

```jsx
<Tarjeta 
  nombre="Ezio Auditore"
  juego="Assassin's Creed II"
  epoca="Renacimiento"
  descripcion="Asesino italiano que vengó a su familia."
  imagen={ezio}
/>
▶️ Cómo ejecutar el proyecto
Clona el repositorio

bash
Copiar código
git clone https://github.com/tu-usuario/assassins-creed-cards.git
Entra en la carpeta

bash
Copiar código
cd assassins-creed-cards
Instala dependencias

bash
Copiar código
npm install
Arranca el servidor

bash
Copiar código
npm run dev
🌍 Deploy
Este proyecto es compatible con GitHub Pages y se puede publicar fácilmente con:

bash
Copiar código
npm run build
npm run deploy
👨‍💻 Autor
Heber Paris Caamaño
Estudiante de Bootcamp Full Stack
Apasionado por el desarrollo web, React y la ciberseguridad 🚀

📜 Licencia
Proyecto de uso educativo.
Assassin’s Creed es una marca registrada de Ubisoft.
