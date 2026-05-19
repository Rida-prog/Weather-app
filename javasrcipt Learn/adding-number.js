var sum = 10 + 0; // adding number in javascript is easy you can use the + operator to add numbers together. In this example, we are adding 10 and 0 together to get a sum of 10. You can also add more than two numbers together by chaining the + operator, like this: var total = 5 + 10 + 15; // total will be 30. You can also use the + operator to add variables together, like this: var a = 5; var b = 10; var c = a + b; // c will be 15. Just remember that when you use the + operator with strings, it will concatenate them instead of adding them together as numbers. For example: var greeting = "Hello, " + "world!"; // greeting will be "Hello, world!"
console.log(sum);

//substracting numbers
var difference = 10 - 3 // you can use the - operator to subtract numbers in javascript. In this example, we are subtracting 3 from 10 to get a difference of 7. You can also subtract more than two numbers together by chaining the - operator, like this: var totalDifference = 20 - 5 - 3; // totalDifference will be 12. You can also use the - operator to subtract variables together, like this: var x = 15; var y = 5; var z = x - y; // z will be 10. Just remember that when you use the - operator with strings, it will not work and will return NaN (Not a Number). For example: var result = "Hello" - "world"; // result will be NaN
console.log(difference);

//multiplying numbers
var product = 3 * 3 // you can use * to multipy numbers in javascript. in this example we are multiplying 3 by 3 to get a product of 9. you can also multiply more than two  numbers together  by chaining the * operator, like this: var totalProduct = 2 * 3 * 4; // totalProduct will be 24. you can also use the * operator to multiply variables together, like this: var m = 5; var n = 10; var o = m * n; // o will be 50. just remember that when you use * operator with strings, it will not work and will return NaN (not a number). for example: var result = "Hello" * "world"; // result will be NaN
console.log(product);

//dividing numbers
var quotient = 10 / 2 // you can use the / operator to divide numbers in javascript. in this example, we are dividing 10 by 2 to get a quotient of 5. you can also divide more than two numbers together by chaining the / operator, like this: var totalQuotient = 100 / 5 / 2; // totalQuotient will be 10. you can also use the / operator to divide variables together, like this: var p = 20; var q = 4; var r = p / q; // r will be 5. just remember that when you use the / operator with strings, it will not work and will return NaN (not a number). for example: var result = "Hello" / "world"; // result will be NaN
console.log(quotient);

//incrementing numbers
var myVar = 12;
myVar = myVar + 2;

//and we can also do this in shorter
var myVar = 12;
myVar++; // this will increment myVar by 1, so myVar will be 13 after this line of code is executed. you can also use the += operator to increment a variable by a specific value, like this: var myVar = 12; myVar += 2; // this will increment myVar by 2, so myVar will be 14 after this line of code is executed.

//decrementing numbers
var myVar = 13;
myVar = myVar - 1;

//and we can also do this in shorter
var myVar = 13;
myVar--; // this will decrement myVar by 1 so myVar will be 12 after this line of code is executed. you can also use the -= operator to decrement a variable by a specific value, like this: var myVar = 13; myVar -= 2; // this will decrement myVar by 2, so myVar will be 11 after this line of code.

//Decimal  numbers
var decimalSum = 0.1 + 0.2; // you can also add decimal numbers in javascript using the + operator. in this example, we are adding 0.1 and 0.2 together to get a decimal sum of 0.30000000000000004. this is because of the way that javascript handles floating-point numbers, which can lead to precision issues when working with decimals. however, you can use the toFixed() method to round the result to a specific number of decimal places, like this: var roundedSum = decimalSum.toFixed(2); // roundedSum will be "0.30" as a string.

//multiply Decimal numbers
var product = 2.0 * 2.5;

//divide Decimal numbers
var quotient = 5.0 / 2.0;

//Finding a remainder
var remainder;
remainder = 11 % 3;
//remainder would be 2

//compound assignment with augmented addition
var a = 3;
var b = 7;
var c = 6;

a = a + 3; // also can do
a += 3; // this will do the same thing as a = a + 3,

//compound assignment with the augmented subraction
var a = 11;

