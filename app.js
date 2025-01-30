// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.let Amigo = prompt ("Digite el nombre de sus amigos");
let amigos = [];
let itera = 1;

function agregarAmigo() {
    let listAmigos = document.getElementById('amigo').value;
    
    if (listAmigos.length !== 0){
     amigos.push(listAmigos);
     recorrerListaAmigos(listAmigos);
        console.log(amigos);
        //cantidad de elementos
        console.log('cantidad', amigos.length);
        //muestra el ultimo elemento de la lista
        console.log('ultimo ele',amigos[amigos.length-1]);
        //*for (itera > 0 ; itera < 6;) 
         }
    limpiarCaja();
    return;
 
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function recorrerListaAmigos(texto) {
    let elementoHTML = document.querySelector('#listaAmigos');

    let li = document.createElement('li'); 
    li.textContent = texto;
    

    elementoHTML.appendChild(li);
}
function sortearAmigo() {
    let resultado = document.getElementById('resultado');

if (amigos.length ===0){
    resultado.innerHTML = "No hay amigos para sortear";

    return;
}
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];

        resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

        limpiarCaja();

    }
    

    
  

    
    
