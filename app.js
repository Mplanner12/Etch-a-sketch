let click = true;
let color = "black";
let error = document.querySelector(".error");
error.style.display = "none" 
  
function populateBoard(size) {
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr )`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr )`;
  let squares = board.querySelectorAll(".div");
  let amount = size * size ;
  squares.forEach((div)=> div.remove());
  for(let i = 0; i <= amount; i++){
    let square = document.createElement("div");
    square.style.backgroundColor = "white";
    square.addEventListener("touchmove", colorSquare) 
    board.insertAdjacentElement("beforeend", square);
}

}

populateBoard(16);


function changeSize(input) {
  if(input >= 2 && input <= 100){
    error.style.display = "none"
    populateBoard(input)
  }
  else{
    error.style.display = "flex";
}}

function colorSquare() {
 if(click){
   if(color === "random"){
    this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`
 }
  this.style.backgroundColor = color
 }
}

function colorChange(choice) {
  color = choice ;
}

function resetBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div")
  squares.forEach((div)=> div.style.backgroundColor = "white")
}

document.querySelector("body").addEventListener("click", (e)=>{
  if(e.target.tagName != "BUTTON"){
    click = !click;
    if(click){
      document.querySelector(".mode").textContent = "Mode: Coloring";
  }
    else{
      document.querySelector(".mode" ).textContent = "Mode: Not Coloring";
  }
  }
  })
