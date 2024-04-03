// backgroundmusic
var backgroundmusic1 = new Audio("backgroundmusic1.mp3");
backgroundmusic1.loop = true;
var backgroundmusic2 = new Audio("backgroundmusic2.mp3");
backgroundmusic2.loop = true;
var backgroundmusic3 = new Audio("backgroundmusic3.mp3");
backgroundmusic3.loop = true;
var backgroundmusic4 = new Audio("backgroundmusic4.mp3");
backgroundmusic4.loop = true;
var backgroundmusic5 = new Audio("backgroundmusic5.mp3");
backgroundmusic5.loop = true;



var ninjaAttackSound = new Audio("ninjaAttack.mp3");
var ninjaJumpSound = new Audio("ninjaJump.mp3");
var ninjaJumpAttackSound = new Audio("ninjaJumpAttack.mp3");
var zombiWalkSound = new Audio("zombiWalk.mp3");
zombiWalkSound.loop = true;
var zombiAttackSound = new Audio("zombiAttack.mp3");
zombiAttackSound.loop = true;
var gameOverSound = new Audio("gameover.mp3"); 

var keycode = 0 ;
var pageNumber = 0;


function clickScreen(){
    if(keycode == 0 & pageNumber == 0){
           backgroundmusic1.play();
           backgroundmusic2.pause();
           backgroundmusic3.pause();   
    }    
}

var openingPage = document.getElementById("openingPage");
var startButton = document.getElementById("startButton");
var gamePage = document.getElementById("gamePage");
var menu = document.getElementById("menu");
var menu1 = document.getElementById("menuBar");
var menuSlide = document.getElementById("menuSlide");
var ninjaImage1 = document.getElementById("ninjaImage1");
var zombiImage1 = document.getElementById("zombiImage1");
var restart = document.getElementById("restart");
var gameSetting1 = document.getElementById("gameSetting1");
var ninjaHealth = document.getElementById("ninjaHealth");
var zombiHealth = document.getElementById("zombiHealth");
var ninjaHealthBar = document.getElementById("ninjaHealthBar");
var zombiHealthBar = document.getElementById("zombiHealthBar");
var score = document.getElementById("score");
var endingPage = document.getElementById("endingPage");
var win_fail = document.getElementById("win_fail");
var background4 = document.getElementById("background4");





function startGame(){
    if(ninjaHealthLevel == 0 || zombiHealthLevel == 0){
        endPage();
    }
    menu.style.visibility = "visible";
    pageNumber = 1;
    backgroundmusic1.pause()
    backgroundmusic3.pause();;
    backgroundmusic2.play();
    // alert("yes");
    menuSlide.style.visibility = "hidden";
    openingPage.style.visibility = "hidden";
    startButton.style.visibility = "hidden";
    menu1.style.visibility = "hidden";
    gamePage.style.visibility = "visible";
    ninjaImage1.style.visibility = "visible";
    zombiImage1.style.visibility = "visible";
    restart.style.visibility = "hidden";
    ninjaHealth.style.visibility = "visible";
    zombiHealth.style.visibility = "visible";
    ninjaHealthBar.style.visibility = "visible";
    zombiHealthBar.style.visibility = "visible";
    score.style.visibility = "visible";

    


    
    
    startButton.style.marginLeft = "580px";
    startButton.style.marginTop = "400px";

    ninjaImage1.style.marginLeft = "-40px";
    ninjaImage1.style.marginTop = "-80px";
    
    zombiImage1.style.marginLeft = "1060px";
    zombiImage1.style.marginTop = "-80px";

    ninjaImage1.style.width = "200px";
    ninjaImage1.style.height = "120px";
    zombiImage1.style.width = "200px";
    zombiImage1.style.height = "120px";
    zombiWalkAction();
    

}

