//PREGUNTA 1

console.log("Requerimiento 1");

//Solicita variable
let numero1 = +prompt("Ingresa numero 1 > 0");
let numero2 = +prompt("Ingresa numero 2 > 0");

//Realiza calculos
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let division = numero1 / numero2;
let multiplicacion = numero1 * numero2;
let modulo = numero1 % numero2;

// Imprime respuestas
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Division:", division);
console.log("Multiplicacion:", multiplicacion);
console.log("Modulo:", modulo);

//PREGUNTA 2
console.log("Requerimiento 2");

//Solicita variable
let gradosC = +prompt("Ingresa temperatura en °C");

// Calculos y respuestas A
let gradosK = gradosC + 273.15;
console.log("La temperatura en ° Kelvin es:", gradosK);

//Calculos y respuestas b
let gradosF = gradosC * (9 / 5) + 32;
console.log("La temperatura en ° Fahrenheit es:", gradosF);

//PREGUNTA 3
console.log("Requerimiento 3");

//Solicita variable
let diasTransformar = +prompt("Ingrese numero de dias a transformar");

//Calculos
let anos = Math.floor(diasTransformar / 365);
let remanente1 = diasTransformar % 365;
let semanas = Math.floor(remanente1 / 7);
let remanente2 = remanente1 % 7;
let dias = remanente2;

//Imprime respuestas
console.log(
  "Los dias son equivalentes a:",
  anos,
  "años",
  semanas,
  "semanas",
  remanente2,
  "dias"
);

//PREGUNTA 4
console.log("Requerimiento 4");

//Solicita variables
let num1 = +prompt("Ingrese numero 1");
let num2 = +prompt("Ingrese numero 2");
let num3 = +prompt("Ingrese numero 3");
let num4 = +prompt("Ingrese numero 4");
let num5 = +prompt("Ingrese numero 5");

//Se realizan calculos
let sumaDe5 = num1 + num2 + num3 + num4 + num5;
let promedioDe5 = sumaDe5 / 5;

//Se imprimen respuestas
console.log("Suma de los 5:", sumaDe5);
console.log("Promedio de los 5:", promedioDe5);
