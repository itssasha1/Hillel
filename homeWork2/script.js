const task = document.querySelector('.task');
const taskButton = document.querySelector('.taskButton');
const prevBtn = document.querySelector('.previousButton');
const nextBtn = document.querySelector('.nextButton');

let currentTask = 1;

const moveToNextTask = () => {
    currentTask = currentTask + 1;
    allTasks(currentTask);

   /*  if (currentTask == 11) {
        currentTask = 0;
    } */
}

const moveToPrevTask = () => {
    currentTask = currentTask - 1;
    allTasks(currentTask);
}

prevBtn.addEventListener('click', moveToPrevTask);
nextBtn.addEventListener('click', moveToNextTask);

const allTasks = (taskNum) => {
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
        case 10:
            runTenthTask();
            break;
        case 11:
            runEleventhTask();
            break;
        case 12:
            runTwelvthTask();
            break;
        case 13:
            runThirteenthTask();
            break;
        case 14:
            runFourteenthTask();
            break;
        case 15:
            runFifteenthTask();
            break;
        case 16:
            runSixteenthTask();
            break;
        case 17:
            runSeventeenthTask();
            break;
        case 18:
            runEighteenthTask();
            break;
        case 19:
            runNineteenthTask();
            break;
        case 20:
            runTwentiethTask();
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

        let greet = (userName == undefined) ? createNewP('Hello John Doe!'):
        (userName == "") ? createNewP('Hello John Doe!'):
        createNewP(`Hello ${userName}!`);
    });
}



/* Создайте две переменные: greeting и lang. Переменная greeting – пустая строка. Переменная lang может принимать три значения: ‘ua’, 'en', 'de' (например, из prompt). Если она имеет значение ‘ua’, то в переменную greeting запишите приветствие на украинском, если имеет значение 'en' – то на английском, если 'de' – на немецком. Выведите на экран приветствие в зависимости от значения переменной lang. Решите задачу через if-else и через switch-case. */

//if-else

const runTenthTask = () => {

    createDesc(`Создайте две переменные: greeting и lang. Переменная greeting – пустая строка. Переменная lang может принимать три значения: ‘ua’, 'en', 'de' (например, из prompt). Если она имеет значение ‘ua’, то в переменную greeting запишите приветствие на украинском, если имеет значение 'en' – то на английском, если 'de' – на немецком. Выведите на экран приветствие в зависимости от значения переменной lang. Решите задачу через if-else и через switch-case.`);

    createDesc(`if-else`);

    const btn = document.createElement('button');
    btn.textContent = 'Task 10 if-else';
    task.appendChild(btn);

    btn.addEventListener('click', function(){
        let greeting = "";
        let lang = prompt('Which language do you speak? ua, en, or de?');

        if (lang == "ua"){
            createNewP(greeting = "Доброго дня!");
        }
        else if (lang == "en"){
            createNewP(greeting = "Hello!");
        }
        else if (lang == "de"){
            createNewP(greeting = "Guten Tag!");
        }
        else {
            createNewP(greeting = "Sorry, I don`t speak your language!");
        }
    });
}

//switch case

const runEleventhTask = () => {

    createDesc(`Создайте две переменные: greeting и lang. Переменная greeting – пустая строка. Переменная lang может принимать три значения: ‘ua’, 'en', 'de' (например, из prompt). Если она имеет значение ‘ua’, то в переменную greeting запишите приветствие на украинском, если имеет значение 'en' – то на английском, если 'de' – на немецком. Выведите на экран приветствие в зависимости от значения переменной lang. Решите задачу через if-else и через switch-case.`);

    createDesc(`switch-case`);

    const btn = document.createElement('button');
    btn.textContent = 'Task 10 switch-case';
    task.appendChild(btn);

    btn.addEventListener('click', function(){
        let greeting = "";
        let lang = prompt('Which language do you speak? ua, en, or de?');

            switch(lang) {
                case 'ua':
                    createNewP(greeting = "Доброго дня!");
                    break;
                case 'en':
                    createNewP(greeting = "Hello!");
                    break;
                case 'de':
                    createNewP(greeting = "Guten Tag!");
                    break;
                default:
                    createNewP(greeting = "Sorry, I don`t speak your language!");
                    break;

            }
    });
}




