# 🗡️ Assassin’s Creed Cards

Proyecto realizado con **React + Vite** que presenta una colección visual de **tarjetas (cards)** inspiradas en la saga **Assassin’s Creed**, mostrando tanto **libros** como **personajes** emblemáticos de la franquicia.

Cada tarjeta incluye imagen, nombre, juego o libro asociado, época y una breve descripción, utilizando componentes reutilizables y assets locales.

---

## 📸 Vista previa

> Proyecto visual tipo *cards*, responsive, ideal para practicar React moderno.


<img width="1892" height="915" alt="Captura projecto final" src="https://github.com/user-attachments/assets/392f7870-887e-4a13-8b07-181a77945885" />

---

## 🚀 Tecnologías utilizadas

* ⚛️ **React**
* ⚡ **Vite**
* 🎨 **CSS**
* 🧩 Componentes reutilizables
* 📦 Importación de imágenes con ES Modules

---

## 📂 Estructura del proyecto

```
public/
src/
├── assets/
│   └── images/
│       ├── books/
│       │   ├── blackFlag.jpg
│       │   ├── forsaken.jpg
│       │   ├── herejia.jpg
│       │   ├── laCruzadaSecreta.jpg
│       │   ├── laHermandad.jpg
│       │   ├── odyssey.jpg
│       │   ├── origins.jpg
│       │   ├── renaissance.jpg
│       │   ├── revelaciones.jpg
│       │   ├── underworld.jpg
│       │   └── unity.jpg
│       └── character/
│           ├── altair.jpg
│           ├── bayek.jpg
│           ├── connor.jpg
│           ├── edward.jpg
│           └── ezio.jpg
│
├── components/
│   ├── Navbar.jsx
│   ├── Books.jsx
│   ├── Tarjeta.jsx
│   ├── Books.css
│   └── Tarjeta.css
│
├── pages/
│   └── PageBooks.jsx
│
├── App.jsx
├── App.css
├── index.css
├── main.jsx
│
├── eslint.config.js
└── vite.config.js

index.html
package.json
```

---

## 🧩 Componentes principales

* **Navbar**: Barra de navegación principal.
* **Books**: Renderiza la colección de libros.
* **Tarjeta**: Componente reutilizable para mostrar personajes o libros.
* **PageBooks**: Página que agrupa y muestra los libros.

---

## 🧠 Qué se practica en este proyecto

✔ Uso de **componentes en React**
✔ Paso de información mediante **props**
✔ Renderizado dinámico con **map()**
✔ Organización de imágenes en proyectos Vite
✔ Maquetación con **Flexbox**
✔ Separación de lógica y estilos (CSS)

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
```

---

## ▶️ Instalación y ejecución

1. Clona el repositorio:

```bash
git clone https://github.com/webermuros1-oss/assasinsCreedCards
```

2. Entra en la carpeta del proyecto:

```bash
cd assassins-creed-cards
```

3. Instala las dependencias:

```bash
npm install
```

4. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

5. Abre el navegador en:

```
http://localhost:5173
```

---

## 🌍 Deploy

El proyecto es compatible con **GitHub Pages**:

```bash
npm run build
npm run deploy
```

---

## 👨‍💻 Autor

**Heber Paris Caamaño**
Estudiante de Bootcamp Full Stack
Apasionado por el desarrollo web 🚀

---

## 📜 Licencia

Proyecto de uso **educativo**.
*Assassin’s Creed* es una marca registrada de **Ubisoft**.

