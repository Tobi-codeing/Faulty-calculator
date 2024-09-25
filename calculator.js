let random = Math.random()
let a = prompt("Enter First Digit");
let b = prompt("Enter Operation");
let c = prompt("Enter Second Number");

let obj = {
    "+" : "*",
    "*":"+",
    "-":"/",
    "/":"-",
}

if ( random > 0.1) {
    alert(`The Result Is ${eval(`${a} ${b} ${c}`)}`)
}

else{
    c = obj [c]
    alert(`The Result Is ${eval(`${a} ${b} ${c}`)}`)

}