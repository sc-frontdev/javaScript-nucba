const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//  Las pizzas que tengan un id impar.

console.log("---------ejercicio A-----------------");

pizzas.forEach((pizza) => {
  if (pizza.id % 2 !== 0) {
    console.log(pizza.nombre);
  }
});

console.log("---------ejercicio B-----------------");
//  Responder: ¿Hay alguna pizza que valga menos de $600?

const pizzaBarata=(pizzas.filter(pizza => pizza.precio < 600).length)>=1?
console.log("Siiii,  tenemos al menos una pizza") : 
console.log("Noooo  lo sentimos todas las pizzas tienen un precio mayor")


console.log("---------ejercicio C-----------------");
// El nombre de cada pizza con su respectivo precio.
pizzas.forEach((pizza) => {
  console.log(pizza.nombre + " " + pizza.precio);
});
console.log("---------ejercicio D-----------------");
// Todos los ingredientes de cada pizza
for (const pizza of pizzas) {
  console.log(pizza.nombre + ":" + " " + pizza.ingredientes);
}
