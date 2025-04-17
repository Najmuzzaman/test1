function showAlert() {
    alert("Button clicked!");
}

function changeColortoRed() {
    document.body.style.backgroundColor = "red";
}

function changeColortoGreen() {
    document.body.style.backgroundColor = "green";
}

function changeColor(color) {
    document.body.style.backgroundColor = color;
}
a=10
function add(a,b) {    
    document.getElementById("content").innerHTML = "add of "+ a +" and "+ b +" is "+ (a + b);
    console.log(a + b);
    return a+b;
}

minus = (a,b) => {
    document.getElementById("content").innerHTML = "minus of "+a+" and "+b+" is "+ (a - b);
    console.log(a - b);
}

muliptly = (a,b) => {
    document.getElementById("content").innerHTML = "multiply of "+a+" and "+b+" is "+ (a * b);
    console.log(a * b);
}