function openMenu(){
    backgroundmusic1.pause();
    backgroundmusic2.pause();
    zombiAttackSound.pause();
    zombiWalkSound.pause();
    backgroundmusic3.play();
    menuSlide.style.visibility = "visible";
    openingPage.style.visibility = "hidden";
    startButton.style.visibility = "visible";
    gamePage.style.visibility = "hidden";
    menu1.style.visibility = "visible";
    ninjaImage1.style.visibility = "visible";
    zombiImage1.style.visibility = "hidden";
    restart.style.visibility = "visible";
    menu.style.visibility = "hidden";
    
    score.style.visibility = "hidden";
    // gameSetting.style.visibility = "visible";

    ninjaHealth.style.visibility = "hidden";
    zombiHealth.style.visibility = "hidden";
    ninjaHealthBar.style.visibility = "hidden";
    zombiHealthBar.style.visibility = "hidden";
    

    startButton.style.marginLeft = "50px";
    startButton.style.marginTop = "240px";

    ninjaImage1.style.marginLeft = "-110px";
    ninjaImage1.style.marginTop = "-80px";

    
    if(pageNumber == 1){
        startButton.innerHTML = "Resume";
        
        
    }
    pageNumber = 2;
    
    
}


function endPage(){

    backgroundmusic1.pause();
    backgroundmusic2.pause();
    backgroundmusic3.pause();
    zombiAttackSound.pause();
    if(ninjaHealthLevel == 0){
        backgroundmusic5.play();
        background4.style.visibility = "visible";

    
    }
    else if(zombiHealthLevel == 0){
        backgroundmusic4.play();
        background4.src = "background5.png";
        
    }
    openingPage.style.visibility = "hidden";
    startButton.style.visibility = "visible";
    
    gamePage.style.visibility = "hidden";
    menu1.style.visibility = "visible";
    ninjaImage1.style.visibility = "hidden";
    zombiImage1.style.visibility = "hidden";
    restart.style.visibility = "hidden";
    gameSetting1.style.visibility = "hidden";
    menu.style.visibility = "hidden";
    score.style.visibility = "hidden";
    endingPage.style.visibility = "visible";
    ninjaHealth.style.visibility = "hidden";
    zombiHealth.style.visibility = "hidden";
    ninjaHealthBar.style.visibility = "hidden";
    zombiHealthBar.style.visibility = "hidden";
    
    background4.style.visibility = "visible";

    startButton.style.marginLeft = "580px";
    startButton.style.marginTop = "400px";

    
    
    
}









function reload(){
    location.reload();
}

function gameSetting(){
    alert("Coming Soon");
}







var keycode = 0 ;

//WorkerId
var ninjaIdleWorkerId = 0;
var ninjaRunWorkerId = 0;
var ninjaJumpWorkerId = 0;
var moveBackgroundWorkerId = 0;
var ninjaForwardWorkerId = 0;
var ninjaBackWorkerId = 0;
var ninjaAttackWorkerId = 0;
var ninjaJumpAttackWorkerId = 0;
var ninjaDeadWorkerId = 0;

var zombiIdleWorkerId = 0;
var zombiWalkWorkerId = 0;
var zombiAttackWorkerId = 0;
var zombiForwardWorkerId = 0;
var zombiBackWorkerId = 0;
var zombiDeadWorkerId = 0;

//Action function

function backgroundAction(){
    if(moveBackgroundWorkerId == 0){
        moveBackgroundWorkerId = setInterval(moveBackground,100);
    }
}

function ninjaIdleAction(){
    if(ninjaIdleWorkerId == 0){
        // clearInterval
        clearInterval(ninjaRunWorkerId);  
        clearInterval(ninjaJumpWorkerId); 
        clearInterval(moveBackgroundWorkerId);
        clearInterval(ninjaForwardWorkerId);
        clearInterval(ninjaBackWorkerId);
        clearInterval(ninjaAttackWorkerId);
        clearInterval(ninjaJumpAttackWorkerId);
        
        // setInterval
        ninjaIdleWorkerId = setInterval(ninjaIdle ,100);

        // WorkerId = 0
        ninjaJumpWorkerId = 0;
        ninjaRunWorkerId = 0;
        moveBackgroundWorkerId = 0;
        ninjaForwardWorkerId = 0;
        ninjaBackWorkerId = 0;
        ninjaAttackWorkerId = 0;
        ninjaJumpAttackWorkerId = 0;

        // ninjaIdleAction

    }
}

