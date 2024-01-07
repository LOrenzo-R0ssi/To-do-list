const inputText = document.querySelector(".input");
const submit = document.querySelector(".btn-submit");
const form = document.querySelector("#form");
const resultados = document.querySelector(".results");

//Prevent default form

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  let valor = inputText.value;

  const tarea = document.createElement("div");
  tarea.className = "divTarea";
  tarea.innerHTML = `
  <p id="parrafo" >${valor}</p>

    <label class="label">
  <input type="checkbox">
  <div class="checkmark"></div>
  </label>`;

  
  resultados.appendChild(tarea);

  const divTarea = resultados.lastChild;
  divTarea.appendChild(addDeleteBtn(divTarea))

  inputText.value = "";
});



const addDeleteBtn = (divTarea) => {
  const btnDelete = document.createElement("button");

  btnDelete.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg>`;

  btnDelete.className = "bin-button"

  const parrafo = document.querySelector("#parrafo")

  btnDelete.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    resultados.removeChild(divTarea);
    
  });
  return btnDelete;
};
