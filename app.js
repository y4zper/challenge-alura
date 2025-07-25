// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.



let participantes = [];

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value.trim();
    if (nombre === "") {
        alert("El espacio está vacío. Por favor, ingresa un nombre.");
    } else {
        participantes.push(nombre);
        document.getElementById("amigo").value = ""; // Limpiar el campo de entrada
    }

    actualizarAmigo();
   
}


function actualizarAmigo(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista actual
    for (let i = 0; i < participantes.length; i++) {
        listaAmigos.innerHTML += `<li>${participantes[i]}</li>`;
    }   
    
}   

function sortearAmigo() {
    let generarIndice = Math.floor(Math.random() * participantes.length);
    let listaAmigos = document.getElementById("listaAmigos");   
    let resultado = document.getElementById("resultado");
    if(participantes.length < 1){
        alert("No hay suficientes participantes para realizar el sorteo.");
    } else if(participantes.length === 1){
        alert("Solo hay un participante, no se puede realizar el sorteo.");
    } else {
        let sorteado = participantes[generarIndice];
        listaAmigos.innerHTML = ""; // Limpiar la lista actual
        resultado.innerHTML = `El amigo secreto sorteado es : ${sorteado}`;
    }
}

