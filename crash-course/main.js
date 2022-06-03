//let, const
let name = 'Arnold'
const age = 30;
const rating = 4.5;
const isCool = false;
const x = null;
const y = undefined;
//age = 31

console.log(age);
console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);

const hello = `I'm ${name} and about to turn ${age}`

console.log(hello) 
console.log(`That was ${rating} `)

console.log(hello.length)
//properties don't have brackets, methods do - functions associated with an object

const s = 'Hello World!';

console.log(s.substring(0,5).toUpperCase())


console.log(s.split(' '))

const numbers = new Array(1,2,3,4,5)

numbers.push = 19
numbers.unshift = 16
numbers.pop();
console.log(numbers)
console.log(numbers.indexOf(16));

const person = {
    firstName: 'Arnold',
    lastName: 'Mutungi',
    age: 30,
    hobbies: ['music', 'movies', 'sport'],
    address:  {
        street: '4 Severn Way',
        city: 'London',
        country: 'UK'
    }

}

console.log(person.firstName, person.address.city);
console.log(person.hobbies[1]);

const {firstName, lastName} = person;
console.log(firstName)
//ternary syntax - condition ? exprIfTrue : exprIfFalse
 
person.email = "abmutungi@gmail.com"

// alert(person.email)

const todos = [
    {
        id: 1,
        text: 'Learn Go',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Learn JavaScript',
        isCompleted: false
    },
    {
        id: 3,
        text: 'Learn Rust',
        isCompleted: false
    }
];

console.log(todos[2].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON)

// For
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

// While
let i = 0 
while(i < 10){
    console.log(`while loop number: ${i}`);
    i++;
}

for(let todo of todos){
    console.log(todo.text);
}


// forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText = todos.map(function(todo){
    return todo.text;
});


const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})


console.log(todoText)
console.log(todoCompleted)

const a = '20';

if (a == 10) {// === would match the data types too
    console.log('a is 10');
} else if (a > 10) {
    console.log('a is greater than 10')
} else {
    console.log('a is less than 10')
}