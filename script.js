
document.addEventListener('keydown',playKeySound);
const divsDataKeys = document.querySelectorAll(".key");
// remove classList firts
divsDataKeys.forEach(element => element.addEventListener('transitionend',removeTransition));

function playKeySound(e){
    const keyCode = e.keyCode;
    const divDataKey = document.querySelector(`[data-key= '${keyCode}']`);
    
    //console.log(divDataKey);
    if(!divDataKey) return;
    
    // add class
    divDataKey.classList.add('playing');
    // play sound
    const audio = document.querySelector(`audio[data-key="${ keyCode }"]`);
   // Play the audio in the same way as you currently are
   audio.currentTime = 0;
   audio.play();
}

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    
}

