const task = document.querySelector('.task');
const taskButton = document.querySelector('.taskButton');
const prevBtn = document.querySelector('.previousButton');
const nextBtn = document.querySelector('.nextButton');

let currentTask = 1;

const moveToNextTask = () => {
    currentTask = currentTask + 1;
    func(currentTask);
}

const moveToPrevTask = () => {
    currentTask = currentTask - 1;
    func(currentTask);
}

prevBtn.addEventListener('click', moveToPrevTask);
nextBtn.addEventListener('click', moveToNextTask);

const func = (taskNum) => {
    task.innerHTML = '';
    switch(taskNum) {
        case 1:
            runFirstTask();
            break;
        case 2:
            runSecondTask();
            break;
        case 3:
            runThirdTask();
            break;
        case 4:
            runFourthTask();
            break;
        case 5:
            runFifthTask();
            break;
        case 6:
            runSixthTask();
            break;
        case 7:
            runSeventhTask();
            break;
        case 8:
            runEighthTask();
            break;
        case 9:
            runNinthTask();
            break;
        default:
            runFirstTask();
    }
}

const createNewP = (text) => {
    const taskP = document.createElement('p');
    const taskText = document.createTextNode(text);
    taskP.appendChild(taskText);
    task.appendChild(taskP);
}


const createDesc = (text) => {
    const desc = document.createElement('h2');
    const descText = document.createTextNode(text);
    desc.appendChild(descText);
    task.appendChild(desc);
}





//Условные и логические операторы



/* В переменную x записывается число, введенное пользователем в диалоговое окно. Проверить и вывести на экран, x – отрицательное число, положительное или ноль. */

const runFirstTask = () => {

    createDesc(`В переменную x записывается число, введенное пользователем в диалоговое окно. Проверить и вывести на экран, x – отрицательное число, положительное или ноль.`);

    const btn = document.createElement('button');
    btn.textContent = 'Task 1';
    task.appendChild(btn);

    btn.addEventListener('click', function(){
        const userNum = prompt('Type a number');
        let result = (userNum < 0) ? createNewP(`${userNum} is a negative number!`):
            (userNum > 0) ? createNewP(`${userNum} is a positive number!`):
            createNewP(`${userNum} is a zero!`);
        });
}



/* Создайте три переменные с любыми числовыми значениями. Используя условный оператор  и не используя логические, найдите минимальное число и отобразите на экране имя переменной и ее значение. */

const runSecondTask = () => {

    createDesc(`Создайте три переменные с любыми числовыми значениями. Используя условный оператор  и не используя логические, найдите минимальное число и отобразите на экране имя переменной и ее значение.`);

    const btn = document.createElement('button');
    btn.textContent = 'Task 2';
    task.appendChild(btn);

    btn.addEventListener('click', function(){
        const num1 = prompt('Type a number!');
        const num2 = prompt('Type another number!');
        const num3 = prompt('Type the last one number!');
        let minNum = (num1 < num2) ?
            (num1 < num3 ? num1 : num3) :
            (num2 < num3 ? num2 : num3);
        let minNumName = (minNum == num1) ? Object.keys({num1}):
        (minNum == num2) ? Object.keys({num2}): 
        Object.keys({num3});; 
        createNewP(`${minNumName} with the value of ${minNum} is the smallest Number!`);
    });
}



/* У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt. В зависимости от общей суммы ваших сбережений вы можете полететь на Майорку или выпить пива. С помощью условного оператора определите ваши возможности и отобразите на экране в alert. */

const runThirdTask = () => {

    createDesc(`У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt. В зависимости от общей суммы ваших сбережений вы можете полететь на Майорку или выпить пива. С помощью условного оператора определите ваши возможности и отобразите на экране в alert.`);

    const btn = document.createElement('button');
    btn.textContent = 'Task 3';
    task.appendChild(btn);

    btn.addEventListener('click', function(){
        const myMoney = prompt('How much money in $ do you have?');
        const myFriendsMoney = prompt('How much money in $ does your friend have?');
        const moneySum = +myMoney + +myFriendsMoney;
        console.log(moneySum);

        let sumResult = (moneySum < 100) ? alert('You and your friend can afford beer'):
        alert('You and your friend can afford to fly to Mallorca!');
    });
}



/* В переменную age запишите возраст человека. Если значение больше или равно 20 и меньше 27, в alert выводится “Вислати повiстку”. */

