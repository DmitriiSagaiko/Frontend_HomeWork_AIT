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
  const deleteThisElement = document.createElement("button");
  deleteThisElement.style.width = "150px";
  deleteThisElement.style.height = "25px";
  deleteThisElement.style.backgroundColor = "red";
  deleteThisElement.style.textAlign = "left";
  deleteThisElement.style.marginLeft = "10px";
  deleteThisElement.innerText = "удалить покупку";
  deleteThisElement.id = buttonCounter;

  map.set(buttonCounter, textElement)
  deleteThisElement.onclick = deleteElement
  buttonCounter++;


  textElement.onclick = changeStatus;

  productsElements.appendChild(textElement);
  textElement.appendChild(deleteThisElement)
  clearInputs(event);

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

function deleteElement (element) {
    let li = element.target.parentNode;
    productsElements.removeChild(li);
}
