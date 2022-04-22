/* Создайте три переменные. Присвойте первой переменной числовое значение. Вторая переменная равна первой переменной, увеличенной в три раза. Третья переменная равна сумме двух первых. Выведите на экран все три. */

const var1 = 7;
const var2 = var1 * 3;
const var3 = var1 + var2;
console.log(var1);
console.log(var2);
console.log(var3);

const firstDiv = document.getElementsByClassName('firstTask');
const firstBtn = document.getElementsByClassName('firstTaskButton');

firstBtn[0].addEventListener('click', function(){
    const firstP = document.createElement('p');
    const firstText = document.createTextNode(`${var1}, ${var1} * 3 = ${var2}, ${var1} + ${var2} = ${var3}`);
    firstP.appendChild(firstText);
    firstDiv[0].appendChild(firstP);
});





/* Создайте переменные firstName и lastName для хранения имени и фамилии, запишите в них значения из модального окна prompt. Выведите на экран приветствие “What’s up John Doe”. */

const secondDiv = document.getElementsByClassName('secondTask');
const secondBtn = document.getElementsByClassName('secondTaskButton');

secondBtn[0].addEventListener('click', function(){
    const firstName = prompt('What is your first name?', 'Oleksandra');
    const lastName = prompt('What is your last name?', 'Bilova');
    const secondP = document.createElement('p');
    const secondText = document.createTextNode(`What's up ${firstName} ${lastName}?`);
    secondP.appendChild(secondText);
    secondDiv[0].appendChild(secondP);
});





/* Создайте переменные x и y для хранения числа. Значения переменные получают из prompt. Рассчитайте произведение, частное, разность и сумму этих значений. Результат последовательно отобразите в модальном окне. */

const thirdDiv = document.getElementsByClassName('thirdTask');
const thirdBtn = document.getElementsByClassName('thirdTaskButton');

thirdBtn[0].addEventListener('click', function(){
    const x = prompt('Type a number');
    const y = prompt('Type another number');
    alert(`${x} * ${y} = ${x * y}`);
    alert(`${x} / ${y} = ${x / y}`);
    alert(`${x} + ${y} = ${+x + +y}`);
    alert(`${x} - ${y} = ${x - y}`);
});





/* Напишите в переменных формулу для расчета з/п за июль с учетом, что количество рабочий часов, количество рабочих дней в неделе и рейт за час – переменные значения и читаются из prompt.(Просчитывать какой это месяц, 30 или 31 день не нужно). */

const fourthDiv = document.getElementsByClassName('fourthTask');
const fourthBtn = document.getElementsByClassName('fourthTaskButton');

fourthBtn[0].addEventListener('click', function(){
    const workHour = prompt('How many working hours in a day do you have?');
    const workDays = prompt('How many working days a week do you have?');
    const rate = prompt('How much money do you earn per working hour?');
    const salary = (workDays * 4 * workHour * rate);
    const fourthP = document.createElement('p');
    const fourthText = document.createTextNode(`Your salary for July is ${salary}`);
    fourthP.appendChild(fourthText);
    fourthDiv[0].appendChild(fourthP);
});





/* Напишите программу, которая без использования оператора сравнения определяет, является ли число, введенное пользователем, нечётным. */

const fifthDiv = document.getElementsByClassName('fifthTask');
const fifthBtn = document.getElementsByClassName('fifthTaskButton');

fifthBtn[0].addEventListener('click', function(){
    const userNum = prompt('Type a whole number');
    
    function notEven(){
        if(userNum % 2){
            const fifthP = document.createElement('p');
            const fifthText = document.createTextNode(`The number ${userNum} is not even!`);
            fifthP.appendChild(fifthText);
            fifthDiv[0].appendChild(fifthP);
        }
        else{
            const fifthP = document.createElement('p');
            const fifthText = document.createTextNode(`The number ${userNum} is even!`);
            fifthP.appendChild(fifthText);
            fifthDiv[0].appendChild(fifthP);
        }
    }
    notEven();

});





/* Напишите программу, которая проверяет, является ли значение, введенное пользователем, числом. */

const sixthDiv = document.getElementsByClassName('sixthTask');
const sixthBtn = document.getElementsByClassName('sixthTaskButton');

sixthBtn[0].addEventListener('click', function(){
    const userSecondNum = prompt('Type a number');
    const isNumber = !Number.isNaN(+userSecondNum);

    function number(){
        if(isNumber){
            const sixthP = document.createElement('p');
            const sixthText = document.createTextNode(`${userSecondNum} is a number!`);
            sixthP.appendChild(sixthText);
            sixthDiv[0].appendChild(sixthP);
        }
        else{
            const sixthP = document.createElement('p');
            const sixthText = document.createTextNode(`${userSecondNum} is not a number!`);
            sixthP.appendChild(sixthText);
            sixthDiv[0].appendChild(sixthP);
        }
    }
    number();

});





/* Запишите в переменную случайное число (Math.random()), умножьте его на 100 и округлите. Получите второе число из окна prompt. Сравните и отобразите в модальном окне: первое число меньше второго или нет, а также оба значения. */

const seventhDiv = document.getElementsByClassName('seventhTask');
const seventhBtn = document.getElementsByClassName('seventhTaskButton');

seventhBtn[0].addEventListener('click', function(){
    const randomNum = Math.floor(Math.random() * 100);
    const myNum = prompt('Type a number');

    function number(){
        if(myNum < randomNum){
            const seventhP = document.createElement('p');
            const seventhText = document.createTextNode(`${myNum} is less than ${randomNum}!`);
            seventhP.appendChild(seventhText);
            seventhDiv[0].appendChild(seventhP);
        }
        else if(myNum > randomNum){
            const seventhP = document.createElement('p');
            const seventhText = document.createTextNode(`${myNum} is bigger than ${randomNum}!`);
            seventhP.appendChild(seventhText);
            seventhDiv[0].appendChild(seventhP);
        }
        else {
            const seventhP = document.createElement('p');
            const seventhText = document.createTextNode(`${myNum} is equal to ${randomNum}!`);
            seventhP.appendChild(seventhText);
            seventhDiv[0].appendChild(seventhP);
        }
    }
    number();

});





/* Создайте переменную str и запишите в нее из prompt такое предложение «Мне нравится изучать Front-end». Также создайте еще одну переменную и запишите в нее из prompt то, что вам нравится изучать. С помощью методов строки определите существует ли то что вам нравится изучать в исходной строке str. Также возьмите подстроку «Мне нравится изучать » из исходной переменной str сохраните ее в переменной. Создайте еще одну переменную result куда запишите результирующую строку объединяющую «Мне нравится изучать » и то что вам нравится изучать. Отобразите результат в модальном окне. */

const eighthDiv = document.getElementsByClassName('eighthTask');
const eighthBtn = document.getElementsByClassName('eighthTaskButton');

eighthBtn[0].addEventListener('click', function(){
    const str = prompt('What do you like to learn?', 'I like to learn Front-end');
    const str1 = prompt('What else do you like to learn?');
    const substring = str.includes('I like to learn');
    const result = `${str} and ${str1}`;

    alert(`${result}`);
});