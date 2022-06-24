/*Exercise Level 1*/
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

const firstName = 'Tobechukwu';
const lastName = 'Uka';
const country = 'Nigeria';
const city = 'Lagos';
const age = '20 years';
const isMarried = false;
const year = '2030';
console.log(typeof(isMarried)) // You can change the 'isMarried' variable to the other declared variables to get what the typeof is.

//2 Check if type of '10' is equal to 10

console.log('10'== 10);

//3 Check if parseInt('9.8') is equal to 10

console.log(parseInt('9.8') == 10)

//4  Boolean value is either true or false. // Write three JavaScript statement which provide truthy value. // Write three JavaScript statement which provide falsy value.

let truthy1 = 1;
let truthy2 = 'hi';
let truthy = true;

let falsy1 = '';
let falsy2 = undefined;
let falsey3 = null;

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3 //true
4 >= 3 //true
4 < 3 //false
4 <= 3 //false
4 == 4 //true
4 === 4//true
4 != 4//false
4 !== 4//false
4 != '4'//false
4 == '4'//true
4 === '4'//false
//Find the length of python and jargon and make a falsy comparison statement.
const pyth = 'python';
const jarg = 'jargon';
// alert(pyth.length !== jarg.length)


//6 Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
4 > 3 && 10 < 12 //true
4 > 3 && 10 > 12 //false
4 > 3 || 10 < 12 // true
4 > 3 || 10 > 12 // true
!(4 > 3) //false
!(4 < 3) //true
!(false) //true
!(4 > 3 && 10 < 12) //false
!(4 > 3 && 10 > 12) //true
!(4 === '4') //true

//There is no 'on' in both dragon and python
let drag = 'dragon';
console.log(!(pyth.endsWith('on') === drag.endsWith('on')));

// Use the Date object to do the following activities
let date = new Date()
date.getFullYear() // What is the year today? 
date.getMonth()// What is the month today as a number?
console.log(date.getDate())// What is the date today?
// let date = new Date()// What is the day today as a number?
date.getHours()// What is the hours now?
date.getMinutes()// What is the minutes now?
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(date.getTime())


/* Exercise Level 2 */
// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Solution
// alert('calculate an area of a triangle')
// let base = prompt('Enter base')
// let height = prompt('Enter height')
// let areaOfTriangle = (0.5 * base * height)
// alert(`Area of triangle is ${areaOfTriangle}`)

//2 Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// alert('calculate the Perimeter')
// let a = prompt('Enter side: a')
// let b = prompt('Enter side: b')
// let c = prompt('Enter side: c')
// let perimeter = (Number(a) + Number(b) + Number(c))
// alert(`The perimeter of the triangle is ${perimeter}`)

//3 Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// alert('calculate an area of a rectangle')
// let length = prompt('Enter length')
// let width = prompt('Enter width')
// let aOT = length * width
// alert(`The perimeter of the triangle is ${aOT}`)

// alert('calculate an perimeter of a rectangle')
// let length = prompt('Enter length')
// let width = prompt('Enter width')
// let pOT = 2*(Number(length) + Number(width));
// alert(`The perimeter of the triangle is ${pOT}`)

//4 Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// const pi = 3.14;
// alert('calculate an area of circle')
// let r = prompt('Enter radius')
// let aOC = pi * (r ** r);
// alert(`The area of circle is ${aOC}`)

//5 Calculate the slope, x-intercept and y-intercept of y = 2x -2
//From the equation y = mx + c it shows that the slope = 2

let m = 2

//6 Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

const x1 = 2;
const y1 = 2;
const x2 = 6;
const y2 = 10;

const yCord = y2-y1;
const xCord = x2-x1;
let slope = yCord / xCord;

// 7 Compare the slope of above two questions.
console.log(m === slope)







