const btt_agre = document.querySelector(".adiccion");
const input_exp = document.querySelector("#todoInput");
const ul_container = document.querySelector(".infoo");
const Sel_Tod = document.getElementById('seleccionarTodo');


function remove() {
    this.parentElement.remove();
}
function seleccionarTodo() {
    const checkboxes = document.querySelectorAll('.checkbox');

    checkboxes.forEach(checkbox => {
        checkbox.checked = true;
    });
}
function addExperiencia(container) {
    if (input_exp.value.trim() === '') {
        alert("No puedes mandar nada ");
    } else {
        const To_do = document.createElement("li");

        const botton = document.createElement("a");
        botton.className = "Borrar";
        botton.innerHTML = "&times;";
        botton.addEventListener("click", remove);

        const checkboxContainer = document.createElement("div");
        checkboxContainer.className = "checkbox-container";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkbox.addEventListener("change", function() {
            const text = this.parentNode.querySelector("span");
            text.classList.toggle("completed", this.checked);
        });

        const To_doText = document.createElement("span");
        To_doText.textContent = input_exp.value;

        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(To_doText);

        const ff = document.createElement("div");
        ff.className = "flex";
        
        ff.appendChild(checkboxContainer);
        ff.appendChild(botton);
        container.appendChild(ff);

        input_exp.value = '';
    }
}

btt_agre.addEventListener("click", () => addExperiencia(ul_container));
Sel_Tod.addEventListener('click', seleccionarTodo);