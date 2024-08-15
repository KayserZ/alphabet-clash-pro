/* function play() {
    const homeSection = document.getElementById('home');
    homeSection.classList.add('hidden');

    const playSection = document.getElementById('playGround');
    playSection.classList.remove('hidden');
} */

function handleKeyPress(event) {
    const userPressed = event.key;
    console.log(userPressed);

    const currentAlphabetElement = document.getElementById('currentAlphabet');
    const currentAlp = currentAlphabetElement.innerText;
    const expectedAlp = currentAlp.toLowerCase();
    console.log(userPressed, expectedAlp);

    if(userPressed === expectedAlp) {
        console.log('point');
        removeBgColorById(expectedAlp);
        continueGame();
    }
    else {
        console.log('lose point');
    }
}

document.addEventListener('keyup', handleKeyPress);

function continueGame() {
    const alphabet = getRandomAlphabet();
    // console.log('your alphabet is ' + alphabet);

    const currentAlphabet = document.getElementById('currentAlphabet');
    currentAlphabet.innerText = alphabet;

    addBgColorById(alphabet);
    // removeBgColorById(alphabet);
}

function play() {
    hideElementById('home');
    showElementById('playGround');
    continueGame();
}
//28-4