type Admin = {
    name: string;
    privilage: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

/* Intersection Types 
Intersection types are closely related to union types, but they are used very differently. 
An intersection type combines multiple types into one. 
This allows you to add together existing types to get a single type that has all the features you need.
For example, Admin & Employee is a type which is all of Admin and Employee. That means an object of this type will have all members of all three types.
*/
type ElevatedEmployee = Admin & Employee;

const e1 : ElevatedEmployee = {
    name: "Sathish",
    privilage: ["create-server"],
    startDate: new Date()
};

type Combainable = number | string;
type Numeric = boolean | number;
type Universal = Combainable & Numeric; // Intersection Types
let a: Universal = 1

// Type Gaurds
function add(a: Combainable, b: Combainable): Combainable {    
    if(typeof a === "string" || typeof b === "string"){
        return a.toString() + b.toString()
    }
    return a + b;
}

// Type Gaurds
type UnknownEmployee = Admin | Employee;

function printEmployee(e: UnknownEmployee): void{
    console.log("Employee Name: " , e.name);
    if("privilage" in e){
        console.log("Employee Privilage: ",e.privilage)
    }

    if("startDate" in e){
        console.log("Start Date: ", e.startDate)
    }
}
printEmployee(e1)

// Type Gaurds For Class
class Car {
    drive(){
        console.log("Driving...")
    }
}
class Truck {
    drive(){
        console.log("Driving...");   
    }
    loadGargo(amount: string){
        console.log("Loading Cargo: " + amount)
    }
} 
type Vechile = Car | Truck;
let t1 = new Truck();

function useVechile(v: Vechile){
    v.drive();
// Type Gaurds For Class
    if("loadGargo" in v){
        v.loadGargo("100");
    }
// Type Gaurds For Class
    if(v instanceof Truck){
        v.loadGargo("200");
    }
}
useVechile(t1);

/* Discriminated Unions:
The closest equivalent to data is a union of types with discriminant properties, normally called discriminated unions in TypeScript:
*/
interface Bird {
    type: "bird"
    flyingSpeed: number;
}
interface Horse {
    type: "horse"
    runningSpeed: number;
}
type Animal = Bird | Horse;
function moveAnimal(animal: Animal){
    switch(animal.type){
        case "bird": console.log(animal.flyingSpeed);
        break;
        case "horse": console.log(animal.runningSpeed);
        break;
        default: throw Error("No Type matched!")
    }
};
moveAnimal({runningSpeed: 100, type: "horse"});


// Type Casting
// let p = document.querySelector("p");
// let p = document.getElementById("content")!;
// const userInputElemt = <HTMLInputElement>document.getElementById("user-input");
// const userInputElemt = document.getElementById("user-input")! as HTMLInputElement;
// userInputElemt.value = "Sathish";
const userInputElemt = document.getElementById("user-input")
if(userInputElemt){
    (userInputElemt as HTMLInputElement).value = "Sathish"
}

/*
Index Properties: 
If you don't know the object structure you're going to work with, but you know the possible key and value types, 
then the index signature is what you need.
*/
interface ErrorContainer {
    [key: string]: string;
}
let errorBag: ErrorContainer = {
    email: "Not a Valid Email",
    userName: "Must start with a capital character!"
}

/*
TypeScript provides the concept of function overloading. 
You can have multiple functions with the same name but different parameter types and return type. 
However, the number of parameters should be the same.
*/
function combaine(a:string, b:string):string;
function combaine(a:number, b:number): number;
function combaine(a: Combainable, b:Combainable): any {
    if(typeof a === "string" || typeof b === "string"){
        return a.toString() + b.toString()
    }
    return a + b;
}

let result = combaine("Sathishkumar !", "Raja");
let result2 = combaine(1, 2);
result.replace("!", "")

// Optional Chaining
let fetchedUserData = {
    id: "1",
    name: "Sathish",
    job: {title: "SDE III", des: "Software Developer..."}
}
console.log("Job Des: ", fetchedUserData?.job?.des);

// Nullish Coalescing
let userInput = "s";
const storedData = userInput ?? "fallback value";
console.log(storedData);