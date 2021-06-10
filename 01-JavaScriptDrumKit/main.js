function playSound (e){
    /*we select the audio tag that is asscociated to the data-key, for the key that is pressed, the event 
    
    We are getting the keycode for from the event, and to access this we use Template literals,
     which is ${expression}, this needs to be within `backticks`
    */
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) //note the quote around the ${e.keycode}
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`) //this selects the div with the class of "key"

   if (!audio) return; //this stops the function if no audio is found, for example if you press "T", "T" has no audio file
    
   //if you call .play() on a audio file that is already playing it wont play again, this re-sets the audio file on each press
   audio.currentTime = 0; 
   audio.play(); //this plays the audio file 
   key.classList.add('playing'); //this changes the class="key" to class"key.playing", which has different CSS rules
};

/*this removes the CSS once sound has been played*/
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing'); //this removes the the .playing from the class
};

const keys = document.querySelectorAll('.keys'); //select the class "keys"
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //when a transition ends, run the removeTransition funciton

  // listen for the keydown event, when this happens, run function
  window.addEventListener('keydown', playSound);