function ninjaRunAction(){
    if(ninjaRunWorkerId == 0){
        backgroundAction();
        // clearInterval
        clearInterval(ninjaIdleWorkerId);  
        clearInterval(ninjaJumpWorkerId);  
        clearInterval(ninjaForwardWorkerId);
        clearInterval(ninjaBackWorkerId);
        clearInterval(ninjaAttackWorkerId);
        clearInterval(ninjaJumpAttackWorkerId);

        // setInterval
        ninjaRunWorkerId = setInterval(ninjaRun ,100);
        
        // WorkerId = 0
        ninjaJumpWorkerId = 0;
        ninjaIdleWorkerId = 0;
        ninjaForwardWorkerId = 0;
        ninjaBackWorkerId = 0;
        ninjaAttackWorkerId = 0;
        ninjaJumpAttackWorkerId = 0;


        // ninjaRunAction 
    }    
}

function ninjaJumpAction(){
    if(ninjaJumpWorkerId == 0){
        // clearInterval
        ninjaJumpSound.play();
        ninjaJumpAttackSound.pause();
        ninjaAttackSound.pause();
        // backgroundAction();
        clearInterval(ninjaIdleWorkerId);
        clearInterval(ninjaRunWorkerId);
        clearInterval(ninjaForwardWorkerId);
        clearInterval(ninjaBackWorkerId);
        clearInterval(ninjaAttackWorkerId);
        clearInterval(ninjaJumpAttackWorkerId);
        
        //  setInterval
        ninjaJumpWorkerId =setInterval(ninjaJump,100);
        
        // WorkerId = 0
        ninjaRunWorkerId = 0;
        ninjaIdleWorkerId = 0 ;
        ninjaForwardWorkerId = 0;
        ninjaBackWorkerId = 0;
        ninjaAttackWorkerId = 0;
        ninjaJumpAttackWorkerId = 0;


        // ninjaJumpAction
    }
}


function ninjaForwardAction(){
    if(ninjaForwardWorkerId == 0){
        backgroundAction();
        // clearInterval
        clearInterval(ninjaIdleWorkerId);  
        clearInterval(ninjaJumpWorkerId);  
        clearInterval(ninjaBackWorkerId);
        clearInterval(ninjaRunWorkerId);
        clearInterval(ninjaAttackWorkerId);
        clearInterval(ninjaJumpAttackWorkerId);
        
        //  setInterval
        ninjaForwardWorkerId = setInterval(ninjaForward,100);
        
        // WorkerId = 0
        ninjaJumpWorkerId = 0;
        ninjaIdleWorkerId = 0;
        ninjaBackWorkerId = 0;
        ninjaRunWorkerId = 0;
        ninjaAttackWorkerId = 0;
        ninjaJumpAttackWorkerId = 0;


        // ninjaForwardAction
    }
}

function ninjaBackAction(){
    if(ninjaBackWorkerId == 0){
        backgroundAction();
        // clearInterval
        clearInterval(ninjaIdleWorkerId);  
        clearInterval(ninjaJumpWorkerId);  
        clearInterval(ninjaForwardWorkerId);
        clearInterval(ninjaRunWorkerId);
        clearInterval(ninjaAttackWorkerId);
        clearInterval(ninjaJumpAttackWorkerId);
        
        // setInterval
        ninjaBackWorkerId = setInterval(ninjaBack,100);
        
        // WorkerId = 0
        ninjaJumpWorkerId = 0;
        ninjaIdleWorkerId = 0;
        ninjaForwardWorkerId = 0;
        ninjaRunWorkerId = 0;
        ninjaAttackWorkerId = 0;
        ninjaJumpAttackWorkerId = 0;


        // ninjaForwardAction
    }
}

