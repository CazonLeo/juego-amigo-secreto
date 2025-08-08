// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto
}

let listaDeAmigos = [];

function añadirAmigo(){
    let nombreDeAmigo = document.getElementById('amigo').value;
    
    if (nombreDeAmigo === ""){
        alert("Por favor, ingresá un nombre.");
        return;
    }

    listaDeAmigos.push(nombreDeAmigo);
    
    document.getElementById('amigo').value = '';

    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = "";

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = listaDeAmigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (listaDeAmigos.length === 0) {
        alert("No hay amigos para sortear. Agregá al menos uno.");
        return;
    }

    // Generar un índice aleatorio entre 0 y (longitud - 1)
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

    // Obtener el nombre en ese índice
    let amigoSorteado = listaDeAmigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    document.getElementById('resultado').innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}

function nuevoSorteo() {
    // Vaciar el array
    listaDeAmigos = [];

    // Limpiar visualmente la lista en el HTML
    document.getElementById('listaAmigos').innerHTML = '';

    // Limpiar el resultado del sorteo, si existe
    document.getElementById('resultado').innerHTML = '';

}

asignarTextoElemento('h1','¡Juego del Amigo Secreto!');
asignarTextoElemento('h2','Agregue los nombres de sus amigos');