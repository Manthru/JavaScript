/*
 

>---FUNDAMENTALS OF JAVASCRIPT 1-------<
 
// variable name conventions

let firstName = "Ramavath";
let first_name = "Manthru";
let FirstName = "Naik";

console.log(firstName);
console.log(first_name);
console.log(FirstName);

........................................



// Data Types

console.log(typeof("Manthru"));
console.log(typeof(123));
console.log(typeof(true));

let result;
console.log(typeof(result));

console.log(typeof(undefined));
console.log(typeof(null));

.........................................


// let, var & const used for variable declaration

var firstName = "Manthru";
firstName = "Ramavath";

console.log(firstName);

let secondName = "Naik";
secondName = "Manthru";
console.log(secondName);

const PI = 3.14;
console.log(PI);



myName = "Nageswar rao"; Extra case
console.log(myName);



// Operators in js 

// Arithmatic operator
const ageManthru = 40-21;
const yourAge = 39 + 12;
console.log(ageManthru,yourAge);

// Assignment  operator
let x = 10;
x += 2;
x -= 2;
x *= 2;
x %= 2;

// Uinary operator
x++;
x--;
++x;
--x; 

// Comparison operator
let myName = "Manthru";
let secondName = "Ramavath";
console.log(myName === secondName);
console.log(myName > secondName);
console.log(myName < secondName);
console.log(myName >= secondName);
console.log(myName <= secondName);
console.log(myName != secondName);
console.log(myName !== secondName);
console.log(myName == secondName);



// strings

const firstName = "Ramavath";
const middleName = "Manthru";
const lastName = "Naik";

const detalies = "My name is " + firstName + middleName + lastName;
console.log(detalies);


// template literals
const info = `my name is ${firstName},${middleName},${lastName}`;
console.log(info);




// if else statements

const age = 17;
const isOldEnough = age >= 18;

if(isOldEnough){
    console.log('your eligible for driving license');

}else{
    const yearLeft = 18-age;
    console.log(`your not eligible for driving license ${yearLeft}`);
}

 ....................................... 


let century;
const birthYear = 2024;
if(birthYear <=2000){
    century = 20;
}
else{
    century = 21;
}

console.log(century);





// type converstion
const birthYear = '2004';
console.log(Number(birthYear),birthYear);
console.log(birthYear + 12);

let newYear = 23;
console.log(String(newYear));


// Type coercion
let data = console.log('2' +2);
console.log(typeof data);



// 5 falsy values === 0, ' ', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean('manthru'));
console.log(Boolean({}));

let number = 'manthru';
if(number) {
    console.log("You can bet on it!");
}else {
    console.log("You can't bet on it!");
}



// Equality operator (== vs ===)

let age = '18';
if(age === 18) {
    console.log("your eligible to vote");
}

if(age == 18) {
    console.log("your not eligible to vote");
}



const favourite = Number(prompt("What's is your favourite number!"));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23) {
    console.log('Hello guys!');
}



// Boolean logic (AND, OR, !)
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
const isTried = false;

console.log(hasDriversLicense || hasGoodVision && isTried);


///switch statments

const day = 'saturday';

switch(day) {
    case 'monday':
        console.log("To day is monday!");
        break;
    case 'tuesday':
        console.log("Today is tuesday!");
        break;
    case 'wednesday':
        console.log("Today is wednesday!");
        break;
    case 'thursday':
        console.log('TOday is thursday!');
        break;
    case 'friday':
        // console.log('Today is friday!');
        // break;
    case ('saturday'):
        console.log('Today is saturday!');
        break;
    case 'sunday':
        console.log('today is sunday!');
        break;
    default:
        console.log("Errow")
}



const age = 18;
age>=18 ? console.log('I like you!') :
console.log('I hate you!');

const drink = age>=18 ? 'wine' : 'water';
console.log(drink);


*/