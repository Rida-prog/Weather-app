console.log('Hello, World!'); // in-line comment

/*
  This is a multi-line comment.
  It can span multiple lines.
*/

function greet(name) {
    return `hello, ${name}!`; // Template literals allow for embedding expressions and variables in strings
}

console.log(greet(`Rida`)); // semilcolon is optional in JavaScript, but it's good practice to use it to avoid potential issues with automatic semicolon insertion (ASI)