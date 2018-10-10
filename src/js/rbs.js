const RBS = () =>  {
    let myva = document.getElementById("myChoice").value
    let img = document.getElementById("mchoice");   
    if(myva === "rock") {
        img.innerHTML = "<img src='img/rock.png'>"
    } else if(myva === "paper") {
        img.innerHTML = "<img src='img/paper.png'>"
    } else if(myva === "scissors") {
        img.innerHTML = "<img src='img/scissor.png'>"
    }

    // setTimeout(comp, 1000); 
}

const comp = () => {
    window.onload
    let cova = ['rock', 'paper', 'scissors'];
    let comp = cova[Math.floor(Math.random() * cova.length)]; 
    let pic = document.getElementById("cchoice")
    if(comp === "rock") {
        pic.innerHTML = "<img src='img/rock.png'>"
    } else if(comp === "paper") {
        pic.innerHTML = "<img src='img/paper.png'>"
    } else if(comp === "scissors") {
        pic.innerHTML = "<img src='img/scissor.png'>"
    }
    // setTimeout(determineWinner, 500); 
}   
const determineWinner = (myva, comp) => {
    if (myvax === compx) {
      return 'Game was a tie';
    }
    if (myvax === 'rock') {
      if (compx === 'paper') {
        return 'Computer wins';
      } else {
        return 'You win!';
      }
    }
    if (myvax === 'paper') {
      if (compx === 'scissor') {
        return 'Computer wins';
      } else {
        return 'You win!';
      }
    }
    if (myvax === 'scissor') {
      if (compx === 'rock') {
        return 'Computer wins';
      } else {
        return 'You win!';
      }
    } 
    // setTimeout(determineWinner, 100); 
  }
  
  const playGame = () => {
    const myvax = getUserChoice('rock');
      const compx = getComputerChoice();
      console.log(`You threw: ${myvax}`)
    console.log(`The computer threw: ${compx}`);
    console.log(determineWinner(myvax, compx));
  };
  
  playGame();

// const play = (RBS, comp) => {   
// let win = document.getElementById("winner");
//     if(RBS === comp) {
//     win.innerHTML = "And the winner is: both!!!"        
//     } 
//     if(RBS === "rock" && comp === "scissors") {
//         win.innerHTML = "And the winner is: You!"
//     } else {
//         win.innerHTML = "And the winner is: Computer..."
//     } if(RBS === "paper" && comp === "rock") {
//         win.innerHTML = "And the winner is: You!"
//     } else {
//         win.innerHTML = "And the winner is: Computer..."
//     } if(RBS === "scissors" && comp === "paper") {
//         win.innerHTML = "And the winner is: You!"
//     } else {
//         win.innerHTML = "And the winner is: Computer..."
//     }
// }