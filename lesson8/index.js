//Task 1
let names = ["Семен", "Иван", "Петр", "Татьяна"];
let ages = [18, 27, 74, 34];

let result = new Array(ages.length);

for (let i = 0; i < ages.length; i++) {
  result[i] = names[i] + " " + ages[i] + " лет/годов";
}

console.log(result);
// Task 2
let result2 = new Array();
let j = result.length;

while (j !== 0) {
  let deleted = result.pop();
  result2.push(deleted);
  j--;
}

console.log(result2);