function ninjaAttackAction(){
    if(ninjaAttackWorkerId == 0){
        ninjaJumpSound.pause();
        ninjaJumpAttackSound.pause();
        ninjaAttackSound.play();
        // clearInterval
        clearInterval(ninjaRunWorkerId);  
        clearInterval(ninjaJumpWorkerId); 
        clearInterval(moveBackgroundWorkerId);
        clearInterval(ninjaForwardWorkerId);
        clearInterval(ninjaBackWorkerId);
        clearInterval(ninjaIdleWorkerId);
        clearInterval(ninjaJumpAttackWorkerId);
        
        // setInterval
        ninjaAttackWorkerId = setInterval(ninjaAttack,100);
        
        // WorkerId = 0
        ninjaJumpWorkerId = 0;
        ninjaRunWorkerId = 0;
        moveBackgroundWorkerId = 0;
        ninjaForwardWorkerId = 0;
        ninjaBackWorkerId = 0;
        ninjaRunWorkerId = 0;
        ninjaIdleWorkerId = 0;
        ninjaJumpAttackWorkerId = 0;

        // ninjaAttackAction

    }
}

function ninjaJumpAttackAction(){
    if(ninjaJumpAttackWorkerId == 0){
        backgroundAction();
        ninjaJumpSound.pause();
        ninjaAttackSound.pause();
        ninjaJumpAttackSound.play();

        
        // clearInterval
        clearInterval(ninjaRunWorkerId);  
        clearInterval(ninjaJumpWorkerId); 
        clearInterval(ninjaForwardWorkerId);
        clearInterval(ninjaBackWorkerId);
        clearInterval(ninjaIdleWorkerId);
        clearInterval(ninjaAttackWorkerId);

        // setInterval
        ninjaJumpAttackWorkerId = setInterval(ninjaJumpAttack,100);   
        
        // WorkerId = 0
        ninjaJumpWorkerId = 0;
        ninjaRunWorkerId = 0;
        ninjaForwardWorkerId = 0;
        ninjaBackWorkerId = 0;
        ninjaRunWorkerId = 0;
        ninjaIdleWorkerId = 0;
        ninjaAttackWorkerId = 0;

        // ninjaJumpAttackAction


    }
}

function ninjaDeadAction(){
    if(ninjaDeadWorkerId == 0){
        ninjaJumpSound.pause();
        ninjaAttackSound.pause();
        ninjaJumpAttackSound.pause();
        gameOverSound.play();
        

        clearInterval(ninjaIdleWorkerId);
        clearInterval(ninjaRunWorkerId);
        clearInterval(ninjaJumpWorkerId);
        clearInterval(moveBackgroundWorkerId);
        clearInterval(ninjaForwardWorkerId);
        clearInterval(ninjaBackWorkerId);
        clearInterval(ninjaAttackWorkerId);
        clearInterval(ninjaJumpAttackWorkerId);
        
        // setInterval(ninjaDead,100);
        ninjaDead();
        // reload();
        // alert("Game Over");
        endPage();
    }
}







function zombiIdleAction(){
    if(zombiIdleWorkerId == 0){
        // clearInterval
        clearInterval(zombiWalkWorkerId);  
        clearInterval(zombiAttackWorkerId);
        clearInterval(zombiForwardWorkerId);
        clearInterval(zombiBackWorkerId);
        
        // setInterval
        zombiIdleWorkerId = setInterval(zombiIdle ,100);
       
        // WorkerId = 0
        zombiWalkWorkerId = 0;
        zombiAttackWorkerId = 0;
        zombiForwardWorkerId = 0;
        zombiBackWorkerId = 0;

        // zombiIdleAction

    }
}

function zombiWalkAction(){
    if(zombiWalkWorkerId == 0){
        // alert(ninja_zombi_gap);
        // clearInterval
        zombiWalkSound.play();
        zombiAttackSound.pause();


        clearInterval(zombiIdleWorkerId);  
        clearInterval(zombiAttackWorkerId);
        clearInterval(zombiForwardWorkerId);
        clearInterval(zombiBackWorkerId);

        // setInterval
        zombiWalkWorkerId = setInterval(zombiWalk ,100);
        
        // WorkerId = 0
        zombiIdleWorkerId = 0;
        zombiAttackWorkerId = 0;
        zombiForwardWorkerId = 0;
        zombiBackWorkerId = 0;


        // zombiWalkAction 
    }    
}


