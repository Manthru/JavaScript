

// >------FUNDAMENTALS OF JAVASCRIPT 2-------<

'use strict';
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I am eligible to drive!');

// >-------------------------!-----------------------------<

// Functions

// Creating a function
function looger() {
    console.log("Starting with functions!");
}
// Calling a function
looger();


function fruit(banana,mango) {
    const juice = `juice with ${banana}  banana and juice with ${mango} mango `;
    return juice;
}
const result = fruit(3,1);
console.log(result)

console.log(fruit(2,3));

// >---------------!-------------------<



// Fuction Declaration and  Expression

// fuction declaration
function ageCal1(birthYear) {
    return 2024-birthYear;
}
console.log(ageCal1(2004));


// function Expression
const ageCal2 = function (birthYear) {
    return 2024-birthYear;
}
const age2 = ageCal2(2004);
console.log(age2);


// Arrow function
const ageCal3 = birthYear => 2024 -birthYear;
const age3 = ageCal3(2004);
console.log(age3);

const qualifed = (age,userName) => {
    const IAS = 2050 - age;
    return (`${userName} become an IAS officer at the age of ${IAS}`);
}
console.log(qualifed(2004,'manthru'));



// function inside the function

'use stict';

function cuttingFruit(fruit) {
    return fruit*2;
}

function fruit(banana,mango) {
    const bananaPices = cuttingFruit(banana);
    const mangoPices = cuttingFruit(mango);
    const juice = `juice with ${bananaPices}  banana and juice with ${mangoPices} mango `;
    return juice;
}

console.log(fruit(2,3));



// Arrays

const friends = ['Manthru', 'Srinu', 'Pawan'];


const birthYear = new Array(2004,2005,2006);

birthYear[1] = 'Hello';
console.log(birthYear);

friends[2] = 'Chandra';
console.log(friends);

// >------------!--------------------<



// Array Operations

// Add elements
const friends = ['Manthru', 'charan', 'Srinu'];
const newLength = friends.push('Pavan'); //add elements at the end of array
console.log(friends);
console.log(newLength);

friends.unshift('Balaji'); //add element at the starting position
console.log(friends);

friends.pop(); //remove the elemets at the end of array
console.log(friends);

friends.shift(); //remove element at starting postion of the array
console.log(friends);

console.log(friends.indexOf('Manthru'));

console.log(friends.includes('Manthru'));

if(friends.includes('Manthru')) {
    console.log('Yes it is there in the array!');
}




// Intro to Objects

const firstNum = [
    'Manthru',
    'Srinu',
    'Pavan',
    ['balu', 'Karthik', 'Dinesh']
];
console.log(firstNum);


const firstNumber = {
    firstName: 'Manthru',
    fristFrnd: 'Srinu',
    secondFrnd: 'Pavan',
    others: ['balu', 'Karthik', 'Dinesh']
};
   
console.log(firstNumber.firstName); //dot notation
console.log(firstNumber['firstName']);

const Extra = 'Name';
console.log(firstNumber['first' + Extra]);// bracket notation



const about = {
    Name: 'Manthru',
    class: 'btech',
    age: 19,
    skill: 'Web development',
    friends: ['srinu','pavan','balu']
};

 const result = prompt('What do you want to know about me? choose any one Name,class,age,skill');

 console.log(about[result]);

    if(about[result]) {
    console.log(about[result]);
    }else {
    console.log('Wrong request');
    }

console.log(`${about['Name']} has ${about.friends.length} friends, and his best friend is called ${about.friends[0]}`);



// Object Methods

const about = {
    Name: 'Manthru',
    class: 'btech',
    bithYear: 2004 ,
    skill: 'Web development',
    friends: ['srinu','pavan','balu'],
    hasDriversLicense: true,

    calcAge: function(bithYear) {
        return 2024 - bithYear;
    }

    calcAge: function() {
        return 2024 - this.bithYear;
    }

    calcAge: function() {
        this.age = 2024 - this.bithYear;
        return this.age;
    }
   
};
console.log(`${about.Name} is a ${about.calcAge()}-year old teacher,and he has a  ${about.hasDriversLicense}`)




// Loop's in JAvaScript

// for(let i =1;i<=5;i++){
//     console.log('Hello Manthru')
// }

const about = [
    'Manthru',
    'Ramavath',
    2024-2004,
    'student',
    ['srinu', 'pavan', 'balu'],
    true
];

const type = [];

for(let i = 0; i<=about.length-1;i++) {
    console.log(about[i], typeof about[i]);

    // filling a empty array
    // type[i] = typeof about[i];

    type.push(typeof about[i]);
}
console.log(type);


// continue and break

for(let i = 0; i<=about.length-1;i++) {

    if(typeof about[i] !== 'string') break;
    console.log(about[i], typeof about[i]);

    
}


// Looping Backward and Loops in Loop's

const about = [
    'Manthru',
    'Ramavath',
    2024-2004,
    'student',
    ['srinu', 'pavan', 'balu'],
    true
];

// for(let i=about.length-1; i >= 0; i--) {
//     console.log(about[i]);
// }




// for(let i=0; i<=5; i++) {
//     for(let j=1;j=i;j++){
//         console.log('*');
//     }
// }

let i=0;
while (i <= about.length-1){
    console.log(about[i]);
    i++;
}

let dice =Math.random() * 6 + 1;


while(dice !==6) {
    console.log(`You rolied a ${dice}`);
    dice = Math.random() * 6 + 1;
}




