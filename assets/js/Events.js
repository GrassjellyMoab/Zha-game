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
            document.getElementById('RPSend').style.display = 'block';
        }
        // User Loses
        else if (RpsChoice == move_dict[opp_move]) {
            document.getElementById('RPS-results2').innerHTML = 'CPU Wins!';
            turn = false;
            document.getElementById('RPSend').style.display = 'block';
        }

        if (RpsChoice == opp_move) {
            document.getElementById('RPS-results2').innerHTML = 'Its a Draw!';
            document.getElementById('RPSdraw').style.display = 'block';
        }
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


/* Zha Game */

var zha_moves = ["Human", "Gun", "Rock"];
var zha_moves_dict = {"Human": "Rock", "Rock": "Gun", "Gun": "Human", null: "none"};
var slideIndexLeft = 1;
var left_move;
showSlidesLeft(slideIndexLeft);

function plusSlidesLeft(n) {
  showSlidesLeft(slideIndexLeft += n);
}

function showSlidesLeft(n) {
  let i;
  let slides = document.getElementsByClassName("myslides1");
  if (n > slides.length) {slideIndexLeft = 1}    
  // if press left button
  if (n < 1) {slideIndexLeft = slides.length}
  // make all slides display='none'
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  // Show current slide
  slides[slideIndexLeft-1].style.display = "block";  
  left_move = zha_moves[slideIndexLeft-1];
}

/*-Right Hand--*/
// 0: Human, 1: Gun, 2: Rock
var slideIndexRight = 1;
var right_move;
showSlidesRight(slideIndexRight);

function plusSlidesRight(n) {
  showSlidesRight(slideIndexRight += n);
}


function showSlidesRight(n) { 
  let i;
  let slides = document.getElementsByClassName("myslides2");
  if (n > slides.length) {slideIndexRight = 1}    
  // if press left button
  if (n < 1) {slideIndexRight = slides.length}
  // make all slides display='none'
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  // Show current slide
  slides[slideIndexRight-1].style.display = "flex";  
  right_move = zha_moves[slideIndexRight-1]; 
}

// creating "Hand" Objects
var CPU_hands = {
  LeftMove: null,
  LeftStatus: true,
  RightMove: null,
  RightStatus: true
};

var USER_hands = {
  LeftMove: null,
  LeftStatus: true,
  RightMove: null,
  RightStatus: true
};

