// ------------------------------------------------INTRO------------------------------------------------------

// First intro text appear and disappear
function disappear() {
    let obj = document.getElementById('intro-animate');
    obj.style.display= 'none';
}   

function fadeout() {
    let obj = document.getElementById('intro-animate');
    obj.classList.add('fade-out');
}

// let text below appear later
window.onload = setTimeout(function() {
    let obj = document.getElementById('Second');
    obj.style.visibility = 'visible'
}, 2500)

// let text ease out
window.onload = setTimeout(fadeout, 5000);
window.onload = setTimeout(disappear, 8000);


// once the intro text disappear username appears
function appear() {
    let obj = document.getElementById('username');
    obj.style.display = 'block';
}

function fadein() {
    let obj = document.getElementById('username');
    obj.classList.add('fade-in')
}

// Username event begins
window.onload = setTimeout(fadein,8500)
window.onload = setTimeout(appear,8500)

function usernamecheck() {
    var username = document.getElementById('userinput').value;
    localStorage.setItem("Username", username);
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    // no special characters
    if (format.test(username)){
        document.getElementById('error').style.display = 'block';
        return;
    }
    else {
        document.getElementById('error').style.display = 'none';
        // let intro-window fade out and RPS fade-in
        let obj = document.getElementById('username');
        obj.classList.remove('fade-in');
        obj.classList.add('fade-out-faster');
        setTimeout(() => {
            document.getElementById('username').style.display = 'none';
        }, 1000);

        let obj2 = document.getElementById('rock-paper-scissors-window');
        obj2.classList.add('fade-in-faster');
        setTimeout(() => {
            document.getElementById('rock-paper-scissors-window').style.display = 'block';
        }, 1000);
       setTimeout(() => {
            document.getElementById('intro-window').style.display = 'none';
       }, 1001);
        
    
    }
}
// Enter key to trigger button for input
var input = document.getElementById('username');
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("UsernameBtn").click();
  }
});






// ------------------------------------------- Rock Paper Scissors Game -----------------------------------------------------//
// what moves beats what
var move_dict = {"Rock": "Scissors", "Scissors": "Paper", "Paper": "Rock"};
// movelist
var options = ["Rock", "Paper","Scissors"];
var opp_options = {"Rock": "Opp_Rock", "Scissors": "Opp_Scissors", "Paper": "Opp_Paper"};
var user_options = {"Rock": "User_Rock", "Scissors": "User_Scissors", "Paper": "User_Paper"};
var gifUser = "/Users/yanyixue/Desktop/HTML, CSS, JS/Zha-game/assets/imgs/RpsUSERgif.gif";
var gifCPU = "/Users/yanyixue/Desktop/HTML, CSS, JS/Zha-game/assets/imgs/RpsCPUgif.gif";
var turn;

// gif animate again when game resets
function resetGif(id) {
    var img = document.getElementById(id);
    var imageUrl = img.src;
    img.src = "";
    img.src = imageUrl;
};

function RPSchoice(RpsChoice) {
    // start gif for rps
    document.getElementById('RPSchoices').style.display = 'none';

    document.getElementById('userRPS').style.display = 'block';
    document.getElementById('cpuRPS').style.display = 'block';
    resetGif('RPSgifUser');
    resetGif('RPSgifCPU');
    document.getElementById('RPSusername').style.display = 'inline-block';
    document.getElementById('RPSusername').innerHTML = localStorage.getItem("Username");
    document.getElementById('RPScpuname').style.display = 'inline-block';

    // retrieve user's RPS choice
    console.log(RpsChoice);
    // value of opponents move
    let opp_move = options[Math.floor(Math.random() * 3)];
    localStorage.setItem("oppRPSmove", opp_move);
    localStorage.setItem("UserRPSmove", RpsChoice);

    // play RPS move animations
    setTimeout(() => {
        document.getElementById('RPSgifCPU').style.display = 'none';
        document.getElementById('RPSgifUser').style.display = 'none';
        document.getElementById(opp_options[opp_move]).style.display = 'block';
        document.getElementById(user_options[RpsChoice]).style.display = 'block';
    }, 1300);


    // User wins
    setTimeout(() => {
        document.getElementById('RPS-results').style.display = 'block';
        console.log(opp_move);
        console.log(RpsChoice);
        if (opp_move == move_dict[RpsChoice]) {
            document.getElementById('RPS-results2').innerHTML = 'User Wins!';
            turn = true;
        }
        // User Loses
        else if (RpsChoice == move_dict[opp_move]) {
            document.getElementById('RPS-results2').innerHTML = 'CPU Wins!';
            turn = false;
        }

        if (RpsChoice == opp_move) {
            document.getElementById('RPS-results2').innerHTML = 'Its a Draw!';
            document.getElementById('RPSdraw').style.display = 'block';
        }
        console.log(loop_condition);
    }, 1400);
};

// if draw reset game.
function drawgame() {
    document.getElementById('RPSchoices').style.display = 'flex';
    document.getElementById('userRPS').style.display = 'none';
    document.getElementById('cpuRPS').style.display = 'none';
    document.getElementById('RPSusername').style.display = 'none';
    document.getElementById('RPScpuname').style.display = 'none';
    document.getElementById('RPS-results').style.display = 'none';
    document.getElementById('RPSdraw').style.display = 'none';
    document.getElementById(opp_options[localStorage.getItem("oppRPSmove")]).style.display = 'none';
    document.getElementById(user_options[localStorage.getItem("UserRPSmove")]).style.display = 'none';
    document.getElementById('RPSgifUser').style.display = 'block';
    document.getElementById('RPSgifCPU').style.display = 'block';
};
