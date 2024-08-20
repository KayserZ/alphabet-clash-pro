function handleKeyPress(event) {
    const userPressed = event.key;

    if(userPressed === 'Escape') {
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('currentAlphabet');
    const currentAlp = currentAlphabetElement.innerText;
    const expectedAlp = currentAlp.toLowerCase();
    console.log(userPressed, expectedAlp);

    if(userPressed === expectedAlp) {
        const currentScore = getCommonValue('currentScore');

        const newScore = currentScore + 1;
        // currentScoreEle.innerText = newScore;
        setCommonValue('currentScore', newScore);

        removeBgColorById(expectedAlp);
        continueGame();
    }
    else {
        const currentLife = getCommonValue('currentLife');

        const newLife = currentLife - 1;
        // currentLifeEle.innerText = newLife;
        setCommonValue('currentLife', newLife);

        if(newLife === 0) {
            gameOver();
        }
    }
}

document.addEventListener('keyup', handleKeyPress);

function continueGame() {
    const alphabet = getRandomAlphabet();

    const currentAlphabet = document.getElementById('currentAlphabet');
    currentAlphabet.innerText = alphabet;

    addBgColorById(alphabet);
    // removeBgColorById(alphabet);
}

function play() {
    hideElementById('home');
    hideElementById('finalScore')
    showElementById('playGround');

    setCommonValue('currentLife', 5);
    setCommonValue('currentScore', 0);
    continueGame();
}

function gameOver() {
    hideElementById('playGround');
    showElementById('finalScore');

    const lastScore = getCommonValue('currentScore');
    setCommonValue('gameScore', lastScore);

    //to clear alphabet
    const currentAlphabet = getElementText('currentAlphabet');
    removeBgColorById(currentAlphabet);
}