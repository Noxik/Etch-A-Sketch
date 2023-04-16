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

/* clear board */
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", () => {
    while (container.firstChild) {
        container.firstChild.remove()
    } 
    /* create new board with submit range */
    createGrid();
   
    }
);


/* create grid with mouse "hover effect*/
function createGrid() {
let color = "blue"

/* default color or random */
let rainbow = false;
const random = document.getElementById("random");
random.addEventListener("click", () => {
    rainbow = true;
    darkmode = false;
    console.log("dark: " + darkmode);
    console.log("rain: " + rainbow)
    }
); 

/* default color */
const defaultColor = document.getElementById("default");
defaultColor.addEventListener("click", () => {
    rainbow = false;
    darkmode = false;
    color = "blue"
    console.log("dark: " + darkmode);
    console.log("rain: " + rainbow);
    }
); 

/* create smalldivs */
let columns = Math.pow(sizeLength, 2);
    for(let i=0; i<columns; i++) {
const smalldiv = document.createElement("div");
smalldiv.classList.add("smalldiv");
smalldiv.style.backgroundColor = "white";
smalldiv.style.filter = "brightness(1)"
container.appendChild(smalldiv);
}

/* "hover" effect */
const smalldiv = document.querySelectorAll(".smalldiv");
smalldiv.forEach( function(e){
e.addEventListener("mouseenter", () => {

    if (rainbow == false  && darkmode == false) {
    e.style.backgroundColor = color;
   

 } else if (darkmode == true) {
    
    let currentStyle = e.style.filter;
    console.log(currentStyle)
    if (currentStyle == "brightness(1)") {
        e.style.filter = "brightness(0.5)"
    }

} else if (darkmode == false && rainbow == true) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.style.backgroundColor = "#" + randomColor;
    e.style.filter = "brightness(1)"
} 
  });
})
}

let darkmode = false;
const dark = document.getElementById("dark");
dark.addEventListener("click", () => {
    darkmode = true;
    console.log("dark: " + darkmode);
    rainbow = false
    console.log("rain: " + rainbow)
    })

/* RANDOM RGB 
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
*/