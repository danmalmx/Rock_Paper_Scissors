const RBS = () =>  {
    let user = document.getElementById("myChoice").value
    let img = document.getElementById("mchoice");   
    if(myva === "rock") {
        img.innerHTML = "<img src='img/rock.png'>"
    } else if(myva === "paper") {
        img.innerHTML = "<img src='img/paper.png'>"
    } else if(myva === "scissors") {
        img.innerHTML = "<img src='img/scissor.png'>"
    }

    setTimeout(computer, 1000); 
}

const computer = () => {
    window.onload
    let cova = ['rock', 'paper', 'scissors'];
    let comp = cova[Math.floor(Math.random() * cova.length)]; 
    let pic = document.getElementById("cchoice")
    if(comp === 'rock') {
        pic.innerHTML = "<img src='img/rock.png'>"
    } else if(comp === "paper") {
        pic.innerHTML = "<img src='img/paper.png'>"
    } else if(comp === "scissors") {
        pic.innerHTML = "<img src='img/scissor.png'>"
    

} 
setTimeout(compare, 500); 
}

var computerChoice = computer();

function compare() { 
    if (user.toUpperCase() === "ROCK" && computerChoice.toUpperCase() === "SCISSOR" ) {
      return user + " wins vs " + computerChoice + ". Congratulations!";
    } else if (user.toUpperCase() === "SCISSOR" && computerChoice.toUpperCase() === "PAPER") {
      return user + " wins vs " + computerChoice + ". Congratulations!";
    } else if (user.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "ROCK") {
      return user + " wins vs " + computerChoice + ". Congratulations!";
    } else if( user.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "SCISSOR" ) {
      return user + " loses vs " + computerChoice + ". Try again";
    } else if (user.toUpperCase() === "ROCK" && computerChoice.toUpperCase() === "PAPER") {
      return user + " loses vs " + computerChoice + ". Try again";
    } else if (user.toUpperCase() === "SCISSOR" && computerChoice.toUpperCase() === "ROCK") {
      return user + " loses vs " + computerChoice + ". Try again!";
    } else if (user.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "PAPER") {
      return "Its a draw. Try again";
    } else if (user.toUpperCase() === "ROCK" && computerChoice.toUpperCase() === "ROCK") {
      return "Its a draw. Try again";
    } else if (user.toUpperCase() === "SCISSOR" && computerChoice.toUpperCase() === "SCISSOR") {
      return "Its a draw. Try again";
    } else {
      return "None selected"; 
    }
  }
  

// let compx = computer();

// const play = (myva, compx) => {   
//     let win = document.getElementById("winner");

//     if(myva === "rock" && compx === "rock") {
//         win.innerHTML = "And the winner is: both!!!"        
//     } 
//     if(myva === "paper" && compx === "paper") {
//         win.innerHTML = "And the winner is: both!!!"        
//     } 
//     if(myva === "scissors" && compx === "scissors") {
//         win.innerHTML = "And the winner is: both!!!"        
//     } 
//     if(myva === "rock" && compx === "scissors") {
//         win.innerHTML = "And the winner is: You!"
//     } else {
//         win.innerHTML = "And the winner is: Computer..."
//     } if(myva === "paper" && compx === "rock") {
//         win.innerHTML = "And the winner is: You!"
//     } else {
//         win.innerHTML = "And the winner is: Computer..."
//     } if(myva === "scissors" && compx === "paper") {
//         win.innerHTML = "And the winner is: You!"
//     } else {
//         win.innerHTML = "And the winner is: Computer..."
//     }
// }