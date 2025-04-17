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

function add(a,b) {
    document.getElementById("content").innerHTML = "add of "+ a +" and "+ b +" is "+ (a + b);
    console.log(a + b);
    return a+b
}
function minus(a,b) {
    document.getElementById("content").innerHTML = "minus of "+a+" and "+b+" is "+ (a - b);
    console.log(a - b);
}