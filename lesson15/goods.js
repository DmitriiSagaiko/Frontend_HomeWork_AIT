const form = document.getElementById("form");
const goods = document.getElementById("goods");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  let amount = event.target.input.value;
  const array = await getGoods(amount);
  console.log(array);

  event.target.input.value = "";

  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    createCard(element);
  }
});

async function getGoods(amount) {
  let url = "https://fakestoreapi.com/products?limit=" + amount;
  let array = await fetch(url).then((data) => data.json());
  return array;
}

function createCard(element) {
  const divCard = document.createElement("div");
  divCard.style.margin = "10px";
  divCard.style.border = "solid 2px black";
  divCard.style.display = "grid";
  divCard.style.gridTemplateColumns = "repeat(5, 60px)";
  divCard.style.gridTemplateRows = "repeat(9, 50px)";

  const title = document.createElement("h5");
  title.style.textAlign = "center";
  title.innerText = element.title;
  title.style.gridColumn = "1 / span 5"; // Title spans all columns

  const photo = document.createElement("img");
  photo.src = element.image;
  photo.style.gridColumn = "2 / span 3"; // Photo spans columns 2-4
  photo.style.gridRow = "2 / span 4"; // Photo spans rows 2-4
  photo.style.width = "100%";
  photo.style.maxHeight = "100%";

  const price = document.createElement("p");
  price.innerText = "price: " + element.price + "$";
  price.style.gridColumn = "1 / span 2"; // Price in column 2
  price.style.alignSelf = "center"

  const rating = document.createElement("p");
  rating.innerText = "rating: " + element.rating.rate;
  rating.style.gridColumn = "3"; // Rating spans columns 4-5
  rating.style.textAlign = "center";
  rating.style.alignSelf = "center"


  const count = document.createElement("p");
  count.innerText = "amount: " + element.rating.count;
  count.style.gridColumn = "4 / span 5"; // Count in column 5
  count.style.gridRow = "6"; // Count in column 5
  count.style.textAlign = "right";
  count.style.alignSelf = "center"

  const description = document.createElement("p");
  description.innerText = element.description;
  description.style.fontSize = "10px";
  description.style.gridArea = "7 / 1 / span 3 / span 5";

  divCard.appendChild(title);
  divCard.appendChild(photo);
  divCard.appendChild(price);
  divCard.appendChild(rating);
  divCard.appendChild(count);
  divCard.appendChild(description);

  goods.appendChild(divCard);

  console.log(divCard);
}
