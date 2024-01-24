const formElement = document.getElementById("form");

const productsElements = document.getElementById("products");

let buttonCounter = 0;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const product = {
    product: event.target.object.value,
    amount: event.target.amount.value,
  };

  const textElement = document.createElement("p");
  textElement.innerText = ` ${product.product} в количестве ${product.amount} штук`;
  textElement.style.width = "600px";
  textElement.className = "item";

  const deleteThisElement = document.createElement("button");
  deleteThisElement.style.width = "170px";
  deleteThisElement.style.height = "25px";
  deleteThisElement.style.backgroundColor = "red";
  deleteThisElement.style.textAlign = "center";
  deleteThisElement.style.marginLeft = "10px";
  deleteThisElement.innerText = "удалить покупку";
  deleteThisElement.id = buttonCounter;
  deleteThisElement.style.cursor = "pointer";

  deleteThisElement.onclick = deleteElement;
  buttonCounter++;

  textElement.onclick = changeStatus;

  productsElements.appendChild(textElement);
  textElement.appendChild(deleteThisElement);
  clearInputs(event);
  hover();
});

function changeStatus(event) {
  if (event.target.style.textDecoration === "line-through") {
    event.target.style.textDecoration = "none";
  } else {
    event.target.style.textDecoration = "line-through";
  }
}
function clearInputs(event) {
  event.target.object.value = "";
  event.target.amount.value = "";
}

function deleteElement(element) {
  let li = element.target.parentNode;
  productsElements.removeChild(li);
}

function hover() {
  let allElems = document.getElementsByClassName("item");
  for (let i = 0; i < allElems.length; i++) {
    allElems[i].style.cursor = "pointer";
  }
}
