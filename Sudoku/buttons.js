let level;

let pauseBtn = document.getElementById("pause-btn");
let resumeBtn = document.getElementById("resume-btn");
let resetBtn = document.getElementById("reset-btn");
let restartBtn = document.getElementById("restart-btn");

// home button
let homeBtn = document.getElementById("home-btn");

homeBtn.addEventListener("click", ()=>{
  home();
  
  document.getElementById("pre-game").classList.remove("hide");
  document.getElementById("game").classList.add("hide");
})


// level buttons
let easyBtn = document.getElementById("easy-btn");
let mediumBtn = document.getElementById("medium-btn");
let hardBtn = document.getElementById("hard-btn");


easyBtn.addEventListener("click", ()=>{
  level = "easy";
  checkLevel();
  document.getElementById("pre-game").classList.add("hide");
  document.getElementById("game").classList.remove("hide");
  startGame();
})

mediumBtn.addEventListener("click", ()=>{
  level = "medium";
  checkLevel();
  document.getElementById("pre-game").classList.add("hide");
  document.getElementById("game").classList.remove("hide");
  
  startGame();
})
hardBtn.addEventListener("click", ()=>{
  level = "hard";
  checkLevel();
  document.getElementById("pre-game").classList.add("hide");
  document.getElementById("game").classList.remove("hide");
  
  startGame();
})


// game play buttons
pauseBtn.addEventListener("click", pauseGame);
resumeBtn.addEventListener("click", resumeGame);
resetBtn.addEventListener("click", resetGame);
restartBtn.addEventListener("click", resetGame);

function pauseGame(){
  clearInterval(timer);
  document.getElementById("modal").style.display = "block";
  document.getElementById("popup").classList.remove("hide");
  document.getElementById("results").classList.add("hide");
}

function resumeGame() {
  document.getElementById("modal").style.display = "none";
  startTimer();
}

function resetGame() {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  displayTimer.innerText = "00:00:00";
  errorCount = 0;
  document.getElementById("modal").style.display = "none";
  document.getElementById("board").innerHTML = "";
  document.getElementById("digits").innerHTML = "";
  document.getElementById("error").innerText = errorCount;
  startGame();
}

function home(){
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  displayTimer.innerText = "00:00:00";
  errorCount = 0;
  document.getElementById("modal").style.display = "none";
  document.getElementById("board").innerHTML = "";
  document.getElementById("digits").innerHTML = "";
  document.getElementById("error").innerText = errorCount; 
}