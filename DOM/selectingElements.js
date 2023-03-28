
// function init() {
//     const pgraph = document.querySelector('p');
//     console.log(pgraph);
// }

// document.addEventListener('DOMContentLoaded', init);
// /* 
// Con esto indicamos que se ejecute la función init cuando el documento se cargue. 
//    -para evitar esto simplemente se ubica el scrit antes de la etiqueta de cierre body.
// */ 


// // --------- Selecting DOM elements

// document.querySelector(); // nos da el primer elemento del DOM que coincida.
// document.querySelectorAll(); // nos da muchos elementos.


const p = document.querySelector('p');
const divs = document.querySelectorAll('div');

console.log(p);
console.log(divs); // nos aparece una nodelist 
// aclarar que una nodelist no es un array. 
/* -> Ambos son una lista de cosas pero hay diferencias entre los 2 
    -> La nodelist no tiene tantos métodos como los tiene un array.
*/


// también podemos seleccionar clases

const pClass = document.querySelector('.item')
console.log(pClass);


// // --------- Searching Inside Already Selected Elements

const ele1 = document.querySelector('p');
 
console.log(ele1);

const eleId = document.getElementById('name');
console.log(eleId);
// nos permite seleccionar elementos mediante su ID.
// tanto en clases como en ids no es necesario utilizar . ó #

const eleClas = document.getElementsByClassName('pclase');
console.log(eleClas);
