
// Declare the normal JavaScript types in TypeScript
let theNumber:number = 5;
let theString:string = 'Test Sträng';
let theBoolean:boolean = true;
let theSecondString = 'The Second Test String';
let theNull = null; 
theString = 'Kalle';

// Create an array of numbers
let myArray:number[] = [1, 2, 3];

// Touple - a "special array" - with defined number and type of members
let user: [number, string] = [1, 'martin@ec.se'];
console.log(user);

// Enum is a type that contains fixed values. Used as flags or states
enum Fruit { Lemon = 1, Mellon = 2, Apple = 99 };
let myFruit:Fruit = Fruit.Lemon;
console.log('myFruit: ' + myFruit);

// Funktioner - define the types of the parameter and the type of 
// the funktion returns. 
function max(tal1:number, tal2:number): number {
    return (tal1 > tal2 ? tal1 : tal2);
}
console.log('Max: ' + max(1, 9));

// A parameter can be made optional by adding a ? after the parameter name
// the type needs to be checked using if-statements when you use it
function min(tal1: number, tal2: number, tal3?: number): number {
    if(tal3 !== undefined) {
        tal2 = (tal2 < tal3 ? tal2 : tal3); // Inside the if-statement the code-completion in VS will know what type you have e.g. that tal3 here is only a number
    }
    return (tal1 < tal2 ? tal1 : tal2);
}
console.log('Min 1: ' + min(4, 2));
console.log('Min 2: ' + min(2, 43, 1));

// A parameter can also be made optional by "defaulting it" to a value - it will then use this value if not supplied
// by the caller. 
function getFullname(firstname: string, lastname:string = 'Andersson'): string {
    return firstname + ' ' + lastname;
}
console.log('Namn 1: ' + getFullname('Martin', 'Haagen'));
console.log('Name 2: ' + getFullname('Martin'));


let user2: { id: number, username: string } = { id: 5, username: 'martin' };

type Dog = {
    name: string,
    breed: string,
    age?: number
};
let boss:Dog = { name: 'Boss', breed: 'Border Collie' };

function getUrl(email: string): string | Error {
    if(email.indexOf('@') < 0) {
        return new Error('This is not a valid email');
    }
    return 'mailto:' + email;
}

let theUrl = getUrl('And@ers');
if (typeof theUrl === 'string') {
    console.log(theUrl);
} else {
    console.log(theUrl.message);
}

function getDog(name: string) : Dog | null {
    if (name === 'Boss') return boss;
    return null;
}

let dog = getDog('Boss');
console.log('Hundens namn 1: ' + dog?.name);
dog = getDog('Fido');
console.log('Hundens namn 2: ' + dog?.name);
