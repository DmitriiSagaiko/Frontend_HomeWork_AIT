const ul = document.getElementById("ul");

async function getInfo() {
  let data = "";
  try {
    data = await fetch(
      "https://dmitriisagaiko.github.io/Frontend_HomeWork_AIT/lesson14/myFile.json"
    ).then((data) => data.json());
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = data.name;
    li2.innerText = data.age;
    li3.innerText = data.target;
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
  } catch (e) {
    console.log(e.message);
  }
}
getInfo();
