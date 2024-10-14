const listaDeTareas = document.querySelector("#tareas")
const InputTarea = document.querySelector("#nuevaTarea")
const btnAgregar = document.querySelector("#agregarTarea")
const cuentaTareas = document.querySelector("#cuenta-tareas")
const cuentaRealizadas = document.querySelector("#selected");

const tareas = []
/* Actualizamos la información en el HTML */
function renderDeTareas() {
    let html = ""    
    for (let tarea of tareas) {
        html += `<li>${tarea.id} ${tarea.nombre} <input type="checkbox" name="checkbox" onchange="actualizarCuenta()" />
        <button onclick="borrar(${tarea.id})"><i class="fa-solid fa-x"></i></button>
    </li>`;
    }
    listaDeTareas.innerHTML = html;
    cuentaTareas.textContent  = `Total de tareas: ${tareas.length}`;

}

// Actualiza el contador de tareas completadas
function actualizarCuenta() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const totalCompletadas = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    cuentaRealizadas.textContent =  'Total de tareas realizadas: ' + totalCompletadas;

}

btnAgregar.addEventListener("click", () => {
    var uuid = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
    const nuevaTarea = { id: uuid, nombre: InputTarea.value }
    tareas.push(nuevaTarea)
    InputTarea.value = ""
    renderDeTareas()
})




function borrar(id) {
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index, 1)
    renderDeTareas()
}

