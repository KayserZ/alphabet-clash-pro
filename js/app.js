/* function play() {
    const homeSection = document.getElementById('home');
    homeSection.classList.add('hidden');

    const playSection = document.getElementById('playGround');
    playSection.classList.remove('hidden');
} */

function play() {
    hideElementById('home');
    showElementById('playGround')
}