function zombiAttackAction(){
    if(zombiAttackWorkerId == 0){
        // clearInterval
        zombiWalkSound.pause();
        zombiAttackSound.play();

        clearInterval(zombiWalkWorkerId);  
        clearInterval(zombiIdleWorkerId);
        clearInterval(zombiForwardWorkerId);
        clearInterval(zombiBackWorkerId);
        
        // setInterval
        zombiAttackWorkerId = setInterval(zombiAttack,100);
        
        // WorkerId = 0
        zombiWalkWorkerId = 0;
        zombiIdleWorkerId = 0;
        zombiForwardWorkerId = 0;
        zombiBackWorkerId = 0;

        // zombiAttackAction

    }
}


function zombiForwardAction(){
    if(zombiForwardWorkerId == 0){
        // clearInterval
        clearInterval(zombiIdleWorkerId);  
        clearInterval(zombiBackWorkerId);
        clearInterval(zombiWalkWorkerId);
        clearInterval(zombiAttackWorkerId);

        
        
        //  setInterval
        zombiForwardWorkerId = setInterval(zombiForward,100);
        
        // WorkerId = 0
        zombiIdleWorkerId = 0;
        zombiBackWorkerId = 0;
        zombiWalkWorkerId = 0;
        zombiAttackWorkerId = 0;
        


        // zombiForwardAction
    }
}

function zombiBackAction(){
    if(zombiBackWorkerId == 0){
        // clearInterval
        clearInterval(zombiIdleWorkerId);  
        clearInterval(zombiForwardWorkerId);
        clearInterval(zombiWalkWorkerId);
        clearInterval(zombiAttackWorkerId);
        
        // setInterval
        zombiBackWorkerId = setInterval(zombiBack,100);
        
        // WorkerId = 0
        zombiIdleWorkerId = 0;
        zombiForwardWorkerId = 0;
        zombiWalkWorkerId = 0;
        zombiAttackWorkerId = 0;


        // zombiForwardAction
    }
}



function zombiDeadAction(){
    if(ninjaDeadWorkerId == 0){
        zombiWalkSound.pause();
        zombiAttackSound.pause();
        gameOverSound.play();
        clearInterval(zombiIdleWorkerId);
        clearInterval(zombiWalkWorkerId);
        clearInterval(zombiForwardWorkerId);
        clearInterval(zombiBackWorkerId);
        clearInterval(zombiAttackWorkerId);
        
        // setInterval(zombiDead,100);
        ninjaDead();
        // reload();
        // alert("Game Over");
        endPage();
    }
}







// keycheck    
function keycheck(event){
    keycode = event.which;
    // alert(keycode);
    
    if(keycode == 32){
        // alert("space");
        ninjaJumpAttackAction();
        // createZombiAction();
        
    }
    if(keycode == 13){
        // alert("enter");
        ninjaAttackAction();
    }
    if(keycode == 16){
        // alert("shift");
        ninjaRunAction();
    }
    if(keycode == 38){
        // alert("up arrow");
        ninjaJumpAction();
    }
    if(keycode == 40){
        // alert("down arrow");
        ninjaIdleAction();
    }
    if(keycode == 39){
        // alert("rigth arrow");
        ninjaForwardAction();
       
    }
    if(keycode == 37){
        // alert("left arrow");
        ninjaBackAction();
    }
    if(keycode == 83){
        // alert("S key");
        zombiIdleAction();
    }
    if(keycode == 87){
        // alert("W key");
        zombiAttackAction();
        
    }
    if(keycode == 68){
        // alert("D key");
        zombiBackAction();
    }
    if(keycode == 65){
        // alert("A key");x
        zombiWalkAction();
        
    }
    if(keycode == 88){
        // alert("X key");
        // setInterval(figth,100);
        ninjaDeadAction();
        zombiDeadAction();
    }
}


