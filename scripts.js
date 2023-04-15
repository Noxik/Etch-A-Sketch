let container = document.querySelector(".container");
let sizeLength = "16"; /* default board size value */
window.onload = createGrid() /* create default board after page load*/

/* size from input */
const submitBtn = document.getElementById("submit")

/* create new board from input value */
submitBtn.addEventListener("click", () => {
    sizeLength = document.getElementById('number').value;
    if (sizeLength > 64) {
        alert("board size is too big - your computer will explode!")
    } else {
    /* change grid style - important to create square board */
    container.style.cssText = `grid-template-columns: repeat(${sizeLength}, 1fr)`

    /* remove previous board */
    while (container.firstChild) {
        container.firstChild.remove()
    } 

    /* create new board with submit range */
    createGrid();
    }
});


/* create grid with mouse "hover effect*/
function createGrid() {
    let columns = Math.pow(sizeLength, 2);
    for(let i=0; i<columns; i++) {
const smalldiv = document.createElement("div");
smalldiv.classList.add("smalldiv")
container.appendChild(smalldiv);
}

/* "hover" effect */
const smalldiv = document.querySelectorAll(".smalldiv");
smalldiv.forEach( function(e){
e.addEventListener("mousemove", () => {
    e.style.backgroundColor = "red"
  });
})
}






