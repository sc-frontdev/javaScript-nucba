const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const form = document.getElementById("form");
const input = document.getElementById("input");
const resultados = document.querySelector(".resultados");

function mostrarPizza(pizza) {
  resultados.innerHTML = `
  <div class='card'>
      <header class="header-card">
          <img src =${pizza.imagen} alt = '${pizza.nombre}'/>
      </header>

          <div class="body-card">
            <h3>${pizza.nombre}</h3>
            <p><span>$</span>${pizza.precio}</p>
            <h4>${pizza.ingredientes}</h4>
          </div
  </div>
  `;
}

function mostrarError(mensaje) {
  resultados.innerHTML = `<span class="error">${mensaje}</span>`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const ID = parseInt(input.value);
  console.log(ID);
  input.value = "";
  const pizza = pizzas.find((p) => p.id === ID);
  if (pizza) {
    mostrarPizza(pizza);
    localStorage.setItem("ultima", JSON.stringify(pizza));
  } else {
    mostrarError("No tenemos esa elección");
  }
});
window.addEventListener("DOMContentLoaded", () => {
  const ultima = JSON.parse(localStorage.getItem("ultima"));
  if (ultima) {
    mostrarPizza(ultima);
  }
});
