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
    const btn = document.createElement('button');
    btn.textContent = 'Task 1';

    createDesc(`В переменную x записывается число, введенное пользователем в диалоговое окно. Проверить и вывести на экран, x – отрицательное число, положительное или ноль.`);

    btn.addEventListener('click', function(){
        const userNum = prompt('Type a number');
        let result = (userNum < 0) ? createNewP(`${userNum} is a negative number!`):
            (userNum > 0) ? createNewP(`${userNum} is a positive number!`):
            createNewP(`${userNum} is a zero!`);
        });
     task.appendChild(btn);
}



/* Создайте три переменные с любыми числовыми значениями. Используя условный оператор  и не используя логические, найдите минимальное число и отобразите на экране имя переменной и ее значение. */

const runSecondTask = () => {
    const btn = document.createElement('button');
    btn.textContent = 'Task 2';

    createDesc(`Создайте три переменные с любыми числовыми значениями. Используя условный оператор  и не используя логические, найдите минимальное число и отобразите на экране имя переменной и ее значение.`);

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
        /* let minNumName =  */
        createNewP(`${minNumName} with the value of ${minNum} is the smallest Number!`)
    });
     task.appendChild(btn);
}

func();


