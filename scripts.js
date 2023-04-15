let container = document.querySelector(".container");

let sizeLength = 16;
let columns = Math.pow(sizeLength, 2);

for(let i=0; i<columns; i++) {
const smalldiv = document.createElement("div");
smalldiv.classList.add("smalldiv")
container.appendChild(smalldiv);
}

const smalldiv = document.querySelectorAll(".smalldiv");

smalldiv.forEach( function(e){
e.addEventListener("mousemove", () => {
    e.style.backgroundColor = "red"
  });
})