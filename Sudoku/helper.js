let messages = [
  "You are a wizard, Harry!", 
  "Splash!", 
  "Captain Thunderbolt!", 
  "Woo hoo!", 
  "Down the rabbit hole we go!", 
  "Way to go champ!", 
  "You should smile!", 
  "Pat yourself on the back!", 
  "Keep up the winning streak!", 
  "Even Panda is happy!", 
  "Incredible!", 
  "You are awesome!", 
  "wonderful!"
]

function showMsg(){
  let randomIndex = Math.floor(Math.random() * messages.length);
  let timeTaken;
  
  document.getElementById("random-msg").innerText = messages[randomIndex];
  
  if (hours == 0) {
    timeTaken = `${minutes} min(s) ${seconds} secs`;
  }
  let errors = errorCount > 1 ? `${errorCount} errors.` : `${errorCount} error.`;
  
  document.getElementById("time-taken").innerText = `It took you ${timeTaken} and you made ${errors}`;
}



// displays result and reset timer
function showResult(){
  gameOver = true;
  clearInterval(timer);
  document.getElementById("modal").style.display = "block";
  document.getElementById("popup").classList.add("hide");
  document.getElementById("results").classList.remove("hide");
 
  showMsg();
  
}

