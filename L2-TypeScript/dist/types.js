"use strict";
// Declare the normal JavaScript types in TypeScript
let theNumber = 5;
let theString = 'Test Sträng';
let theBoolean = true;
let theSecondString = 'The Second Test String';
let theNull = null;
theString = 'Kalle';
// Create an array of numbers
let myArray = [1, 2, 3];
// Touple - a "special array" - with defined number and type of members
let user = [1, 'martin@ec.se'];
console.log(user);
// Enum is a type that contains fixed values. Used as flags or states
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Lemon"] = 1] = "Lemon";
    Fruit[Fruit["Mellon"] = 2] = "Mellon";
    Fruit[Fruit["Apple"] = 99] = "Apple";
})(Fruit || (Fruit = {}));
;
let myFruit = Fruit.Lemon;
console.log('myFruit: ' + myFruit);
// Funktioner - define the types of the parameter and the type of 
// the funktion returns. 
function max(tal1, tal2) {
    return (tal1 > tal2 ? tal1 : tal2);
}
console.log('Max: ' + max(1, 9));
// A parameter can be made optional by adding a ? after the parameter name
// the type needs to be checked using if-statements when you use it
function min(tal1, tal2, tal3) {
    if (tal3 !== undefined) {
        tal2 = (tal2 < tal3 ? tal2 : tal3); // Inside the if-statement the code-completion in VS will know what type you have e.g. that tal3 here is only a number
    }
    return (tal1 < tal2 ? tal1 : tal2);
}
console.log('Min 1: ' + min(4, 2));
console.log('Min 2: ' + min(2, 43, 1));
// A parameter can also be made optional by "defaulting it" to a value - it will then use this value if not supplied
// by the caller. 
function getFullname(firstname, lastname = 'Andersson') {
    return firstname + ' ' + lastname;
}
console.log('Namn 1: ' + getFullname('Martin', 'Haagen'));
console.log('Name 2: ' + getFullname('Martin'));
let user2 = { id: 5, username: 'martin' };
let boss = { name: 'Boss', breed: 'Border Collie' };
function getUrl(email) {
    if (email.indexOf('@') < 0) {
        return new Error('This is not a valid email');
    }
    return 'mailto:' + email;
}
let theUrl = getUrl('And@ers');
if (typeof theUrl === 'string') {
    console.log(theUrl);
}
else {
    console.log(theUrl.message);
}
function getDog(name) {
    if (name === 'Boss')
        return boss;
    return null;
}
let dog = getDog('Boss');
console.log('Hundens namn 1: ' + dog?.name);
dog = getDog('Fido');
console.log('Hundens namn 2: ' + dog?.name);