/*-----------------------------Zha-2nd-Part-----------------------------*/
// link img ids to moves
var UserZhaLeftIDs = {"Human": "zUSERL1", "Gun": "zUSERL2", "Rock": "zUSERL3", "Dead": "zUSERL4"};
var UserZhaRightIDs = {"Human": "zUSERR1", "Gun": "zUSERR2", "Rock": "zUSERR3", "Dead": "zUSERR4"};
var CpuZhaLeftIDs = {"Human": "zCPUL1", "Gun": "zCPUL2", "Rock": "zCPUL3", "Dead": "zCPUL4"};
var CpuZhaRightIDs = {"Human": "zCPUR1", "Gun": "zCPUR2", "Rock": "zCPUR3", "Dead": "zCPUR4"};
function zha_results() {
  console.log("turn:" + turn);
  // Display None Choice Part
  Array.from(document.getElementsByClassName('zha-split-half-vert')).forEach((el) => {
    el.style.display = 'none';
  });
  Array.from(document.getElementsByClassName('lock-in-button-container')).forEach((el) => {
    el.style.display = 'none';
  });
  // Show 2nd part with hands
  Array.from(document.getElementsByClassName('zha-split-half-hori')).forEach((el) => {
    el.style.display = 'flex';
  });
  Array.from(document.getElementsByClassName('zha-before-move')).forEach((el) => {
    el.style.display = 'block';
  });
  Array.from(document.getElementsByClassName('zha-shown-move')).forEach((el) => {
    el.style.display = 'none';
  });
  document.getElementById('zha-left-half').style.display = 'none';
  document.getElementById('zha-right-half').style.display = 'none';
  // get Username of player 
  document.getElementById('Zha-Username').innerHTML = localStorage.getItem("Username");
  
  // document.getElementById('zha-turn-end-continue').style.display = "block";

  // get CPU moves
  console.log("CPU LEFT STATUS: "+ CPU_hands.LeftStatus);
  console.log("CPU RIGHT STATUS: "+CPU_hands.RightStatus);
  console.log("USER LEFT STATUS: " + USER_hands.LeftStatus);
  console.log("USER RIGHT STATUS: " + USER_hands.RightStatus);
  if (CPU_hands.LeftStatus == true) {
    CPU_hands.LeftMove = zha_moves[Math.floor(Math.random()*3)];
  }

  if (CPU_hands.RightStatus == true) {
    CPU_hands.RightMove = zha_moves[Math.floor(Math.random()*3)];
  }

  if (USER_hands.LeftStatus == true) {
    USER_hands.LeftMove = left_move;
  }

  if (USER_hands.RightStatus == true) {
    USER_hands.RightMove = right_move;
  }

  // attacker and defender area
  let attacker = [null, null]
  let defender = [null, null]

  // initial hand gone
  setTimeout(() => {
    Array.from(document.getElementsByClassName('zha-before-move')).forEach((el) => {
      el.style.display = 'none';
    });
  }, 2000);

  // show user and cpu moves on hands
  setTimeout(() => {
    if (CPU_hands.LeftStatus) {
      document.getElementById(CpuZhaLeftIDs[CPU_hands.LeftMove]).style.display = 'block';
    }
    else {
      document.getElementById(CpuZhaLeftIDs["Dead"]).style.display = 'block';
    }

    if (CPU_hands.RightStatus) {
      document.getElementById(CpuZhaRightIDs[CPU_hands.RightMove]).style.display = 'block';
    }
    else {
      document.getElementById(CpuZhaRightIDs["Dead"]).style.display = 'block';
    }

    if (USER_hands.LeftStatus){
      document.getElementById(UserZhaLeftIDs[USER_hands.LeftMove]).style.display = 'block';
    }
    else {
      document.getElementById(UserZhaLeftIDs["Dead"]).style.display = 'block';
    }

    if (USER_hands.RightStatus){
      document.getElementById(UserZhaRightIDs[USER_hands.RightMove]).style.display = 'block';
    }
    else{
      document.getElementById(UserZhaRightIDs["Dead"]).style.display = 'block';
    }
  },2000)
  // If User's Turn
  console.log("User's moves:\n left: " + USER_hands.LeftMove + "\nright: " +USER_hands.RightMove);
  console.log("CPU's moves:\n left: " + CPU_hands.LeftMove + "\nright: " +CPU_hands.RightMove);
  setTimeout(() => {
    if (turn) {
      attacker[0] = USER_hands.LeftMove;
      attacker[1] = USER_hands.RightMove;
      defender[0] = CPU_hands.LeftMove;
      defender[1] = CPU_hands.RightMove;
      console.log("initially attacker:" + attacker);
      console.log("initially defender:" + defender);

      // attacker left hand attacks defender left if not right
      if (zha_moves_dict[attacker[0]] == defender[0]) {
        CPU_hands.LeftStatus = false;
        CPU_hands.LeftMove = null;
        defender[0] = null;
      }
      else if (zha_moves_dict[attacker[0]] == defender[1]) {
        CPU_hands.RightStatus = false;
        CPU_hands.RightMove = null;
        defender[1] = null;    
      }
      // attacker right hand attacks the defender left if not right
      if (zha_moves_dict[attacker[1]] == defender[0]) {
        CPU_hands.LeftStatus = false;
        CPU_hands.LeftMove = null;
        defender[0] = null;
      }
      else if (zha_moves_dict[attacker[1]] == defender[1]) {
        CPU_hands.RightStatus = false;
        CPU_hands.RightMove = null;
        defender[1] = null;    
      }
    }

    // if Opponents turn
    else {
      defender[0] = USER_hands.LeftMove;
      defender[1] = USER_hands.RightMove;
      attacker[0] = CPU_hands.LeftMove;
      attacker[1] = CPU_hands.RightMove;
      console.log("initially2 attacker:" + attacker);
      console.log("initially2 defender:" + defender);
      // attacker left hand attacks defender left if not right
      if (zha_moves_dict[attacker[0]] == defender[0]) {
        USER_hands.LeftStatus = false;
        USER_hands.LeftMove = null;
        defender[0] = null;
      }
      else if (zha_moves_dict[attacker[0]] == defender[1]) {
        USER_hands.RightStatus = false;
        USER_hands.RightMove = null;
        defender[1] = null;    
      }
      // attacker right hand attacks the defender left if not right
      if (zha_moves_dict[attacker[1]] == defender[0]) {
        USER_hands.LeftStatus = false;
        USER_hands.LeftMove = null;
        defender[0] = null;
      }
      else if (zha_moves_dict[attacker[1]] == defender[1]) {
        USER_hands.RightStatus = false;
        USER_hands.RightMove = null;
        defender[1] = null;    
      }
    }
  },2000);
  // check if dead
  setTimeout(() => {
    if (CPU_hands.LeftStatus == false) {
      document.getElementById('CPU_left_hand_zha').style.display = 'none';
      document.getElementById('CPU_left_hand_dead').style.display = 'block';
      document.getElementById(CpuZhaLeftIDs["Dead"]).style.display = 'block';
    }
    if (CPU_hands.RightStatus == false) {
      document.getElementById('CPU_right_hand_zha').style.display = 'none';
      document.getElementById('CPU_right_hand_dead').style.display = 'block';
      document.getElementById(CpuZhaRightIDs["Dead"]).style.display = 'block';
    }
    if (USER_hands.LeftStatus == false){
      document.getElementById('User_left_hand_zha').style.display = 'none';
      document.getElementById('User_left_hand_dead').style.display = 'block';
      document.getElementById(UserZhaLeftIDs["Dead"]).style.display = 'block';
    }
    if (USER_hands.RightStatus == false){
      document.getElementById('User_right_hand_zha').style.display = 'none';
      document.getElementById('User_right_hand_dead').style.display = 'block';
      document.getElementById(UserZhaRightIDs["Dead"]).style.display = 'block';
    }
    console.log("attacker:" + attacker);
    console.log("defender:" + defender);
  }, 6000)
  setTimeout(() => {
    // Continue
    if ((USER_hands.RightStatus == true || USER_hands.LeftStatus == true) && (CPU_hands.LeftStatus == true || CPU_hands.RightStatus == true)) {
      document.getElementById('zha-turn-end-continue').style.display = 'block';
    } 
    else {
      // outcome determined
      let block = document.getElementById('end-results');
      block.style.display = 'block';
      if (USER_hands.RightStatus == false && USER_hands.LeftStatus == false) {
        block.innerHTML = "Your Have Lost, Try Again Next Time."
      }
      if (CPU_hands.LeftStatus == false && CPU_hands.RightStatus == false) {
        block.innerHTML = "Congratulations, You Have Won!"
      }

    }
    // Victory

    // Defeat
    if (turn) {
      turn = false;
    }
    else {
      turn = true;
    }
  }, 7000)
}
// check whether dead hand in zha page 1 has already been appeneded so we dont append twice
// USER LEFT, USER RIGHT
var page1_death_hands = [0, 0];
function continue_zha() {
  document.getElementById('zha-turn-end-continue').style.display = 'none';
  Array.from(document.getElementsByClassName('zha-split-half-vert')).forEach((el) => {
    el.style.display = 'flex';
  });
  Array.from(document.getElementsByClassName('lock-in-button-container')).forEach((el) => {
    el.style.display = 'block';
  });
  // Show 2nd part with hands
  Array.from(document.getElementsByClassName('zha-split-half-hori')).forEach((el) => {
    el.style.display = 'none';
  });
  // display block for dead hands on 1st page
  document.getElementById('zha-left-half').style.display = 'block';
  document.getElementById('zha-right-half').style.display = 'block';
  // Get arr of 'zha-split-half-vert' to display none when hand is dead
  let vert_arr = document.getElementsByClassName('zha-split-half-vert');
  // check if right or left hand is dead
  if (USER_hands.LeftStatus == false && page1_death_hands[0] == 0) {
    // create dead hand image
    let img = document.createElement('img');
    img.src = "assets/css/css_images/temp-dead-hand-left.jpg";
    let block = document.getElementById("zha-left-half");
    block.style.display = 'block';
    block.appendChild(img);
    // make split half vert display none
    vert_arr[0].style.visibility = 'hidden';
    // add to the counter so that we know whether 'if block' has been ran before
    page1_death_hands[0] += 1;
  }
  if (USER_hands.RightStatus == false && page1_death_hands[1] == 0) {
    let img = document.createElement('img');
    img.src = "assets/css/css_images/temp-dead-hand-right.jpg";
    let block = document.getElementById("zha-right-half");
    block.style.display = 'block';
    block.appendChild(img);
    // make split half vert display none
    vert_arr[1].style.visibility = 'hidden';
    // add to the counter so that we know whether 'if block' has been ran 
    page1_death_hands[1] += 1;
  }
  slideIndexLeft = 1;
  slideIndexRight = 1;
}