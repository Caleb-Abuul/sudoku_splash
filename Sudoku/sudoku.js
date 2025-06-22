let gameOver = false;
let board;
let solution;


let randomNumber;
let randomBoard;
let randomSolution;

let selectedNumber = null;
let errorCount = 0;
let emptyCount;

let timer;
let [hours, minutes, seconds] = [0, 0, 0];
let displayTimer = document.getElementById("display-timer");
 


function checkLevel(){
  if (level == "easy"){
    board = easy.board;
    solution = easy.solution;
    console.log(board);
  } else if (level == "medium"){
    board = medium.board;
    solution = medium.solution;
    console.log(board);
  } else if (level == "hard"){
    board = hard.board;
    solution = hard.solution;
    console.log(board);
  } else{
    console.log("level not set");
  } 
}

// let randomNumber = Math.floor(Math.random() * board.length);
// let randomBoard = easy.board[randomNumber];
// let randomSolution = solution[randomNumber];

// let selectedNumber = null;
// let errorCount = 0;
// let emptyCount = countEmpty();

// let timer = null;
// let [hours, minutes, seconds] = [0, 0, 0];
// let displayTimer = document.getElementById("display-timer");




// sets game board, digits and starts timer
function startGame() {
  gameOver = false;
  selectedNumber = null;
  errorCount = 0;
  
  
  randomNumber = Math.floor(Math.random() * board.length);
  randomBoard = board[randomNumber];
  randomSolution = solution[randomNumber];
  
  emptyCount = countEmpty();
  
  timer = null;
  [hours, minutes, seconds] = [0, 0, 0];
  
  setBoard();
  setDigits();
  startTimer();
}

// set game board
function setBoard(){
  for (let r = 0; r < 9; r++){
    for (let c = 0; c < 9; c++){
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      if (r == 2 || r == 5){
        tile.classList.add("horizontal-line");
      }
      if (c == 2 || c == 5){
        tile.classList.add("vertical-line");
      }
      if (randomBoard[r][c] != "-"){
        tile.innerText = randomBoard[r][c];
        tile.classList.add("start-tile");
      }
      tile.classList.add("tile");
      tile.addEventListener("click", selectTile);
      document.getElementById("board").appendChild(tile);
    }
  }
}

// sets the digits
function setDigits() {
  for (let i = 1; i <= 9; i++){
    let digit = document.createElement("div");
    digit.id = i.toString();
    digit.classList.add("digit");
    digit.innerText = digit.id;
    digit.addEventListener("click", selectNumber);
    document.getElementById("digits").append(digit);
  }
}

// select a number and saves it
function selectNumber(){
  
  if (selectedNumber != null){
    selectedNumber.classList.remove("selected-digit");
  }
  
  selectedNumber = this;
  selectedNumber.classList.add("selected-digit");
}

// starts timer
function startTimer(){
  if (timer != null){
    clearInterval(timer)
  }
  timer = setInterval(()=>{
    seconds++;
    if (seconds == 60){
      seconds = 0;
      minutes++;
      if (minutes == 60){
        minutes = 0;
        hours++;
        
        
      }
    }
    let h = hours > 9 ? hours : "0" + hours;
    let m = minutes > 9 ? minutes : "0" + minutes;
    let s = seconds > 9 ? seconds : "0" + seconds;
        
    displayTimer.innerText = h + ":" + m + ":" + s;
  }, 1000);
}

// checks if a number is selected and sets the tile to the number when the tile is selected 
function selectTile() {
  if (!selectedNumber){
    return
  }
  if (gameOver){
    return;
  }
  let tile = this;
  let coords = tile.id.split("-");
  let r = parseInt(coords[0]);
  let c = parseInt(coords[1]);
  
  // checks if cell is empty and the right cell for the selected number
  if (randomSolution[r][c] == selectedNumber.id){
    // randomBoard[r][c].innerText = selectedNumber.id;
    tile.innerText = selectedNumber.id;
    
    // decreases empty elements count till zero to determine whether game is over
    emptyCount--;
    if (emptyCount == 0){
      showResult();
      gameOver = true;
    }
    console.log(emptyCount)
  } else {
    errorCount += 1;
    document.getElementById("error").innerText = errorCount;
  }
  
}

// count empty elements of the random board
function countEmpty(){
  let emptyElements = 0;
  for (let r = 0; r < 9; r++){
    for (let c = 0; c < 9; c++) {
      if (randomBoard[r][c] == "-"){
        emptyElements++;
      }
    }
  }
  
  return emptyElements;
}