if(keycode == 0){
    // backgroundSound.play();
    if(ninjaIdleWorkerId == 0 || zombiIdleWorkerId == 0){
    
    ninjaIdleWorkerId = setInterval(ninjaIdle,100);
    zombiIdleWorkerId = setInterval(zombiIdle ,100);

    }   
}



var ninja = document.getElementById("ninja");

// ninjaImageNumber
var ninjaIdleImageNumber = 1;
var ninjaRunImageNumber = 1;
var ninjaJumpImageNumber = 1;
var ninjaAttackImageNumber = 1;
var ninjaJumpAttackImageNumber = 1 ;
var ninjaDeadImageNumber = 1;


var a ="idle";


// ninija function
function ninjaIdle(){  
    a = "Idle";
    ninja.src = "Ninja B "+a+" ("+ninjaIdleImageNumber+").png";
    ninjaIdleImageNumber++;
    if(ninjaIdleImageNumber == 11){
        ninjaIdleImageNumber = 1;
    }
    ninja.style.marginTop = "334px";
    ninja.style.height = "200px";
}


var ninjaMarginLeft = 100 ;
var ninjaRunForward = 0;
var backNumber = 10;

function ninjaRun(){  
     
    a = "Run";
    ninja.src = "Ninja B "+a+" ("+ninjaRunImageNumber+").png";
    ninjaRunImageNumber++;
    ninjaMarginLeft = ninjaMarginLeft + 20;
    ninja.style.marginLeft = ninjaMarginLeft +"px";
    ninja.style.marginTop = "334px";
    ninja.style.height = "200px";
    ninjaRunForward = 1;
    if(ninjaRunImageNumber == 11){
        ninjaRunImageNumber = 1;
        
    }
    if(ninjaHealthLevel == 0){
        ninjaDeadAction();
    }
    else if(zombiHealthLevel == 0){
        zombiDeadAction();
    }
    
    
}


function ninjaForward(){
    a = "Run";
    ninja.src = "Ninja B "+a+" ("+ninjaRunImageNumber+").png";
    ninjaRunImageNumber++;
    ninjaMarginLeft = ninjaMarginLeft + 10;
    ninja.style.marginLeft = ninjaMarginLeft +"px";
    ninja.style.marginTop = "334px";
    ninja.style.height = "200px";
    ninjaRunForward = 1;
    if(ninjaRunImageNumber == 11){
        ninjaRunImageNumber = 1;
        ninjaIdleImageNumber = 1;
        ninjaIdleAction();
               
    }
    
}



function ninjaBack(){
    a = "Run";
    ninja.src = "Ninja B "+a+" ("+backNumber+").png";
    backNumber = backNumber - 1;
    ninjaMarginLeft = ninjaMarginLeft - 10;
    ninja.style.marginLeft = ninjaMarginLeft +"px";
    ninja.style.marginTop = "334px";
    ninja.style.height = "200px";
    ninjaRunForward = 0;
    if(backNumber == 0){
        backNumber = 10;
        ninjaIdleImageNumber = 1;
        ninjaRunImageNumber = 1;
        ninjaIdleAction();
               
    }
    
}

var ninjaMarginTop = 334;

function ninjaJump(){
    a = "Jump";
    ninja.src = "Ninja B "+a+" ("+ninjaJumpImageNumber+").png";
    ninjaJumpImageNumber++;
    ninja.style.height = "200px";
    if(ninjaJumpImageNumber <= 6){
        ninja.style.marginTop = ninjaMarginTop +"px";
        ninjaMarginTop = ninjaMarginTop -40;
    }
    if(ninjaJumpImageNumber > 6){
        ninja.style.marginTop = ninjaMarginTop +"px";
        ninjaMarginTop = ninjaMarginTop + 40;
    }
    if(ninjaJumpImageNumber == 11){
        // ninja.style.marginTop = "334px";
        ninjaJumpImageNumber = 1;
        ninjaIdleImageNumber = 1;
        ninjaIdleAction();
    }  

    if(ninjaHealthLevel == 0){
        ninjaDeadAction();
    }
    else if(zombiHealthLevel == 0){
        zombiDeadAction();
    }
          
}

