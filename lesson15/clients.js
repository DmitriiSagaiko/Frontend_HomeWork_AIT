// const mainDiv = document.getElementById("main");
// const button = document.getElementById("button");
const form = document.getElementById("form");
const clients = document.getElementById("clients");
const loader = document.getElementById("loader");

async function getClient(name) {
  const data = await fetch(
    "https://raw.githubusercontent.com/DmitriiSagaiko/Frontend_HomeWork_AIT/main/lesson15/clients.json"
  ).then((el) => el.json());
  const client = data.filter((el) => {
    if (el.name === name) {
      return el;
    }
  });
  return client;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  let name = event.target.name.value;
  let data = "";
  try {
    data = await getClient(name);
  } catch (e) {
    console.log(e);
  }

  if (data) {
    loader.style.display = "block"
    setTimeout(() => {
        clients.appendChild(createClient(data));
        loader.style.display = "none"
    },2000)

  } else {
    console.log("Нет такой инфы");
  }

  event.target.name.value = "";
});

function createClient(client) {
  const div = document.createElement("div");
  div.style.margin = "10px";
  div.style.borderStyle = "solid";
  div.style.borderColor = "blue";
  div.style.borderWidth = "5px";

  const name = document.createElement("h4");
  name.innerText = `Имя: ${client[0].name}`;
  const age = document.createElement("h4");
  age.innerText = "Возраст: " + client[0].age;
  const phone = document.createElement("h4");
  phone.innerText = "Телефон: " + client[0].phone;
  const city = document.createElement("h4");
  city.innerText = "Город: " + client[0].city;
  div.appendChild(name);
  div.appendChild(age);
  div.appendChild(phone);
  div.appendChild(city);
  return div;
}

