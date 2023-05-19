// Task1
let name = prompt("What's your name?");
alert(`Hello, ${name}`)
//Task2
const  currentYear =  2023
let year = prompt("Enter your birth year");
alert(currentYear - year);
//Task3
let length = prompt("Enter length")
alert(length*4)
//Task4
let r = prompt("Enter radius")
alert(Math.pow(r,2)*Math.PI)
//Task5
let l = prompt('введите расстояние')
let time = prompt('введите время')
alert(l/time + ` км/ч`)
//Task6
const kurs =  0.93
let usd = prompt('enter usd')
alert(usd * kurs)
//Task7
let gb = prompt('enter gb')
alert(Math.round(gb * 1024 /820))
//Task8
let money = prompt('Enter the amount of money u have')
let chocoPrice = prompt('Enter the price of choco')
alert("Quantity: " + parseInt(money / chocoPrice) + "Money left: " + (money - (parseInt(money / chocoPrice) * chocoPrice) ))
// //Task9
let num = prompt('Enter number')
alert(getReversedNum(num))

function getReversedNum(num) {
    let result = 0;
    while (num) {
        result = result * 10 + num % 10;
        num = Math.floor(num / 10);
    }

    return result;
}

//Task10
function check(num) {
    return num % 2 ==  0 ? "чётное" : "нечётное";
}
const n = prompt("Enter num");
alert(check(n));