var background = document.getElementById("background");
var backgroundX = 0 ;

function moveBackground(){
    if(ninjaRunForward == 1){
    backgroundX= backgroundX - 10;
    background.style.backgroundPositionX = backgroundX+"px";
    }
    if(ninjaRunForward == 0){
        backgroundX= backgroundX + 10;
        background.style.backgroundPositionX = backgroundX+"px";
    }
}

var ninja_Attack_Count = 0;
var zombi_Attack_Count = 0;




function ninjaAttack(){
    a = "Attack";
    ninja.src = "Ninja B "+a+" ("+ninjaAttackImageNumber+").png";
    ninja.style.height = "225px";
    ninja.style.marginTop = "325px";
    ninjaAttackImageNumber++;
    if(ninja_zombi_gap == 40){
    zombiHealthLevel = zombiHealthLevel - 2 ;
    zombiHealth.style.width = zombiHealthLevel+"px";
    }
    if(ninjaAttackImageNumber == 11){
        ninjaAttackImageNumber = 1;
        ninjaIdleImageNumber = 1;
        ninjaIdleAction();
    }

    if(ninjaHealthLevel == 0){
        ninjaDeadAction();
    }
    else if(zombiHealthLevel == 0){
        zombiDeadAction();
    }

}


function ninjaJumpAttack(){
    a = "JumpAttack";
    
    ninja.src = "Ninja B "+a+" ("+ninjaJumpAttackImageNumber+").png";
    ninjaMarginLeft = ninjaMarginLeft + 20;
    ninja.style.marginLeft = ninjaMarginLeft +"px";
    ninja.style.height = "225px";
    ninja.style.marginTop = "325px";
    ninjaJumpAttackImageNumber++;
    if(ninja_zombi_gap == 40){
    zombiHealthLevel = zombiHealthLevel - 5;
    zombiHealth.style.width = zombiHealthLevel+"px";
    }
    if(ninja_zombi_gap == 40){
        ninja_Attack_Count = ninja_Attack_Count + 2;
        }
    
   
    if(ninjaJumpAttackImageNumber <= 6){
        ninja.style.marginTop = ninjaMarginTop +"px";
        ninjaMarginTop = ninjaMarginTop - 10;
    }
    if(ninjaJumpAttackImageNumber > 6){
        ninja.style.marginTop = ninjaMarginTop +"px";
        ninjaMarginTop = ninjaMarginTop + 10;
    }
    ninjaRunForward = 1;
    if(ninjaJumpAttackImageNumber == 11){
        ninjaJumpAttackImageNumber = 1;
        ninjaIdleImageNumber = 1;
        ninjaIdleAction();
    }

    if(ninjaHealthLevel == 0){
        ninjaDeadAction();
    }
    else if(zombiHealthLevel == 0){
        zombiDeadAction();
    }

}




function ninjaDead(){  
    a = "Dead";
    ninja.src = "Ninja B "+a+" ("+ninjaDeadImageNumber+").png";
    ninjaDeadImageNumber++;
    if(ninjaDeadImageNumber == 11){
        ninjaDeadImageNumber = 1;
        clearInterval(ninjaDeadWorkerId);
        
    }
    ninja.style.marginTop = "334px";
    ninja.style.height = "200px";
    
    
}


var ninjaHealthLevel = 350 ;
var zombiHealthLevel = 350 ;


ninjaHealth.style.width = ninjaHealthLevel+"px";
zombiHealth.style.width = zombiHealthLevel+"px";






// var ninja = document.getElementById("ninja");
var zombi = document.getElementById("zombi0");

var zombiIdleImageNumber = 1;
var zombiWalkImageNumber = 1;
var zombiAttackImageNumber = 1;
var zombiDeadImageNumber = 1;


function zombiIdle(){      
    a = "Idle";
    zombi.src = "Zombi B "+a+" ("+zombiIdleImageNumber+").png";
    zombiIdleImageNumber++;
    if(zombiIdleImageNumber == 16){
        zombiIdleImageNumber = 1;
        
    }
    
  
}

