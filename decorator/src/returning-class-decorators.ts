// Returning a class in class decorators
@WithTemplate1('<p></p>', 'root')
class Person1 {
    name = "Sathish";
    constructor(){
        console.log("Creating Person Object...");
    }
}

function WithTemplate1(template: string, hookId: string){
    return function<T extends {new(...args: any[]): {name: string}}>(originalConstructor: T){
        return class extends originalConstructor {
            constructor(..._: any[]){
            super();
            console.log("Rendering Template...")
            let hookEl = document.getElementById(hookId)!;
            if(hookEl){
                hookEl.innerHTML = template;
                hookEl.querySelector("p")!.textContent = this.name
            }
            }
        }
    }
}


let p2 = new Person1();