a = a - 6; // also can do shorter
a -= 6;

//compound assignment with augmented multiplication
var a = 7;

a = a * 3;
a *= 3; // do the same as we learn before in case of addition, subtraction

//compound assignment with  augmented division
var a = 43;

a = a / 2;
a /= 2; // so the same 

//Declare string variables
var myFirstName = "Rida";
var myLastName = "Fatima";

//Escaping literal quotes in strings
var myStr = "I am a \"double quoted\"string inside \"double quoted\"."; // you can use the backslash character (\) to escape literal quotes in strings. in this example, we are using the backslash to escape the double quotes around the words "double quoted" so that they are included in the string without causing a syntax error. when you run this code, myStr will be: I am a "double quoted" string inside "double quoted". you can also use single quotes to define a string that contains double quotes without needing to escape them, like this: var myStr = 'I am a "double quoted" string inside "double quoted".'; // this will work just fine without needing to escape the double quotes.

//Quoting strrings with single quotes
var myStr = 'I am a "double quoted" string inside "double quoted".'; // you can use single quotes to define a string that contains double quotes without needing to escape them. in this example, we are using single quotes to define the string, which allows us to include double quotes around the words "double quoted" without needing to escape them. when you run this code, myStr will be: I am a "double quoted" string inside "double quoted". you can also use double quotes to define a string that contains single quotes without needing to escape them, like this: var myStr = "It's a nice day!"; // this will work just fine without needing to escape the single quote in "It's".

//escape sequences in strings
/****
 * /' single quote 
 * \" double quote
 * \\ baclslash
 * \n newline
 * \r carriage return
 * \t tab
 * \b backspace
 * \f form feed 
 ****/
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // in this example, we are using several escape sequences to format the string. \n creates a new line, \t adds a tab space, and \\ adds a literal backslash character. when you run this code, myStr will be:
// FirstLine
//     \SecondLine
// ThirdLine

//concatenating strings with plus operator
var ourStr = "This is the start. " + "This is the end.";
//the result would be This is the start This is the end.

//concatenating strings with plus equals operator
var ourStr = "This is the first sentence. ";
ourStr += "This is the second sentence.";
// the result would be just like we did in numbers like: after using += operator ourStr will be added with the new string, so ourStr will be "This is the first sentence. This is the second sentence."

//constructing strings with variables
var ourName = "Rida";
var ourStr = "Hello, our name is " + ourName + ", how are you?"; 
console.log(ourStr);

//Appending variables to strings 
var anAdjective = "awesome!";
var ourStr = "She is ";
ourStr += anAdjective; 
// this will append the value of anAdjective to the end of ourStr so that ourStr will be"She is awesome!" 

//find the length of a string
var lastNameLength = 0;
var lastName = "Rida";
lastNameLength = lastName.length;

console.log(lastNameLength);

//braket notation to find the first character in a string 
var firstLletterOfFirstName = "";
var firstName = "Rida";
firstLletterOfFirstName = firstName[0];
// this will give us the first character of the string (Rida) which is "R"
console.log(firstLletterOfFirstName);

//string immutability
var str = "jello world";
str[0] = "H"; // this will not change the string  because strings in javascript are immutable, which means that once a string is created, ut cannot be changed indiviually But..........

str = "Hello world"; // we can reassgin a new string to the same variable

//bracket notation to find the nth character in a string
var thirdLetterOfFirstName = "";
var firstName = "Rida";
thirdLetterOfFirstName = firstName[2]; // this will give us the third character of the string (Rida) which is "d"
console.log(thirdLetterOfFirstName);

//bracket notation to find the last character in a string
var lastLetterOfFirstName = "";
var firstName = "Rida";
lastLetterOfFirstName = firstName[firstName.length - 1]; // this will give us the last character of the string (Rida) which is "a"
console.log(lastLetterOfFirstName);

//bracket notation to find the nth to last character in a string
var secondToLastLetterOfFirstName = "";
var firstName = "Rida";
secondToLastLetterOfFirstName = firstName[firstName.length - 2];
// this will give us the second to last character of the string (Rida) which is "d"

//word blanks
