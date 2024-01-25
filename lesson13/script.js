const div = document.getElementById("div");
const infoField = document.getElementById("info");
const jokeField = document.getElementById("joke");
const form = document.getElementById("form");

async function getInfo(url) {
  const data = await fetch(url).then((data) => data.json());
  const firstPack = data.country[0];
  const secondPack = data.country[1];

  infoField.innerText = `Ты на ${firstPack.probability * 100}% из ${
    firstPack.country_id
  } и на ${secondPack.probability * 100}% из ${secondPack.country_id} `;
}

async function getJoke() {
  const data = await fetch(
    "https://official-joke-api.appspot.com/jokes/programming/random"
  ).then((data) => data.json());

  const setup = data[0].setup;
  const punch = data[0].punchline;

  jokeField.innerText = `${setup} ${punch}`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.name.value;
  const url = "https://api.nationalize.io/?name=" + name;
  getInfo(url);
  form.name.value = "";
});
getJoke();
