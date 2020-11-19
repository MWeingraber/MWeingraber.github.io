//console.log("test")
let c = document.querySelectorAll(".card")
console.log(c)

function change(){
    this.classList.add("flipped")
    setTimeout(() => {  this.classList.remove("flipped");}, 500);
}

console.log("Test")
let c = document.querySelectorAll('.card')
console.log(c)

for (const ttt of c) {
    ttt.addEventListener('click', change)
}