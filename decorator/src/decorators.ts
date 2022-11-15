// Decorators
function Logger(constructor: Function){
    console.log("logging...");
    console.log(constructor);
    
}
@Logger
@WithTemplate('<p></p>', 'root')
class Person {
    name = "sathish";
    constructor(name: string){
        console.log("Creating Person Object...");
        this.name = name;
    }
}

function Logging(logStr: string){
    return function(construtor: Function){
        console.log(logStr);
        console.log(construtor);
    }
}

function WithTemplate(template: string, hookId: string){
    return function(constructor: any){
        console.log("with template calling")
        let hookEl = document.getElementById(hookId)!;
        let p = new constructor("Sathishkumar Raja");
        if(hookEl){
            hookEl.innerHTML = template;

            hookEl.querySelector("p")!.textContent = p.name
        }
    }
}

// Decorators Factory
@Logging("Logging Vechile")
class Vechile {
    constructor(){
      console.log("Creating Vechile Object...")
    }
}
