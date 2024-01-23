const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

//Task1
let cars1 = [];

cars.map((el) => {
  let name = el.brand;
  let isDiesel = el.isDiesel;
  let obj = { name, isDiesel };
  cars1.push(obj);
});
console.log(cars1);

//Task2
let dieselCars = cars.filter((el) => el.isDiesel === true);
console.log(dieselCars);

//Task3
let notDieselCars = cars.filter((el) => el.isDiesel === false);
console.log(notDieselCars);

//Task4

let price = notDieselCars.map((el) => el.price).reduce((a, b) => a + b, 0);
console.log(price);

//Task 5
notDieselCars.forEach((el) => (el.price = el.price * 1.2));
console.log(notDieselCars);

//Task6
let newCars = [...cars];
newCars.forEach((car, index, array) => {
  const replacementCar = { brand: "Tesla", price: 25000, isDiesel: false };
  if (car.isDiesel) {
    array[index] = replacementCar;
  }
});
console.log(newCars);
console.log(cars);
const deepCope = structuredClone(cars);
console.log(deepCope);

//Task 7

let TODOList = [
  "поесть",
  "Попить",
  "Погладить кошку",
  "Помыться",
  "Лечь спать",
];

TODOList.splice(TODOList.length / 2, 1, "Новая задача через splice");
console.log(TODOList);
//скопировал с середины дня
let copiedTODO = TODOList.slice(2, TODOList.length);
console.log(copiedTODO);
//удаляем попить
TODOList.splice(1, 1);
console.log(TODOList);
