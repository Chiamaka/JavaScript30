/**
 * Created by chiamaka on 12/10/16.
 */
//activate function when key is pressed.
window.addEventListener('keydown', e => {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`div[data-key='${e.keyCode}'`);
    if(!audio) return;
    audio.currentTime = 0; //this resets the sound.
    audio.play();
    key.classList.add('playing'); //add playing class to the pressed key.
});

const keys = document.querySelectorAll('.key');
//remove the playing class on key after transition is over
keys.forEach(key => {
    key.addEventListener('transitionend', function (e) {
        if (e.propertyName === 'transform') {
            this.classList.remove('playing');
        }
    });
});

