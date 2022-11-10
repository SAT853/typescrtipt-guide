
class Department {
    name: string;
    private employess: string[] = [];

    constructor(n: string){
        this.name = n
    }
private addEmployess(e: string){
    this.employess.push(e)
}


printEmployess(e: string){
    this.addEmployess(e)
    console.log(this.employess)
}

    describe(this: Department){
        console.log("Department: ",this.name)
    }
}

let accounting = new Department("accounting");


// accounting.addEmployess("Sathish");
// accounting.addEmployess("Raja");
accounting.printEmployess("Sathish")

// accounting.describe()


// let accountingCopy = {name: "management", describe: accounting.describe}
// accountingCopy.describe()


// Shorthand Initialization 

class Person{
    constructor(private id: string, private name: string){}
    printNameAndID(){
        console.log(`${this.id} ${this.name}`)
    }
}

let p1 = new Person("1", "Sathish");

p1.printNameAndID()