import player from './player.js';
import background from './background.js';
import layout from './layout.js';
import shooter from './shooter.js';

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

document.addEventListener('keydown', e=>{
    console.log(e.key);
    if(e.key == ' ') {
        tr1(e);
    }
});

exit_game_button.addEventListener('touchstart', ExitGame);
exit_game_button.addEventListener('mousedown', ExitGame);

function ExitGame() {
    parent.postMessage('exit game', '*');
}


// Choose a character
choose_cow.addEventListener('click', ChooseCow);
choose_pig.addEventListener('click', ChoosePig);

function ChooseCow() {
    console.log('cow chosen');
    background.choose('cow');
    player.choose('cow');
    shooter.food_img = haybale_img;
    layout.reset();
    customize_screen.style.visibility = 'hidden';
}
function ChoosePig() {
    console.log('pig chosen');
    background.choose('pig');
    player.choose('pig');
    shooter.food_img = apple_img;
    layout.reset();
    customize_screen.style.visibility = 'hidden';
}