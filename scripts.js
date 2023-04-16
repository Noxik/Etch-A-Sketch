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

/* default color or random */
let rainbow = false;
const random = document.getElementById("random");
random.addEventListener("click", () => {
    rainbow = true;
    darkmode = false;
//   console.log("dark: " + darkmode);
//   console.log("rain: " + rainbow)
    }
); 

/* default color */
const defaultColor = document.getElementById("default");
defaultColor.addEventListener("click", () => {
    rainbow = false;
    darkmode = false;
    color = "blue";
//   console.log("dark: " + darkmode);
//   console.log("rain: " + rainbow);
    }
); 

let darkmode = false;
const dark = document.getElementById("dark");
dark.addEventListener("click", () => {
    darkmode = true;
    console.log("dark: " + darkmode);
    rainbow = false
    console.log("rain: " + rainbow)
    });

let color = "blue"

/* create grid with mouse "hover effect*/
function createGrid() {

/* create smalldivs */
let columns = Math.pow(sizeLength, 2);
    for(let i=0; i<columns; i++) {
const smalldiv = document.createElement("div");
smalldiv.classList.add("smalldiv");
smalldiv.style.backgroundColor = "white";
smalldiv.style.filter = `brightness(1)`
container.appendChild(smalldiv);
}

/* "hover" effect */
const smalldiv = document.querySelectorAll(".smalldiv");
smalldiv.forEach( function(e){
e.addEventListener("mouseenter", () => {

    if (rainbow == false  && darkmode == false) {
    e.style.backgroundColor = color;
    e.style.filter = "brightness(1)"
 } else if (darkmode == true) {
    let currentStyle = e.style.filter;
    console.log(currentStyle)

/* darkmode on - 10% per move to darkness */
    switch (currentStyle) {
    case ("brightness(1)"):
        e.style.filter = "brightness(0.9)";
        break;
    case "brightness(0.9)":
        e.style.filter = "brightness(0.8)";
        break;
    case "brightness(0.8)":
        e.style.filter = "brightness(0.7)";
        break;        
    case "brightness(0.7)":
        e.style.filter = "brightness(0.6)";
        break;    
    case "brightness(0.6)":
        e.style.filter = "brightness(0.5)";
        break;      
    case "brightness(0.5)":
        e.style.filter = "brightness(0.4)";
        break;  
    case "brightness(0.4)":
        e.style.filter = "brightness(0.3)";
        break;  
    case "brightness(0.3)":
        e.style.filter = "brightness(0.2)";
        break; 
    case "brightness(0.2)":
        e.style.filter = "brightness(0.1)";
        break;
    case "brightness(0.1)":
        e.style.filter = "brightness(0)";
        break;     
    }

} else if (darkmode == false && rainbow == true) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.style.backgroundColor = "#" + randomColor;
    e.style.filter = "brightness(1)"
} 
  });
})
}

