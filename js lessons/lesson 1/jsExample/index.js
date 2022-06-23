`use strict`;

const num = 50;

(num == 50) ? console.log(`Ok`) : console.log(`Err`); //--- тернарный оператор //


let sum = 0;

while (true) {
    let value = +prompt(`sdad`, ``); // вызов окна, которые будет задавать числовые значения

    if(!value) break; // чтобы завершить цикл, когда ввел нужные параметры

    sum += value; // суммируем точку отчета сум =  0 и наше вводимое число в промте
}
alert(`sadada` + sum);  // сумма чисел записаных в промпте

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    };
}   // вложеный цикл


let result = ``;
const leght = 7;

for (let i = 1; i < leght; i++) {
    for(let j= 0; j < i; j++) {
        result += "*";
    };
    result += `\n`;
}

console.log(result);   // пример вложеного цикла

for (let i = 5; i <= 10; i++) {
    console.log(i);
}

for (let i = 20; i => 10; i--) {
    if (i === 13) break;
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2) continue;
    console.log(i);
}


const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);
return arrayOfNumbers;


