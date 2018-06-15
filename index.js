///// Examples from Teaching//////

// const a = 11; //is available globally
 
// function foo(b) { // b and c are only available within foo (but that means it's also available within bar)
//                     // b is because it's a parameter only defined in foo
//                     // c because it's a variable defined within foo
//     const c = a + b; // this makes c = 11+42
//     function bar(d) { //d is only available within 'bar'
//         console.log(a, b, c, d);
//     }
 
//     bar(c + 1); //this make d = c+1
// }
 
// foo(42); //b = 42

//var and let//

//var
// var a = 2; //variable is declared in parent scope
// {
//     var a = 3; //variable is redeclared in the child scope
//     console.log(a); // this is 3
// }
// console.log(a); //because the child declaration takes precendent over the parent because of var, this is also 3 when you might expect it to be 2

//let
// const a = 2; //variable is declared in parent scope
// {
//     let a = 3; //variable is redeclared in the child scope
//     console.log(a); // this is 3
// }
// console.log(a); //because the child let is defined, the block {} takes effect, allowing a to have different values in different places

//const

// const a = 2; //this is defined everywhere within this scope as 2
//     {
//         let a = 3 // this is a new scope, so even though a is a const in the parent, in the child it can be redefined and used
//         console.log(a) // equals 3
//     }
// console.log(a) // equals 2

//more scope//

//This is bad vibes:

// const defaultColor = "Neutral"; //this sets globally the default colour to be neutral
 
// function sayName(name, color) { //this function outputs name and colour
//     console.log(`${name}${getNameModifier(color)}`);
// }
 
// function getNameModifier(color) { //this function outputs colour, or default if there is no colour
//     return `, the ${color || defaultColor}`;
// }
 
// sayName("Gandalf", "Grey"); //this allows input

//this has 3 globally defined identifiers, sayName, getNameModifier and defaultColor

//This is better:
// function sayName(name, color) {
//     function getNameModifier(color) { //now, move this into the scope where it is used
//     const defaultColor = "Neutral"; //this is declared in the only place it is used
//     return `, the ${color || defaultColor}`;
// }
//     console.log(`${name}${getNameModifier(color)}`);
// }
// sayName("Gandalf", "Grey");
//everything is now declared locally, and there is one global scope, sayName

//next, using IIFEs


// var wizard = (function iAmGandalf() { //defining wizard as an IIFE iAmGandalf
//     function sayName(name, color) {
 
//         function getNameModifier(color) {
//             const defaultColor = "Neutral";
//             return `, the ${color || defaultColor}`;
//         }
 
//         console.log(`${name}${getNameModifier(color)}`);
//     }
 
//     sayName("Gandalf", "Grey"); // returns "Gandalf, the Grey"
    
// })();
// console.log(wizard) // returns undefined, because (is this right?) the definition of wizard (iAmGandalf) is NOT occurring globally, but within the function iAmGandalf, so it's not available to the global scope

// (function name(){ //all wrapped within ()
//     stuff //the block makes something happen, as per normal function
// })()// the () at the end call the function immediately


// a = 42;
// var a; //this is hoisted to it effectively appears at the top
// console.log(a);     // 42

// // b = 42
// // let b //not hoisted
// // console.log(b) //undefined

// console.log(c);     // returns undefined, NOT 'error'. 
// var c = 42; //This is because JS treats this as 2 thing - 'var c' and 'c = 42'. So var c is hoisted, but not the value of it


// foo();  // 1
 
// function foo() { //foo is hoisted so can be called before it's defined (because both are in global scope)
//     console.log(1);
// }



//break it down

// function makeFunction() { //global scope
//     var a = 42; //child of makeFunction
 
//     function innerFunction() {//child of makeFunction
//         console.log(a); //local to innerFunction
//     }
 
//     return innerFunction;//local to makeFunction
// }
// var foo = makeFunction(); //global variable foo requiring global function makeFunction, which uses child function innerFunction, local var a, and local return innerFunction
// foo(); //global calling of foo, makeFunction, innerFunction, var a and return

//exercise 1

//We had a quick check of var and let and re-declarations in various scopes. Here are the remaining two combinations of var and let for that example: what are the outputs for each and why? (Don't run them until you've had a go at answering the question!)

// var a = 2;
// {
//     let a = 3;
//     console.log(a); //3 because it is defined and called locally, and not disrupted
// }
// console.log(a); //2 because a is defined globally with var, but does not bleed into its child


// let c = 2;
// {
//     var c = 3;
//     console.log(c); // 3 because it is defined locally with var
// }
// console.log(c); //because child is defined with var, this leaks out into parent and results in the error 'c has already been declared on line xx'


//EXERCISE 2//

// function countDown() {
//     for (let i = 3; i >= 0; i--) {
//         setTimeout(function() {
//             console.log(i || "Lift-off!");
//         }, (3 - i) * 1000)
//     }
// };
// countDown()



function countDown(chooseCountDown) {
    if (Number.isInteger(+chooseCountDown) && +chooseCountDown > 0){
         for (let i = +chooseCountDown; i >= 0; i--) {
        setTimeout(function() {
            console.log(i || "Lift-off!");
        }, (+chooseCountDown - i) * 1000)
    }   
    } else {
        console.log("Please choose a whole number bigger than 0")
    }

};
countDown(5)






//want to be able to declare i in the function, but want to check it first, make sure it's a number, and that it's positive, and an integer etc