const runFourthTask = () => {

    createDesc(`В переменную age запишите возраст человека. Если значение больше или равно 20 и меньше 27, в alert выводится “Вислати повiстку”.`);

    const btn = document.createElement('button');
    btn.textContent = 'Task 4';
    task.appendChild(btn);

    btn.addEventListener('click', function(){
        const age = prompt('How old are you?');

        let milAge = (age >= 20 && age < 27) ? alert('Вислати повiстку'):
        alert('Не висилати');
    });
}



/* Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255. Какая маршрутка приехала – определяется в prompt. Если ваша, то вы едете домой, в противном случае – ожидаете. */

const runFifthTask = () => {

    createDesc(`Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255. Какая маршрутка приехала – определяется в prompt. Если ваша, то вы едете домой, в противном случае – ожидаете.`);

    const btn = document.createElement('button');
    btn.textContent = 'Task 5';
    task.appendChild(btn);

    btn.addEventListener('click', function(){
        const busNum = prompt('Which bus is it?', '225');

        let busResult = (busNum == 7) ? createNewP(`${busNum} is your bus!`):
        (busNum == 255) ? createNewP(`${busNum} is your bus!`):
        (busNum == 225) ? createNewP(`${busNum} is your bus!`):
        createNewP(`${busNum} is not your bus! Please wait!`);
    });
}



/* В переменную day записан текущий день недели. Если это не суббота и не воскресенье, выведите в alert сообщение о необходимости идти на работу. */

const runSixthTask = () => {

    createDesc(`В переменную day записан текущий день недели. Если это не суббота и не воскресенье, выведите в alert сообщение о необходимости идти на работу.`);

    const btn = document.createElement('button');
    btn.textContent = 'Task 6';
    task.appendChild(btn);

    btn.addEventListener('click', function(){
        const date = new Date();
        let today = date.getDay();

        let workDay = (today == 6 && today == 7) ? alert('You can have a rest'):
        alert('You need to go to work');
    });
}



/* Запросите из prompt переменные x и y значения от -20 до 20. Если переменная x равна или меньше 1, а переменная y больше или равна 3 или меньше 0, то выведите сумму этих переменных, иначе выведите 'Неверно!'. */

const runSeventhTask = () => {

    createDesc(`Запросите из prompt переменные x и y значения от -20 до 20. Если переменная x равна или меньше 1, а переменная y больше или равна 3 или меньше 0, то выведите сумму этих переменных, иначе выведите 'Неверно!'.`);

    const btn = document.createElement('button');
    btn.textContent = 'Task 7';
    task.appendChild(btn);

    btn.addEventListener('click', function(){
        const numX = prompt('Type a number from -20 to 20');
        const numY = prompt('Type a number from =20 to 20');

        let numsXYResult = (numX <= 0 && numY >= 3 || numY < 0) ? createNewP(`${+numX + +numY}`):
        createNewP(`Wrong!`);
    });
}



/* Если переменная x больше 2 и меньше 11, или переменная y больше или равна 6 и меньше 14, то увеличьте x на 2, иначе прибавьте к x число 5. Выведите новое значение переменной на экран. */

const runEighthTask = () => {

    createDesc(`Если переменная x больше 2 и меньше 11, или переменная y больше или равна 6 и меньше 14, то увеличьте x на 2, иначе прибавьте к x число 5. Выведите новое значение переменной на экран.`);

    const btn = document.createElement('button');
    btn.textContent = 'Task 8';
    task.appendChild(btn);

    btn.addEventListener('click', function(){
        const numSecondX = prompt('Type a number from -20 to 20');
        const numSecondY = prompt('Type a number from =20 to 20');

        let numsNewXYResult = (numSecondX > 2 && numSecondX < 11 || numSecondY >= 6 && numSecondY < 14) ? createNewP(`${numSecondX * 2}`):
        createNewP(`${+numSecondX + 5}`);
    });
}



/* Получите из prompt значение для имени пользователя. Выведите на экран приветствие. Учтите вариант, что пользователь может не ввести ничего или нажать на Отмена. */

const runNinthTask = () => {

    createDesc(`Получите из prompt значение для имени пользователя. Выведите на экран приветствие. Учтите вариант, что пользователь может не ввести ничего или нажать на Отмена.`);

    const btn = document.createElement('button');
    btn.textContent = 'Task 9';
    task.appendChild(btn);

    btn.addEventListener('click', function(){
        const userName = prompt('What`s your name?');

        let greeting = (userName == undefined) ? createNewP('Hello John Doe!'):
        (userName == "") ? createNewP('Hello John Doe!'):
        createNewP(`Hello ${userName}!`);
    });
}

func();
