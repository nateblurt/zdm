import player from './player.js';

function tr1(e) {
    e.preventDefault();
    if(!player.active && player.alive) {
        player.start();
    }
    else if(player.alive) {
        player.flap();
    }
    else if(!player.active && !player.alive) {
        player.reset();
    }
}

tap_region_1.addEventListener('touchstart', tr1, {passive:false});
tap_region_1.addEventListener('mousedown', tr1, {passive:false});

exit_game_button.addEventListener('touchstart', ExitGame);
exit_game_button.addEventListener('mousedown', ExitGame);

function ExitGame() {
    parent.postMessage('exit game', '*');
}