//Циклы

/* Сформируйте строку вида ".#.#.#.#.#." с помощью цикла for. */

const runTwelvthTask = () => {

    createDesc(`Сформируйте строку вида ".#.#.#.#.#." с помощью цикла for.`);

    const btn = document.createElement('button');
    btn.textContent = 'Task 11';
    task.appendChild(btn);

    btn.addEventListener('click', function(){
        let newString = '.';

        for (let i = 0; newString.length < 11; i++) {
            newString = newString + '#.';
        }
        createNewP(newString);
    });
}



/* Используя любой цикл, напишите программу, которая в консоли выводит текстовое поздравление. Программа поздравляет того, чье имя определяется в переменной username:
Happy birthday to you
Happy birthday to you
Happy birthday dear {{username}}
Happy birthday to you */

const runThirteenthTask = () => {

    createDesc(`Используя любой цикл, напишите программу, которая в консоли выводит текстовое поздравление. Программа поздравляет того, чье имя определяется в переменной username:
    Happy birthday to you
    Happy birthday to you
    Happy birthday dear {{username}}
    Happy birthday to you`);

    const btn = document.createElement('button');
    btn.textContent = 'Task 12';
    task.appendChild(btn);

    btn.addEventListener('click', function(){
        const congratsUserName = prompt('What`s your name?');
        const congrats = ['Happy birthday to you', 'Happy birthday to you', `Happy birthday dear ${congratsUserName}`, 'Happy birthday to you'];

        for (let i = 0; i < congrats.length; i++) {
            createNewP(congrats[i]);
        }
    });
}



/* Напишите цикл с confirm, который продолжается при нажатии на Отмена и прерывается при нажатии на Ok. */

const runFourteenthTask = () => {

    createDesc(`Напишите цикл с confirm, который продолжается при нажатии на Отмена и прерывается при нажатии на Ok.`);

    
    const btn = document.createElement('button');
    btn.textContent = 'Task 13';
    task.appendChild(btn);

    btn.addEventListener('click', function(){
        do {
            var contLoop = confirm('Continue?');
        } while(contLoop == false);
    });
}



/* В окно prompt вводится число. Напишите цикл, в котором суммируются все нечетные числа до диапазона, введенного пользователем. Результат отобразите в окне alert. */

const runFifteenthTask = () => {

    createDesc(`В окно prompt вводится число. Напишите цикл, в котором суммируются все нечетные числа до диапазона, введенного пользователем. Результат отобразите в окне alert.`);

    
    const btn = document.createElement('button');
    btn.textContent = 'Task 14';
    task.appendChild(btn);

    btn.addEventListener('click', function(){
        const userN = prompt('Type a number!');
        let allNums = [];

        for (let i = 1; i <= userN; i++) {
            (i % 2) && allNums.push(i);
        }
        const res = allNums.reduce((a,b) => a + b, 0);
        createNewP(res);

    });
}



/* Напишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.9. Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла. */

const runSixteenthTask = () => {

    createDesc(`Напишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.9. Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла.`);

    
    const btn = document.createElement('button');
    btn.textContent = 'Task 15';
    task.appendChild(btn);

    btn.addEventListener('click', function(){

        for(let i = 0; true; i++) if(Math.random() > 0.9){
                alert(++i);
                break;
            } 
            

    });
}



/* Используя вложенные циклы, распечатайте в консоли значения таблицы умножения: 1х1=1, 1x2=2 ... 2x1=2, 2x2=4...  */

const runSeventeenthTask = () => {

    createDesc(`Используя вложенные циклы, распечатайте в консоли значения таблицы умножения: 1х1=1, 1x2=2 ... 2x1=2, 2x2=4...`);

    
    const btn = document.createElement('button');
    btn.textContent = 'Task 16';
    task.appendChild(btn);

    btn.addEventListener('click', function(){

        for (let i = 1; i < 11; i++){
            for (let a = 1; a < 11; a++){
                createNewP(i + 'x' + a + '=' + `${i * a}`);
            }
            
        }
    });
}



/* Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, пока не будет нажата Отмена. После выхода из цикла распечатайте количество введенных чисел, их общую сумму */

const runEighteenthTask = () => {

    createDesc(`Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, пока не будет нажата Отмена. После выхода из цикла распечатайте количество введенных чисел, их общую сумму`);

    
    const btn = document.createElement('button');
    btn.textContent = 'Task 17';
    task.appendChild(btn);

    btn.addEventListener('click', function(){
        let i = 0;
        let sum = 0;
        let userNumb;
    
        while ((userNumb = prompt("Введите число")) !== "0" && userNumb != null) {
        ++i;
        sum += +userNumb;
        }
        createNewP("Чисел введено: " + i + "\nСумма чисел: " + sum);
    });
}



/* Напишите проверку пароля, введенного пользователем (заведомо определите пароль). Если введенный пароль правильный, то программа выдает сообщение “Вы успешно авторизованы”. Если пароль неправильный, программа снова выдает запрос пароля – до тех пор, пока пользователь не введет правильный пароль или не нажмет Отмена. В случае отмены авторизации, выдать окно подтверждения с текстом: “Вы уверены, что хотите отменить авторизацию?”. Если ответ утвердительный, тогда выдать сообщение “Вы отменили авторизацию”, если ответ отрицательный, тогда снова выдать запрос пароля */

const runNineteenthTask = () => {

    createDesc(`Напишите проверку пароля, введенного пользователем (заведомо определите пароль). Если введенный пароль правильный, то программа выдает сообщение “Вы успешно авторизованы”. Если пароль неправильный, программа снова выдает запрос пароля – до тех пор, пока пользователь не введет правильный пароль или не нажмет Отмена. В случае отмены авторизации, выдать окно подтверждения с текстом: “Вы уверены, что хотите отменить авторизацию?”. Если ответ утвердительный, тогда выдать сообщение “Вы отменили авторизацию”, если ответ отрицательный, тогда снова выдать запрос пароля`);

    
    const btn = document.createElement('button');
    btn.textContent = 'Task 18';
    task.appendChild(btn);

    function confirmCancel() {
        return confirm("Are you sure you want to cancel the authorization?");
    }

    btn.addEventListener('click', function(){

        const pass = "123";
        let putPass = "";
        let confirm = false;

        do {
            putPass = prompt('Enter your password!');
            if (!putPass) {
                confirm = confirmCancel();
                if (confirm) {
                    break;
                }
            }
        } while(putPass !== pass);
        alert(confirm ? 'Authorization is canceled.' : 'You are successfully logged in!');
    });
}



/* Напишите цикл от 1 до 50, в котором будет выводиться поочередно числа от 1 до 50, но есть условия:

- если число делится на 3 без остатка, то выводить не это число, а слово «Fizz»;
- если число делится на 5 без остатка, то выводить не это число, а слово «Buzz»;
- если число делится и на 3 и на 5 без остатка, то выводить не это число, а слово «FizzBuzz»; 
 */

const runTwentiethTask = () => {

    createDesc(`Напишите цикл от 1 до 50, в котором будет выводиться поочередно числа от 1 до 50, но есть условия:

    - если число делится на 3 без остатка, то выводить не это число, а слово «Fizz»;
    - если число делится на 5 без остатка, то выводить не это число, а слово «Buzz»;
    - если число делится и на 3 и на 5 без остатка, то выводить не это число, а слово «FizzBuzz»;`);

    
    const btn = document.createElement('button');
    btn.textContent = 'Task 19';
    task.appendChild(btn);

    function confirmCancel() {
        return confirm("Are you sure you want to cancel the authorization?");
    }

    btn.addEventListener('click', function(){

        for (let i = 1; i <= 50; i++) {
            if (!(i % 3) && !(i % 5)){
                createNewP(i + ' FizzBuzz');
            }
            else if (!(i % 3)){
                createNewP(i + ' Fizz');
            }
            else if (!(i % 5)){
                createNewP(i + ' Buzz');
            }
            else {
                createNewP(i);
            }
        }
    });
}



allTasks();
