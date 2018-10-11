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
        return "rock"
    } else if(comp === "paper") {
        pic.innerHTML = "<img src='img/paper.png'>"
        return "paper"
    } else if(comp === "scissors") {
        pic.innerHTML = "<img src='img/scissor.png'>"
        return "scissors"
    }
    
    // setTimeout(play, 500); 
}   

let comCho = computer();

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