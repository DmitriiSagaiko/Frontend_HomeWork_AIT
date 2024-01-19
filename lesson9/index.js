// Task1

const findElementInArray = (array, index) => {
  return array[index];
};

console.log(findElementInArray([1, 2, 3, 4, 5], 0));

//Task2

function findDescription(code, decode) {
  return decode(code);
}

function decode(code) {
  switch (code) {
    case "SQ":
      return `${code} - шквал`;
    case "PO":
      return `${code} - пыльный вихрь`;
    case "FC":
      return `${code} - торнадо`;
    case "BR":
      return `${code} - дымка( видимость от 1 до 9 км)`;
    case "HZ":
      return `${code} - мгла (видимость менее 10 км)`;
    case "FU":
      return `${code} - дым (видимость менее 10 км)`;
    case "DS":
      return `${code} - пыльная буря (видимость менее 10 км)`;
    case "SS":
      return `${code} - песчаная буря (видимость менее 10 км)`;
    default:
      return "Нет такого кода";
  }
}

console.log(findDescription("SS", decode));
