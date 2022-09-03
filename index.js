let colors = [];
let classes = document.querySelectorAll(".btn");
let count = 0;
let level = 1;

// MOUSE CLICK HANDLER CONTROLING ALL PROSSESING
$(".btn").on("click", function() {
    let color = this.classList[1];
    showPressedButton(this);
    makeSound(color);
    if ($(this).hasClass(colors[count])) {
        count++;
        if (count === colors.length) {
            level++;
            count = 0;
            setTimeout(() => addColor(), 1000);
        }   
    } else {
        gameOver();
        reset()
        makeSound("wrong");        
    }
    
});

// KEYPRESS HANDLER
$(document).keypress(() => {
    if (colors.length === 0)
            startGame();
});

// FOR STARTING GAME AGAIN
function startGame() {
            addColor();
}

// MAINE FUNCTION ADDING COLORS MAKE SOUNDS ANIMATE BUTTONS
function addColor() {
    $("h1").text(`level ${level}`);
    let randomNum = Math.floor(Math.random() * classes.length);
    let pressedBtn = classes[randomNum];
    let color = pressedBtn.classList[1]
    makeSound(color);
    showPressedButton(pressedBtn);
    colors.push(color);
}

// CREATING SOUNDS
function makeSound(sound) {
    let pressedSound = new Audio(`sounds/${sound}.mp3`);
    pressedSound.play();
}

// ANIMATING PRESSED BUTTON
function showPressedButton(button) {    
    $(button).addClass("pressed");    
    setTimeout(() => $(button).removeClass("pressed"), 200);
}

// RESETING VARIABLES
function reset() {
    count = 0;
    level = 1;
    colors = [];
}

// GAME OVER FUNCTION 
function gameOver() {    
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(() => $("body").removeClass("game-over"), 100);
}
