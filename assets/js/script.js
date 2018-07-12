/*Alert function*/

//alert("Hello world! I'm ready for Javascript programming.");

/*Cconsole.log function*/

// console.log("Hello world! I'm ready for Javascript programming.")

// //ES5 
// // const dateOfBirth = 'June 19, 1986'

// var num1 = 5;
// var num2 = 8;

// console.log(num1 + num2)

// var firstName = 'Juan';
// var lastName = 'Dela Cruz';


// console.log(firstName + " " + lastName);

// console.log(firstName + num1);

// // console.log(dateOfBirth)


// let evenNumbersList = [];
// evenNumbersList = [0,2,4,6,8,10];

// let vowelLettersList = ['a','b','c','d'];

// console.log(evenNumbersList[0])

let userDetails = ["Jason Dela Torre", "August 24 1992", "Mechanical Engineer"]

let user = {
	name:"Jason Dela Torre",
	dateOfBirth: "August 24, 1992",
	currentJob: "Mechanical Engineer"
}

console.log(userDetails[1]);

console.log(user.name);

let lebron = ["LeBron James", 23, "Cleveland Cavaliers"];
let irving = ["Kyrie Irving", 23, "Boston Celtics"];
let cousins = ["DeMarcus Cousins", 0, "New Orleans Pelicans"];
let davis = ["Anthony Davis", 23, "New Orleans Pelicans"];
let durant = ["Kevin Durant", 35, "Golden State Warriors"];

let teamLebron = [lebron, irving, cousins, davis, durant];
console.log(teamLebron)

console.log(teamLebron[0][0])
console.log(teamLebron[2][1])
console.log(teamLebron[4][2])

// for(let i=0; i<teamLebron.length; i++) {
// 	for(let j=0; j<teamLebron[i].length; j++) {
// 		console.log(teamLebron[i][j]);
// 	}
// }


teamLebron[0][2] = 'Los Angeles Lakers';
console.log(teamLebron);

teamLebron[2][2] = "Golden State Warriors";
teamLebron[3][1] = 0;

console.log(teamLebron);

let aldridge = ["LaMarcus aldridge", 12, "San Antonio Spurs"];

teamLebron.push(aldridge);

console.log(teamLebron);


lebron.push("Team Lebron");
irving.push("Team Lebron");
cousins.push("Team Lebron");
davis.push("Team Lebron");
durant.push("Team Lebron");

console.log(teamLebron);

// for(let i=0; i<teamLebron.length; i++) {
// 	teamLebron[i].push("Team Lebron")
// }
// console.log(teamLebron);


// for(let i in teamLebron) {
// 	console.log(teamLebron[i].push("Team Lebron"));
// }

// teamLebron.forEach(function(i){console.log(i.push("Team Lebron"))})

teamLebron.pop();

console.log(teamLebron);

teamLebron.shift();
console.log(teamLebron);

teamLebron.unshift(aldridge);
console.log(teamLebron)


// Shorthand arithmetic expressions
let a = 1;
// a = a + 2
a += 2;
console.log(a);

let b = 2;
// b = b * 3;
b *= 3;
console.log(b);

let c = 5;
// c = c - 3;
c -= 3;
console.log(c);

let d = 12;
// d = d / 4;
d /= 4;
console.log(d);

let e = 16;
// e = e % 5;
e %= 5
console.log(e);

// Increment / Decrement Expressions
let f = 8;
// f = f + 1;
// ++f;
f++;
console.log(f);

let g = 9;
// g = g - 1;
// --g;
g--;
console.log(g);


// Comparison Operators
// loose equality (value) ==
// strict equality (value & data) ===
// loose inequality (value) !=
// strict inequality (value) !==
// greater than >
// less than <
// greater than or equal to >=
// less than or equal to <=

let h = 32;
let numberString = 45 + "";
h = h + 1;

console.log(h);

numberString = Number(numberString) + 1;
console.log(numberString);

let numberString2 = "32.21"
let i = numberString2 + 1;
console.log(i * 3)

let j = 9;

if (j > 5) {
	console.log(j + " is greater than 5")
}


let size = "XS";

switch(size) {
	case "XS":
		console.log("extra small"); 
		break;
	case "M":
		console.log("medium"); 
		break;
	case "L":
		console.log("large"); 
		break;
	case "XL":
		console.log("extra large"); 
		break;
	default:
		console.log("none");
		break;
}

let counter = 1;

while (counter <= 10) {
	console.log(counter);
	counter = counter + 1;
}

counter = 10;

while (counter >= 1) {
	console.log(counter);
	counter = counter - 1;
}



