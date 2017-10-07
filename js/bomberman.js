//create a function to move gambit

alert("its a 2 player game. Control Gambit with the arrow keys and wolverine with W,A,S,D. Whoever gets the most points for catching the enemy wins!!!");

// document.onkeydown = moveGambit;
// var xman = document.getElementById("xman");
//
// var pTop = 0;
// var pLeft = 0;
//
// function moveGambit(e) {
//   console.log(e.keyCode);
//
//   if (e.keyCode == 40) {
//     pTop +=10;
//     xman.style.top = pTop + 'px';
//   }
//   if (e.keyCode == 37) {
//     pLeft -= 10;
//     xman.style.left= pLeft + 'px';
//   }
//   if (e.keyCode == 38) {
//     pTop -= 10;
//     xman.style.top = pTop + 'px';
//
//   }
//   if (e.keyCode == 39) {
//     pLeft += 10;
//     xman.style.left = pLeft + "px"
//   }
// }


// function moveGambitDown() {
//   console.log("yo yo", pTop, pBottom);
//   console.log((parseInt(pTop.replace(/px/,""))+50) + "px");
//   xman.style.top = (parseInt(.replace(/px/,""))+50) + "px"
//   pBottom = xman.style.top;
// }

//time countdown
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.text(minutes + ":" + seconds);
    if (--timer < 0) {
      $(".gameOver").fadeIn(0);
      alert("THANKS FOR PLAYING");
      timer = duration;
    }
  }, 1000);

}



jQuery(function ($) {
  var fiveMinutes = 60 * 1,
  display = $('#time');
  startTimer(fiveMinutes, display);

});



//score update
var add = 0;

function score1(){
  add = add -(-1);
  $("#player1score").html("P1: " + add);

}

var add2 = 0;

function score2(){
  add2 = add2 -(-1);
  $("#player2score").html("P2: " + add2);
}



var sabretoothTop = 0;
var sabretoothLeft = 0;



var bobLeft = 0;
var bobTop = 0;
var shouldMoveGambit = false;

var map = {}; // You could also use an array
onkeydown = onkeyup = function(e){
  e = e || event; // to deal with IE
  map[e.keyCode] = e.type == 'keydown';
  /* insert conditional here */
}

//enemy detection


function enemydetection(){
  var bobright= bobLeft+264;
  var bobBottom= bobTop+155;

  var sabretoothright= sabretoothLeft+50;
  var sabretoothBottom= sabretoothTop+150;

  if (bobLeft <= sabretoothright && bobLeft >= sabretoothLeft && bobTop <= sabretoothBottom && bobTop >= sabretoothTop-100 ){
    return true;
  }else {
    return false;
  }
}
//enemy detection venom
function enemydetectionvenom(){
  var bobright= bobLeft+264;
  var bobBottom= bobTop+155;

  var venomright= venomLeft+306;
  var venomBottom= venomTop+223;

  if (bobLeft <= venomright && bobLeft >= venomLeft && bobTop <= venomBottom && bobTop >= venomTop-100 ){
    return true;
  }else {
    return false;
  }
}



//player 2 enemy detection

function enemydetection2(){
  var wolvRight= wolvLeft+296;
  var wolvBottom= wolvTop+200;

  var sabretoothright= sabretoothLeft+50;
  var sabretoothBottom= sabretoothTop+150;

  if (wolvLeft <= sabretoothright && wolvLeft >= sabretoothLeft && wolvTop <= sabretoothBottom && wolvTop >= sabretoothTop-100 ){
    return true;
  }else {
    return false;
  }
}
//enemy detection venom player2
function enemydetectionvenom2(){
  var wolvRight= wolvLeft+296;
  var wolvBottom= wolvTop+200;

  var venomright= venomLeft+306;
  var venomBottom= venomTop+223;

  if (wolvLeft <= venomright && wolvLeft >= venomLeft && wolvTop <= venomBottom && wolvTop >= venomTop-100 ){
    return true;
  }else {
    return false;
  }
}

//gambit movement with edges

function moveGambit(){

  if(map[39] == true) {
    // alert("yo");
    bobLeft+=10;
    if (bobLeft+264 <= window.innerWidth){
      $("#xman").css("left",bobLeft + "px");
    } else{
      bobLeft-=10;
    }

  }

  if(map[37] == true) {
    // alert("yo");
    bobLeft-=10;
    if (bobLeft >= 0){
      $("#xman").css("left",bobLeft + "px");
    }else{
      bobLeft+=10;
    }

  }

  if(map[38] == true) {
    // alert("yo");
    bobTop-=10;
    if (bobTop >=0){
      $("#xman").css("top",bobTop + "px");
    }else{
      bobTop+=10;
    }

  }
  if(map[40] == true) {
    // alert("yo");
    bobTop+=10;
    if(bobTop+155 <=window.innerHeight){
      $("#xman").css("top",bobTop + "px");
    }else{
      bobTop-=10;
    }

  }


  //score update
  var collision = enemydetection();
  console.log(collision)
  if (collision == true) {
    score1();
    console.log("YOU CAUGHT THE ENEMY");
    if (add > 10 ) {
      $("#venom").css("display","block");

      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      }
//score update venom
// var collisionvenom = enemydetectionvenom();
// console.log(collisionvenom)
// if (collisionvenom == true) {
//   score1();
//   console.log("YOU CAUGHT THE ENEMY");
// }

      // setInterval(enemyMoveVenom,getRandomInt(5000,5000));
      // function enemyMoveVenom(){
      //   venomTop = Math.random ()*500;
      //   venomLeft= Math.random ()*500;
      //   $("#venom").css("top", venomTop);
      //   $("#venom").css("left", venomLeft);
      //
      // }
    }
  }
  //player2 score update
  // var collision2 = enemydetection2();
  //   console.log(collision2)
  // if (collision2 == true) {
  //     score2();
  //     console.log("PLAYER2 CAUGHT THE ENEMY");
  // }
  var collisionvenom = enemydetectionvenom();
  console.log(collisionvenom)
  if (collisionvenom == true) {
    score1();
    console.log("YOU CAUGHT THE ENEMY");
  }
}


