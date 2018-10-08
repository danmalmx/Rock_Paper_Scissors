function RBS() {
    let myva = document.getElementById("myChoice").value
    let img = document.getElementById("mchoice");   
    if(myva === "rock") {
        img.innerHTML = "<img src='img/rock.png'>"
    } else if(myva === "paper") {
        img.innerHTML = "<img src='img/paper.png'>"
    } else if(myva === "scissors") {
        img.innerHTML = "<img src='img/scissor.png'>"
    }
}

window.onload = function() {
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
}   

function play() {
    let win = document.getElementById("winner");
    if(myva === comp) {
        win.innerHTML = "both!!!"        
    } 
    if(myva === "rock" && comp === "scissors") {
        win.innerHTML = "You!"
        } else {
            win.innerHTML = "Computer..."
    } if(myva === "paper" && comp === "rock") {
        win.innerHTML = "You!"
        } else {
            win.innerHTML = "Computer..."
    } if(myva === "scissor" && comp === "paper") {
        win.innerHTML = "You!"
        } else {
            win.innerHTML = "Computer..."
        }
}