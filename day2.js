//Global Variables
const challenge = '30 Days of JavaScript'; //1
const techUnicorns = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const word = 'You cannot end a sentence with because because because is a conjunction'
const challengeValue = '30 Days of';
const challengeBreak = 'JavaScript'
// Applications
console.log(challenge)//2
console.log(challenge.length)//3
console.log(challenge.toUpperCase())//4
console.log(challenge.toLowerCase())//5
console.log(challenge.substr(8, 13))//6 the first value (8)is where the slice will start from while the other value (13) is the length of the other part.
console.log(challenge.substring(8, 21))//6 The first value (8) is the start point of the splicing, while the second value (21) is the end point.
console.log(challenge.slice(3))//6
console.log(challenge.includes('Script'))//7
console.log(challenge.split(''))//8
console.log(challenge.split(' '))//9
console.log(techUnicorns.split(','))//10
console.log(challenge.replace('JavaScript', 'Python'))//11
console.log(challenge.replace('JavaScript', 'Python'))//12
console.log(challenge.charAt(15))//13
console.log(challenge.charCodeAt(11))//14
console.log(challenge.indexOf('a'))//15
console.log(challenge.lastIndexOf('a'))//16
console.log(word.indexOf('because'))//17
console.log(word.lastIndexOf('because'))//18
console.log(word.search('because'))//19
console.log(challenge.trim())//20
console.log(challenge.startsWith('30'))//21
console.log(challenge.endsWith('t'))//22
console.log(challenge.match('a')[0])//23 This returns an array that you can also manipulate using array methods.
console.log(challenge.concat(challenge, challengeBreak, challengeValue))//24
console.log(challenge.repeat(2))//25

/* **** Exercise 2  ****** */
//Global Variables
let programmingLang = 'Python';
const randomWord = 'Jargon';
const randomValues = Math.floor(Math.random() * 101);
const jargonSentence = 'I hope this course is not full of jargon'

console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
console.log("Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
console.log((Number('10') === 10))
console.log((Math.round(parseFloat('9.8'))) === 10)
console.log(programmingLang.includes('on'))
console.log(randomWord.includes('on'))
console.log(Math.floor(Math.random() * 101))
console.log((Math.floor(Math.random() * 51) + 50))
console.log(jargonSentence.includes('jargon'))
console.log(Math.floor(Math.random() * 256))
//10
/* I created a random number with the length of the string, then I used the charAt method to access all the individual strings in the string.*/
programmingLang = 'Javascript';
let index = Math.random() * programmingLang.length
console.log(programmingLang.charAt(index))

//11
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

//12
console.log(word.indexOf('because'))
console.log(word.lastIndexOf('because'))
console.log(word.substr(31, 23))

/* ***** Exercise Level 3  ***** */
const loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const sentenceCalc =  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

console.log(loveSentence.match(/Love/gi));
//3
console.log(word.replace(/[^\w\s]/g, ""))
console.log(word.match(/\w+/g))


//4
let value1 = sentenceCalc.split(' ')[2];
let value2 = sentenceCalc.split(' ')[8];
let value3 = sentenceCalc.split(' ')[12];

console.log(Number(value1)+ Number(value2)+Number(value3))















