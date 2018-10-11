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

    // setTimeout(computer, 1000); 
}

const computer = () => {
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
    
    // setTimeout(play, 500); 
}   

let comCho = computer();

// var compare = function (myva, comp) {
//     if(myva === comp) 
//     {console.log("The result is a tie!");}
    
//     else if(myva === "rock") 
//         if (comp === "scissors") 
//         {console.log("rock wins");}
//         else 
//         {console.log "paper wins";}
//     else if (myva === "paper")
//         if (comp === "rock")
//         {console.log("paper wins");}
//         else
//         {console.log("scissors wins");}
//     else if (myva === "scissors")
//         if (comp === "rock")
//         {console.log("rock wins");}
//         else
//         {console.log("scissors wins");}
//      };

// var compare = function(myva, comp) {
//     let win = document.getElementById("winner");

//     if(myva === comp) {
//         win.innerHTML = "And the winner is: both!!!";
//     }

//     if(myva === "rock") {
//         if(comp === "scissors") {
//             win.innerHTML = "And the winner is: You!";
//         }
//         else {
//             win.innerHTML = "And the winner is: Computer...";
//         }
//     }

//     if(myva === "scissors") {
//         if(comp === "paper") {
//             win.innerHTML = "And the winner is: You!";
//         }
//         else {
//             win.innerHTML = "And the winner is: Computer...";
//         }
//     }

//     if(myva === "paper") {
//         if(comp === "rock") {
//             win.innerHTML = "And the winner is: You!";
//         }
//         else {
//             win.innerHTML = "And the winner is: Computer...";
//         }
//     }
// };

const play = (RBA, comCho) => {   
    let win = document.getElementById("winner");
    if(RBA === comCho) {
    win.innerHTML = "And the winner is: both!!!"        
    } 
    if(RBA === "rock" && comCho === "scissors") {
        win.innerHTML = "And the winner is: You!"
    } else {
        win.innerHTML = "And the winner is: Computer..."
    } if(RBA === "paper" && comCho === "rock") {
        win.innerHTML = "And the winner is: You!"
    } else {
        win.innerHTML = "And the winner is: Computer..."
    } if(RBA === "scissors" && comCho === "paper") {
        win.innerHTML = "And the winner is: You!"
    } else {
        win.innerHTML = "And the winner is: Computer..."
    }
}