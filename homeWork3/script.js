/* Создайте смешанный массив, например [1, 2, 3, 'a', 'b', 'c', '4', '5', '6']. Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert. */

function getSum (array) {
    return array.reduce(
        (previousValue, currentValue) => +currentValue ? previousValue + +currentValue : previousValue, 0
    );
}

const newArr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
const sum = getSum(newArr);

alert(sum);


/* Создайте массив со значениями: 'AngularJS', 'jQuery'
    •	Добавьте в начало массива значение 'Backbone.js'
    •	Добавьте в конец массива значения 'ReactJS' и 'Vue.js'
    •	Добавьте в массив значение 'CommonJS' вторым элементом
    •	Найдите и удалите из массива значение 'jQuery', выведите его в alert со словами “Это здесь лишнее” */

const frameworks = ['AngularJS', 'jQuery'];
frameworks.unshift('Backbone.js');
frameworks.push('ReactJS');
frameworks.push('Vue.js');
frameworks.splice(1, 0, 'CommonJS');
const res = frameworks.filter((str) => {
    if(str === 'jQuery') {
        alert(`Это здесь лишнее ${str}`);
    } else {
        return str;
    }
});


/* Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’. Разбейте ее на массив слов, и переставьте слова в порядке ‘Как Жак звонарь однажды сломал головой фонарь’ с помощью любых методов массива (indexOf, splice ...). Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты. */

const str = 'Как однажды Жак звонарь сломал фонарь головой';
const arrayOfStr = str.split(' ');
arrayOfStr.splice(4, 0, 'однажды');
arrayOfStr.splice(1, 1);
arrayOfStr.splice(7, 0, 'фонарь');
arrayOfStr.splice(5, 1);
alert(`${str} \n${arrayOfStr.join(' ')}`);


/* Создайте ассоциативный массив person, описывающий персону, с произвольным количеством произвольных полей. С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран. Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt. */

const person = {
    userName: 'John',
    eyesColor: 'blue',
    height: '180'
}
let newPropValue = null;
const property = prompt('What do you want to know about the person?');
if(property in person) {
    alert(person[property]);
} else {
    newPropValue = prompt('This property does not exist. Add please a value of it:');
    person[property] = newPropValue;
}



/* Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt (например: brand, model, resolution, color...), не используя вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее. */

const gadget = {};
gadget.brand = prompt('Which brand?');
gadget.model = prompt('Which model?');
gadget.color = prompt('Which color?');
person.gadget = gadget;




/* Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат. */

const allNums = [];
for (let i = 0; i < 5; i++) {
    const userNum = prompt('Type a symbol!');
    allNums.push(userNum);
}
const result = allNums.reduce((previousValue, currentValue) => {
    const currentSum = currentValue ? getSum(currentValue.split()) : 0;
    return previousValue + currentSum;
}, 0)
alert(result);