var zombiMarginLeft = 1500 ;
var zombiWalkForward = 0;

var ninja_zombi_gapWorkerId = 0;
// ninjaMarginLeft 
// zombiMarginLeft
var ninja_zombi_gap;
 // alert(ninja_zombi_gap);


function zombiWalk(){  
         ninja_zombi_gap = zombiMarginLeft - ninjaMarginLeft ;  
         if(ninja_zombi_gap != 40){       
            a = "Walk";
            zombi.src = "Zombi B "+a+" ("+zombiWalkImageNumber+").png";
            zombiWalkImageNumber++;
            zombiMarginLeft = zombiMarginLeft - 20;
            zombi.style.marginLeft = zombiMarginLeft +"px";
            if(zombiWalkImageNumber == 11){
               zombiWalkImageNumber = 1;
               zombiIdleImageNumber = 1;        
            } 
         }
         else if(ninja_zombi_gap == 40){
            zombiAttackAction();
         }  
         if(ninjaHealthLevel == 0){
            ninjaDeadAction();
        }
        else if(zombiHealthLevel == 0){
            zombiDeadAction();
        }
}

function zombiAttack(){
        ninja_zombi_gap = zombiMarginLeft - ninjaMarginLeft ; 
        a = "Attack";
        zombi.src = "Zombi B "+a+" ("+zombiAttackImageNumber+").png";
        zombiAttackImageNumber++;
        if(ninja_zombi_gap == 40 ){
        ninjaHealthLevel = ninjaHealthLevel - 1;
        ninjaHealth.style.width = ninjaHealthLevel+"px";
        }
        if(ninja_zombi_gap > 40){
            zombiForwardAction();
        }
        else if(ninja_zombi_gap < 40){
            zombiBackAction();
        }
        if(zombiAttackImageNumber == 9){
        zombiAttackImageNumber = 1;
        zombiIdleImageNumber = 1;
        // zombiIdleAction();
        
         }
         if(ninjaHealthLevel == 0){
            ninjaDeadAction();
        }
        else if(zombiHealthLevel == 0){
            zombiDeadAction();
        }


}


function zombiForward(){
    if(ninja_zombi_gap != 40){
    ninja_zombi_gap = zombiMarginLeft - ninjaMarginLeft ;
    a = "Walk";
    zombi.src = "Zombi B "+a+" ("+zombiWalkImageNumber+").png";
    zombiWalkImageNumber++;
    zombiMarginLeft = zombiMarginLeft - 10;
    zombi.style.marginLeft = zombiMarginLeft +"px";
    zombi.style.marginTop = "334px";
    zombi.style.height = "200px";
    zombiWalkForward = 1;
    if(zombiWalkImageNumber == 11){
        zombiWalkImageNumber = 1;
        zombiIdleImageNumber = 1;
        // zombiIdleAction();
               
    }
    }
    if(ninja_zombi_gap == 40){
        zombiAttackAction();
    }
    
}



function zombiBack(){
    ninja_zombi_gap = zombiMarginLeft - ninjaMarginLeft ;
    if(ninja_zombi_gap != 40){
    a = "Walk";
    zombi.src = "Zombi B "+a+" ("+backNumber+").png";
    backNumber = backNumber - 1;
    zombiMarginLeft = zombiMarginLeft + 10;
    zombi.style.marginLeft = zombiMarginLeft +"px";
    zombiWalkForward = 0;
    if(backNumber == 0){
        backNumber = 10;
        zombiIdleImageNumber = 1;
        zombiWalkImageNumber = 1;
        // zombiIdleAction();
               
    }
    }
    if(ninja_zombi_gap == 40){
        zombiAttackAction();
    }
    
}


function zombiDead(){      
    a = "Dead";
    zombi.src = "Zombi B "+a+" ("+zombiDeadImageNumber+").png";
    zombiDeadImageNumber++;
    if(zombiDeadImageNumber == 13){
        zombiDeadImageNumber = 1;
        clearInterval(zombiDeadWorkerId);
    }
    
  
}













       



