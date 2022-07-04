let root = location.origin + '/games/ftk/audio/'
let soundBuffers = {};
let context = new AudioContext();
let chomp_sound = new Audio(root + 'chomp.mp3');
let moo_sound = new Audio(root + 'moo.mp3');
let flap_sound = new Audio(root + 'flap.mp3');

let sound_button = document.querySelector('#sound_button');
let music_button = document.querySelector('#music_button');

class Sound {
    constructor() {
        this.on = true;
        this.music = true;
        this.load('moo');
        this.load('flap');
        this.load('chomp');
    }
    flap() {
        if (!this.on)
            return;
        flap_sound.play();
    }
    chomp() {
        if (!this.on)
            return;
        chomp_sound.play();
    }
    moo() {
        if (!this.on)
            return;
        moo_sound.play();
    }
    toggle() {
        if (this.on) {
            this.on = false;
            sound_button.style.backgroundPosition = '256px 0px';
        }
        else {
            this.on = true;
            sound_button.style.backgroundPosition = '0px 0px';
        }
    }
    toggleMusic() {
        if (this.music) {
            this.music = false;
            music_button.style.backgroundPosition = '256px 256px';
        }
        else {
            this.music = true;
            music_button.style.backgroundPosition = '0px 256px';
        }
    }
    load(name) {
        let url = location.origin + '/games/ftk/audio/' + name + '.mp3';
        fetch(url)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
            soundBuffers[name] = audioBuffer;
        });
    }
    play(soundBufferName, gain) {
        if(!this.on) return;

        let gainNode = context.createGain();
        if(gain) gainNode.gain.value = gain;
        let source = context.createBufferSource();
        source.buffer = soundBuffers[soundBufferName];
        source.connect(gainNode);
        gainNode.connect(context.destination);
        source.start();
    }
}
let sound = new Sound();
export default sound;