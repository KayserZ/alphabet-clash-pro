/* function play() {
    const homeSection = document.getElementById('home');
    homeSection.classList.add('hidden');

    const playSection = document.getElementById('playGround');
    playSection.classList.remove('hidden');
} */

function continueGame() {
    const alphabet = getRandomAlphabet();
    // console.log('your alphabet is ' + alphabet);

    const currentAlphabet = document.getElementById('currentAlphabet');
    currentAlphabet.innerText = alphabet;

    addBgColorById(alphabet);
    removeBgColorById(alphabet);
}

function play() {
    hideElementById('home');
    showElementById('playGround');
    continueGame();
}