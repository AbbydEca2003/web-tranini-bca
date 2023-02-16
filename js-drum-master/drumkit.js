const key = document.querySelectorAll('.key');
const active = document.querySelector('.playing');

window.addEventListener("keydown", function(e){
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio){
        return;
    }
    audio.currentTime= 0;
    this.document.querySelector(`.key[data-key="${e.keyCode}"]`).style.transition='.1s ease-in-out';
    this.document.querySelector(`.key[data-key="${e.keyCode}"]`).style.transform='scale(1.3,1.3)';
    audio.play();
    //active.classList.add("playing");
    //key.playing.add(active.classList.add("playing"));
    // this.window.setTimeout()
})

window.addEventListener("keydown", function(e){
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio){
        return;
    }
    window.setTimeout(function(){
        this.document.querySelector(`.key[data-key="${e.keyCode}"]`).style.border='4px solid black';
        this.document.querySelector(`.key[data-key="${e.keyCode}"]`).style.transform='scale(1,1)';
        }, 300);
        this.document.querySelector(`.key[data-key="${e.keyCode}"]`).style.border='4px solid green';   
})
