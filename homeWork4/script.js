/* Напишите функцию max, которая сравнивает два числа и возвращает большее: */

function max(a, b){
    return a >= b ? a : b;
}
console.log(max(11, 5));




/* Напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них: */

function min(){
    const values = Object.values(arguments);
    min = values[0];
    for (i = 0; i < values.length; ++i) {
        if (values[i] < min) min = values[i];
    }
    console.log(min);
}
min(105, 101, 10, 111, 5);



/* Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями. Используя встроенные функции(методы) массивов:
*/

let users = [];

users[0] = {
    firstname: 'Oleksandra',
    lastname: 'Bilova',
    age: 25
}

users[1] = {
    firstname: 'Volodymyr',
    lastname: 'Bilov',
    age: 25
}

users[2] = {
    firstname: 'Yan',
    lastname: 'Bilov',
    age: 0
}

users[3] = {
    firstname: 'Yelena',
    lastname: 'Bagatchenko',
    age: 45
}

users[4] = {
    firstname: 'Liubov',
    lastname: 'Bagatchenko',
    age: 25
}

users[5] = {
    firstname: 'Volodymyr',
    lastname: 'Bagatchenko',
    age: 47
}

users[6] = {
    firstname: 'Vladyslav',
    lastname: 'Bilov',
    age: 47
}

users[7] = {
    firstname: 'Anastasiya',
    lastname: 'Bilova',
    age: 47
}

users[8] = {
    firstname: 'Olena',
    lastname: 'Bilova',
    age: 40
}

users[9] = {
    firstname: 'Polina',
    lastname: 'Mlynash',
    age: 71
}

/* Отфильтруйте пользователей младше 18 лет */

const under18 = users.filter(user => user.age < 18);
console.log(under18);

/* Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии */

users.forEach(function(user, index, users) {
    user.fullName = user.firstname+" "+user.lastname;
  });

console.log(users);

/* Сформируйте новый массив, который содержит только полное имя пользователей */
let fullNames = users.map(user => [user.fullName]);
console.log(fullNames);



/* Напишите функцию аналог метода массива shift. Функция удаляет из переданного в параметре массива первый элемент. */

function deleteFirstElement() {
    const values = Object.values(arguments);
    const filteredElements = values.slice(0, 0).concat(values.slice(0 + 1, values.length));
    console.log(filteredElements);
}
deleteFirstElement(1, 2, 3);




/* Напишите функцию аналог метода массива push. Функция добавляет в конец переданного в параметре массив произвольное количество элементов. */

// Variant 1
function addElements() {
    const givenValues = Object.values(arguments);
    getNewElements(4, 5);
    function getNewElements() {
        const newValues = Object.values(arguments);
        const res = givenValues.concat(newValues);
        console.log(res);
    }
}
addElements(1, 2, 3);

// Variant 2
let vals = [1, 2];
function addEls (vals, ...arguments) {
	for (var i = 0; i < arguments.length; i++) {
		vals[vals.length] = arguments[i];
	}
	return vals;
}
console.log(addEls(vals, 3, 4, 5));




/* Напишите функцию аналог метода Object.assign(). Первый параметр функции - целевой объект, поля которого будут изменены или расширены. Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект. */

let newUser = {
    firstname: 'John',
    lastname: 'Doe',
    age: 25
}

let newChars = [];

newChars[0] = {
    eyesColor : 'blue'
}

newChars[1] = {
    hairColor : 'brown',
    height : '170'
}

const func = (obj, arr) => {
    const newObj = {...obj}
    arr.forEach((obj) => {
    
    for (const key in obj) {
        newObj[key] = obj[key]
    }
    
    })
    return newObj;
}
console.log(func(newUser, newChars));


/* Напишите функцию setComment с параметрами: date, message, author. Дата и текст сообщения - обязательные параметры, если какой-то из них или оба отсутствуют, то выполнение функции должно обрываться, а пользователю выдаваться предупреждение (alert) о том, что данные переданы некорректно. Параметр author - опциональный, но должна происходить проверка: если параметр не передан, то вместо него подставляется значение ‘Anonymous’. Функция распечатывает в консоле текст в формате:  				<имя_автора>, <дата> 				<текст_сообщения></текст_сообщения> */

const userDate = prompt('Type a date!');
const userMessage = prompt('Type a message!');
const userAuthor = prompt('Type the author`s name!');

function setComment (date, message, author) {
	if(date && message){
        if(author) {
            console.log(`${author},${date} \n ${message}`);
        }
        else {
           author = 'Anonymous';
           console.log(`${author},${date} \n ${message}`);
        }
    }
    else {
		return alert('The data is false!');
	}
}
setComment(userDate, userMessage, userAuthor);