$(document).keydown(function(e){
  onkeydown(e);
  moveGambit();
  moveWolverine();
});
$(document).keyup(function(e){
  onkeyup(e);
  moveGambit();
  moveWolverine();
});
//   setTimeout(function () {
//     moveGambit(e);
//   }, 0);
// });
var wolvLeft = 0;
var wolvTop = 0;
function moveWolverine(){
  if(map[68] == true) {
    // alert("yo");
    wolvLeft+=10;
    if (wolvLeft+296 <= window.innerWidth){
      $("#wolverine1").css("left",wolvLeft + "px");
    } else{
      wolvLeft-=10;
    }
  }

  if(map[65] == true) {
    // alert("yo");
    wolvLeft-=10;
    if (wolvLeft >= 0){
      $("#wolverine1").css("left",wolvLeft + "px");
    }else{
      wolvLeft+=10;
    }
  }

  if(map[87] == true) {
    // alert("yo");
    wolvTop-=10;
    if (wolvTop >=0){
      $("#wolverine1").css("top",wolvTop + "px");
    }else{
      wolvTop+=10;
    }
  }

  if(map[83] == true) {
    // alert("yo");
    wolvTop+=10;
    if(wolvTop+200 <=window.innerHeight){
      $("#wolverine1").css("top",wolvTop + "px");
    }else{
      wolvTop-=10;
    }
  }

  //player2 score update
  var collision2 = enemydetection2();
  console.log(collision2)
  if (collision2 == true) {
    score2();
    console.log("PLAYER2 CAUGHT THE ENEMY");
    if (add2 > 10 ) {
      $("#venom").css("display","block");

      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      }


      // setInterval(enemyMoveVenom,getRandomInt(5000,5000));
      // function enemyMoveVenom(){
      //   venomTop = Math.random ()*500;
      //   venomLeft= Math.random ()*500;
      //   $("#venom").css("top", venomTop);
      //   $("#venom").css("left", venomLeft);
      //
      // }
    }
  }
  var collisionvenom2 = enemydetectionvenom2();
  console.log(collisionvenom2)
  if (collisionvenom2 == true) {
    score1();
    console.log("YOU CAUGHT THE ENEMY");
  }
}
//enemy movement
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


setInterval(enemyMove,getRandomInt(2000,2000));
function enemyMove(){
  sabretoothTop = Math.random ()*700;
  sabretoothLeft= Math.random ()*700;
  $("#sabretooth").css("top", sabretoothTop);
  $("#sabretooth").css("left", sabretoothLeft);

}

setInterval(enemyMoveVenom,getRandomInt(5000,5000));
function enemyMoveVenom(){
  venomTop = Math.random ()*500;
  venomLeft= Math.random ()*500;
  $("#venom").css("top", venomTop);
  $("#venom").css("left", venomLeft);

}


$("#sabretooth").on("click", function() {
  userTop = Math.random ()*500;
  userLeft= Math.random ()*500;
  $(this).css("top", userTop);
  $(this).css("left", userLeft);
});
// venom
$("#venom").on("click", function() {
  userTop = Math.random ()*700;
  userLeft= Math.random ()*700;
  $(this).css("top", userTop);
  $(this).css("left", userLeft);
});
//magneto
$("#magneto").on("click", function() {
  userTop = Math.random ()*1000;
  userLeft= Math.random ()*1000;
  $(this).css("top", userTop);
  $(this).css("left", userLeft);
});
//bobLeft <= sabretoothright && bobLeft >= sabretoothLeft && bobTop <= sabretoothBottom && bobTop >= sabretoothTop-100
//venom movement
// setInterval(tick,getRandomInt(500,500));
//
// function tick(){
//   console.log("collsion: " + collision)
//   if (collision == true) {
//     score1();
//     if (add > 10) {
//       $("#venom").css("display","block");
//     }
//   console.log("collision2: " + collision2)
//   }
//   if (collision2 == true) {
//     score2();
//     if (add > 10) {
//       $("#venom").css("display","block");
//     }
//   }
// }
