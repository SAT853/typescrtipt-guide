
class Department {
    protected employess: string[] = []; 
    constructor(private id: string, private name: string) { 
    };
    addEmployess(e: string) {
        this.employess.push(e)
    };
    printEmployess() {
        console.log(this.employess)
    };
}

let accounting = new Department("d1", "accounting");
accounting.addEmployess("Sathish");
console.log(accounting)


class ITDepartment extends Department{
    constructor(id: string,  private admin: string[],){
        super(id, "IT");
        this.admin = admin
    }
    printAdmin(){
        console.log(this.admin)
    }
    addEmployess(e: string): void {
        if(e === "raja") return;
        this.employess.push(e);
    }
}

let it = new ITDepartment("d2", ["Jhon"]);
it.addEmployess("Sathish")
console.log(it);

// Getter and Setter;
class Person{
    private name: string;
    get personName(){
        return this.name
    }
    set personName(n: string){
        this.name = n;
    }
    constructor(name: string){
        this.name = name
    }
}
let p1 = new Person("Sathish");
p1.personName = "updated..."
console.log(p1.personName);

// Abstruct type

abstract class Department1 {
    static fiscalYear = 2020;
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];
  
    constructor(protected readonly id: string, public name: string) {
      // this.id = id;
      // this.name = n;
      // console.log(Department.fiscalYear);
    }
    abstract describe(this: Department): void;

  }
  

  class IT extends Department1{
    describe(this: Department): void {
    
    }   
  }