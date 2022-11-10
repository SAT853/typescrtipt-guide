let button  = document.querySelector("button")!;


function clickHandler(message: string){
    console.log("button clicked " + message)
}

button.addEventListener("click", clickHandler.bind(null, "hi"))