
            //if

//1
let number = prompt("Введіть число:");
if (number > 0) {
    console.log("Число є додатнім.");
} else if (number < 0) {
    console.log("Число є від'ємним.");
} else {
    console.log("Число є нулем.");
}

//2
let age = prompt("Введіть свій вік:");
if (age >= 0 && age <= 120) {
    console.log("Вік введено коректно.");
} else {
    console.log("Некоректний вік. Будь ласка, введіть вік від 0 до 120 років.");
}
//3

let userNumber = prompt("Введіть число:");
let absoluteValue;

if (userNumber >= 0) {
    absoluteValue = userNumber;
} else {
    absoluteValue = -userNumber;
}

console.log("Модуль числа " + userNumber + " дорівнює " + absoluteValue + ".");


//4

let hours = prompt("Введіть години:");
let minutes = prompt("Введіть хвилини:");
let seconds = prompt("Введіть секунди:");

if (
    hours >= 0 && hours <= 23 &&
    minutes >= 0 && minutes <= 59 &&
    seconds >= 0 && seconds <= 59
) {
    console.log("Час введено коректно.");
} else {
    console.log("Некоректний ввід часу. Перевірте правильність введених даних.");
}


//5

let x = prompt("Введіть координату x:");
let y = prompt("Введіть координату y:");

if (x > 0 && y > 0) {
    console.log("Точка знаходиться в першій чверті.");
} else if (x < 0 && y > 0) {
    console.log("Точка знаходиться в другій чверті.");
} else if (x < 0 && y < 0) {
    console.log("Точка знаходиться в третій чверті.");
} else if (x > 0 && y < 0) {
    console.log("Точка знаходиться в четвертій чверті.");
} else if (x === 0 && y !== 0) {
    console.log("Точка знаходиться на вісі Y.");
} else if (x !== 0 && y === 0) {
    console.log("Точка знаходиться на вісі X.");
} else if (x === 0 && y === 0) {
    console.log("Точка знаходиться в початку координат.");
}

                //switch
  
//1
let monthNumber = prompt("Введіть номер місяця:");
let monthName;

switch (parseInt(monthNumber)) {
    case 1:
        monthName = "Січень";
        break;
    case 2:
        monthName = "Лютий";
        break;
    case 3:
        monthName = "Березень";
        break;
    case 4:
        monthName = "Квітень";
        break;
    case 5:
        monthName = "Травень";
        break;
    case 6:
        monthName = "Червень";
        break;
    case 7:
        monthName = "Липень";
        break;
    case 8:
        monthName = "Серпень";
        break;
    case 9:
        monthName = "Вересень";
        break;
    case 10:
        monthName = "Жовтень";
        break;
    case 11:
        monthName = "Листопад";
        break;
    case 12:
        monthName = "Грудень";
        break;
    default:
        monthName = "Невірний номер місяця";
}

console.log("Місяць з номером"+ monthNumber + "- це" + monthName +".");

//2
let num1 = parseFloat(prompt("Введіть перше число:"));
let num2 = parseFloat(prompt("Введіть друге число:"));
let operation = prompt("Введіть операцію (+ - * /):");
let result;

switch (operation) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = (num2 !== 0) ? num1 / num2 : "Ділення на нуль неможливе";
        break;
    default:
        result = "Невірна операція";
}

console.log("Результат" + result);


      //тренарний оператор

//1
let number1 = parseFloat(prompt("Введіть перше число:"));
let number2 = parseFloat(prompt("Введіть друге число:"));
let more = (number1 > number2) ? number1 : number2;

console.log("Більше число" + more);

//2

let num5 = parseFloat(prompt("Введіть число:"));
let kr5 = (num5 % 5 === 0) ? "Кратне 5" : "Не кратне 5";

console.log(kr5);

//3
let planet = prompt("Введіть назву планети:");
let greeting = (planet === "Земля" || planet === "земля") ? "Привіт, землянине!" : "Привіт, інопланетянине!";

console.log(greeting);




