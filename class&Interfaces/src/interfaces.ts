// type AddFn =(a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number
}
let addFn: AddFn = (n1, n2) => {
    return n1 + n2
 } 


interface Named {
    readonly name?: string;
    outputName?: string;
  }
  
  interface Greetable extends Named {
    greet(phrase: string): void;
  }
  
  class Person1 implements Greetable {
    name?: string;
    age = 30;
  
    constructor(n?: string) {
      if (n) {
        this.name = n;
      }
    }
  
    greet(phrase: string) {
      if (this.name) {
        console.log(phrase + ' ' + this.name);
      } else {
        console.log('Hi!');
      }
    }
  }

  let user1: Greetable;

user1 = new Person1();
// user1.name = 'Manu';

user1.greet('Hi there - I am');
console.log(user1);
