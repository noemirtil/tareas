// noemirtil

function addTask() {
    let nuevaTarea = document.getElementById("tareaInput").value;

    // alert si vacio
    if (nuevaTarea === "") {
        alert("Ingresa algo");
        return
    }
    // si no vacio, crear una linea y un <hr>
    let nuevaLinea = document.createElement("li");
    let hr = document.createElement("hr");
    // anadir el texto a la linea
    nuevaLinea.innerText = nuevaTarea;
    // anadir la linea a la <ul>
    document.getElementById("lista").appendChild(nuevaLinea);
    document.getElementById("lista").appendChild(hr);
    // borrar la entrada
    document.getElementById("tareaInput").value = ``;
    // crear el boton de borrar la tarea
    let borrar = document.createElement("button");
    borrar.innerText = "X";
    // asignarle una clase al boton
    borrar.className = `deleteBtn`;
    // agregarle el boton al elemento madre
    nuevaLinea.appendChild(borrar);

    function borrarLinea() {
        this.parentElement.remove();
    }
    // asignarle al boton la funcion borrarLinea
    borrar.addEventListener(`click`, borrarLinea);
}

// Llama a la función 
agregar.onclick = () => { addTask(); }
// Llama a la función si el usuario presiona enter cuando la caja esta focus
tareaInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        agregar.onclick();
    }
});