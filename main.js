/// console.log(document.getElementById("encabezado1")); //Estamos accediendo a la etiqueta h1 con el id "encabezado1".

// let encabezado1 = document.getElementById("encabezado1");
// encabezado1.innerText = "Ejercicio DOM";
// console.log(encabezado1.innerText);

//DOM Exercise

// let encabezado2 = document.getElementById("encabezado2");
// encabezado2.innerText = "DOM Exercise";
// console.log(encabezado2.innerText);

let btnMostrar = document.getElementById("btnMostrar");
let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let listas = document.getElementsByTagName("ul");
let txtRFC = document.getElementById("txtRFC");
let txtTelephone = document.getElementById("txtTelephone");
let txtCURP = document.getElementById("txtCURP");


let elementos = document.getElementsByClassName("list-group-item");

let otroElemento = document.querySelector("ul>li"); //primer elemento

let otrosElementos = document.querySelectorAll("ul>li"); //todos

console.log(otrosElementos.length);

console.log("otroElemento: ", otroElemento);

console.log(listas.length); //2
// console.log(listas[0]);
console.log(listas.item(1));

console.log(elementos.item(2));

console.log(elementos.length); //10

let contador = 0; 
function modifica(){
    // encabezado1.innerText = "<em>Ejercicio</em> DOM"
    encabezado1.innerHTML += "<em>Ejercicio</em> DOM";
    encabezado2.innerText = ++contador;   
} //modifica

//console.log(encabezado1.innerText);

btnMostrar.addEventListener("click", function (event){
    event.preventDefault(); //no hagas lo que haces por defecto
    
    let element = document.createElement("li");
    element.innerText = "Another item"; // <li>Another item</li> es lo que obtendremos
    element.classList.add("list-group-item");

    let element2 = element.cloneNode(true);


    // listas.item(0).before(element); // Inserta elemento antes de la lista
    // listas.item(0).prepend(element2); // Inserta el elemento inmediatamente después del ul
    // listas.item(0).append(element); // Inserta el elemento al final de la lista
    // listas.item(0).after(element2); // Inserta el elemento después de la lista

   // listas.item(1).insertAdjacentElement("afterbegin", element); // Inserta el elemento al inicio de la lista.
   // listas.item(1).insertAdjacentElement("beforeend", element2); // Inserta el elemento al final de la lista.

   listas.item(1).insertAdjacentHTML("beforebegin", `<li class="list-group-item">Before Begin item</li>`);
   listas.item(1).insertAdjacentHTML("afterend", `<li class="list-group-item">After End item</li>`);
   listas.item(1).insertAdjacentHTML("afterbegin", `<li class="list-group-item">After Begin item</li>`);
   listas.item(1).insertAdjacentHTML("beforeend", `<li class="list-group-item">Before End item</li>`);

});//btnMostrar

//Se ejecuta cuando termina de cargar todos los elementos de la página
window.addEventListener("load",function(event){
    console.log("Ha terminado de cargar la página");
}); //load

function txtToUpper(event){ //Esta es una forma mayormente automatizada para hacer lo que indicamos en el comentario de abajo.
    event.preventDefault();
    event.target.value = event.target.value.trim().toUpperCase();
} //txtToUpper

txtRFC.addEventListener("blur", txtToUpper);
txtCURP.addEventListener("blur", txtToUpper);

//blur: perder el foco; cuando sale del campo
//txtRFC.addEventListener("blur", function (event){
//    event.preventDefault();
//    txtRFC.value = txtRFC.value.toUpperCase();

//});//txtRFC

//txtCURP.addEventListener("blur", function (event){
//    event.preventDefault();
//    txtCURP.value = txtCURP.value.toUpperCase();
//});

txtTelephone.addEventListener("blur",function(event){
    event.preventDefault();
    txtTelephone.value = txtTelephone.value.trim().slice(0,10);
});