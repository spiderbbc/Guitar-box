
document.addEventListener('keydown',playKeySound);
const divsDataKeys = document.querySelectorAll(".key");
// remove classList firts
divsDataKeys.forEach(element => element.addEventListener('transitionend',removeTransition));

/**
 * Play Key Sound: just play sound by key press.
 *
 * @param {Event} e event to raised.
 * @return {void} 
 */
function playKeySound(e){
    const keyCode = e.keyCode;
    const divDataKey = document.querySelector(`[data-key= '${keyCode}']`);
    
    if(!divDataKey) return;
    // add class
    divDataKey.classList.add('playing');
    // play sound
    const audio = document.querySelector(`audio[data-key="${ keyCode }"]`);
   // Play the audio in the same way as you currently are
   audio.currentTime = 0;
   audio.play();
}

/**
 * Remove Transition: just remove class playing by key press.
 *
 * @param {Event} e event to raised.
 * @return {void} 
 */
function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    
}

