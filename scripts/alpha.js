function handleKeyboardButtonPress(event){
    const playerPressed  = event.key;
    console.log('player pressed', playerPressed);

    // stop the game if pressed 'escaped'
    if (playerPressed === 'Escape'){

        gameover();
    }

// get the expected to prees

const currentAlphabetElement = document.getElementById('current-alphabet');
const currentAlphabet = currentAlphabetElement.innerText;
const expectedAlphabet = currentAlphabet.toLowerCase();

// check right or wrong key pressed
if(playerPressed === expectedAlphabet){
    console.log('you got a point');
    // update the score
    // 1.get the current score
    const currentScoreElement = document.getElementById('current-score');
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);

    console.log(currentScore);
    // 2. increase the score by 1
    const newScore = currentScore + 1;

    // show the new score
    currentScoreElement.innerText = newScore; 

    removeBackgroundColorById(expectedAlphabet);
    continueGame();

    // console.log('you pressed correctly', expectedAlphabet);
   
}
else{
    console.log('try again');
    // 1. get the current life number
    const currentLifeElement = document.getElementById('current-life');
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);

    if(currentLife === 0){
        gameover();
        console.log('game over');
    }


    //2. reduce the life count  
    const newLife = currentLife - 1;

    // diplay updated life count
    currentLifeElement.innerText = newLife;

     
}

}


// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress)


function continueGame(){
    // step 1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    // console.log('your random', alphabet);

    

    // set random generated alphabet

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    
    // set background color
setBackgroundColorById(alphabet);
}



function play(){
    // hide everything show only playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
     setTextElementValueId('current-life', 5);
     setTextElementValueId('current-score', 0);
    

    continueGame();
}
function gameover(){
    hideElementById('play-ground');
    showElementById('final-score');

    // update fianl score
    // get the final score
    const lastScore = getTextElementValueId('current-score');
    setTextElementValueId('Last-score', lastScore);

    // clear last alphabet color
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);


}


