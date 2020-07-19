// Selectors
const addBtn = document.querySelector("#subBtn");
const delBtns = document.querySelector(".delBtn");
const insideContainer = document.querySelector("grupContainer");
const textInput = document.querySelector("#text");
const insertPostion = document.querySelector(".grupContainer");
const textFeild = document.querySelector("input");

//INput of the classes

//Drivers
var globalIndex = 0;

addBtn.addEventListener("click", function () {
  globalIndex++;

  insertHTML();
});

document.addEventListener("click", function (e) {
  if (e.target && e.target.classList == "delBtn") {
    removeHTML(e.target.parentNode.id);
  }
});

// Functions
function insertHTML() {
  var taskCont = document.createElement("div");
  var userInput = document.createElement("h2");
  var taskBtn = document.createElement("button");
  var delIcon = document.createElement("i");

  insertPostion.appendChild(taskCont);
  taskCont.setAttribute("class", "container-tasks");

  taskCont.setAttribute("id", globalIndex + "");

  let cur = taskCont.appendChild(userInput);
  cur.setAttribute("id", "task");
  cur.textContent = textInput.value;

  cur = taskCont.appendChild(taskBtn);

  cur.setAttribute("class", "delBtn");

  cur.setAttribute("id", "meP");

  cur.setAttribute("aria-hidden", "True");
  cur = cur.appendChild(delIcon);
  cur.setAttribute("class", "fa fa-trash fa-2x");
}

function removeHTML(id) {
  console.log(id + "");
  document.getElementById("" + id).remove();
}
