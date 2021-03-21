// Variabels
var El={
    btn:document.querySelector("button"),
    box:document.getElementById("Box")
}

// ----Events
El.btn.addEventListener("click",Add);

//-----Function
function Add(){
    var child=document.createElement("div");
    child.id="child";
    El.box.appendChild(child)
}
