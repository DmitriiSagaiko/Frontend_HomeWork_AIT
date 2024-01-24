//Task1
function getStudent() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "anri",
        age: 32,
      });
    }, 4000);
  });
}

const student = getStudent();
student.then((data) => console.log(data.name));

//Task2

function getDriverLicense(success, failure) {
  const random = Math.random();
  if (random > 0.1) {
    console.log("Успех");
    success(random);
  } else {
    console.log("Неудача");
    failure(random);
  }
}
function success(result) {
  console.log(`Успешно завершено c результатом ${result}`);
}
function failure(error) {
  console.log(`Завершено с ошибкой ${1 - error} `);
}
getDriverLicense(success, failure);
