const propEl = document.querySelector('h2');
console.log(propEl);

// para mostrar las propiedades de un objeto: 
console.dir(propEl)
// nos muestra todas las propiedades y métodos en este caso del h2

console.log(propEl.parentElement);
// con parentElement podemos ver el padre del elemento seleccionado. 


// outerText textContent outerHTML, and many other properties.

console.log(propEl.outerText); // me muestra el texto del elemento.
// nos muestra el texto del elemento

console.log(propEl.textContent); // me envía el contenido de texto que tiene
console.log(propEl.outerHTML); // me envía el elemento html en un string

// ----------- Getters y setters 

// Getter = obtener información 
// Setter = Establecer información

const obtenerInfo = document.querySelector('p')
console.log(obtenerInfo)

// textContent and innerText

// innerText solo devuelve el contenido legible por humanos.
// textContent (mas nuevo) obtiene todo el contenido (css y scripts incluidos)

console.log(document.querySelector('h1#name'))

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent)


