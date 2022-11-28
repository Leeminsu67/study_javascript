const images = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
]

const choesenImage = images[Math.floor(Math.random() * images.length)];

const containor = document.querySelector("#containor");

containor.style.backgroundImage = `url(img/${choesenImage})`;

// const bgImage = document.createElement("img");
// bgImage.src = `img/${choesenImage}`;

// // document.body.appendChild(bgImage);
// document.body.prepend(bgImage);