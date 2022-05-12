function myFunc(greeting, ...names){
    for (let i = 0; i < names.length; i++) {
        console.log(`${greeting} names[i]`);
    }
}
myFunc('Hello', 'John', 'Mary');