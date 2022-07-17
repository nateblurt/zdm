let lastWidth = 0, lastHeight = 0;
let landscape_main_ratio = 2048 / 1336;
let portrait_main_ratio = 1208 / 2176;

(function layout() {
    if(!document.fullscreenElement) {
        landscape_main_ratio = 2048 / 1336;
        portrait_main_ratio = 1208 / 2176;
    }
    else {
        landscape_main_ratio = 16/9;
        portrait_main_ratio = 9/16;
    }
    if(innerWidth != lastWidth || innerHeight != lastHeight) {
        lastWidth = innerWidth;
        lastHeight = innerHeight;

        if(innerWidth > innerHeight) { 
            if(innerWidth / innerHeight > landscape_main_ratio) { 
                wide_landscape(); 
            }
            else { 
                tall_landscape(); 
            }
            landscape();
        }
        else { 
            if(innerWidth / innerHeight > portrait_main_ratio) { 
                wide_portrait(); 
            }
            else { 
                tall_portrait(); 
            }
            portrait();
        }
        all();
    }
    requestAnimationFrame(layout);
})();

function wide_landscape() {
    main.style.height = innerHeight + 'px';
    main.style.width = innerHeight * 2048 / 1336 + 'px';
    if(!document.fullscreenElement) {
        game.style.width = main.offsetWidth * 1920 / 2048 + 'px';
        game.style.height = game.offsetWidth * 9 / 16 + 'px';
    }
    else {
        game.style.height = innerHeight + 'px';
        game.style.width = game.offsetHeight * 16/9 + 'px';
    }
}
function tall_landscape() {
    main.style.width = innerWidth + 'px';
    main.style.height = innerWidth * 1336 / 2048 + 'px';
    if(!document.fullscreenElement) {
        game.style.height = main.offsetHeight * 1080 / 1336 + 'px';
        game.style.width = game.offsetHeight * 16 / 9 + 'px';
    }
    else {
        game.style.width = innerWidth + 'px';
        game.style.height = game.offsetWidth * 9/16 + 'px';
    }
}
function landscape() {
    background_a.style.backgroundSize = '100%';

    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.left = '0px';

    banner_image.style.width = game.offsetWidth * 0.4 + 'px';
    banner_image.style.left = game.offsetWidth / 2 - banner_image.offsetWidth / 2 + 'px';
    banner_image.style.top = game.offsetHeight * 0.15 + 'px';

    play_button.style.fontSize = game.offsetHeight * 0.075 + 'px';
    play_button.style.marginTop = game.offsetHeight * 0.65 + 'px';
    
    game_hud.style.width = '50%';
    game_hud.style.left = '25%';
    game_hud.style.top = '2%';
    current_score.style.fontSize = game.offsetHeight * 0.060 + 'px';
    high_score.style.fontSize = game.offsetHeight * 0.060 + 'px';

    top_bar.style.width = game.offsetWidth + 'px';
    top_bar.style.height = (128 / 1080) * game.offsetHeight + 'px';
    top_bar.style.left =  main.offsetWidth / 2 - top_bar.offsetWidth / 2 + 'px';

    bottom_bar.style.width = game.offsetWidth + 'px';
    bottom_bar.style.height = (128 / 1080) * game.offsetHeight + 'px';
    bottom_bar.style.left =  main.offsetWidth / 2 - bottom_bar.offsetWidth / 2 + 'px';

    choose_cow.style.width = game.offsetHeight / 2 + 'px';
    choose_cow.style.height = choose_cow.offsetWidth + 'px';
    choose_pig.style.width = choose_cow.offsetWidth + 'px';
    choose_pig.style.height = choose_cow.offsetHeight + 'px';

    choose_cow.style.left = game.offsetWidth / 4 - choose_cow.offsetWidth / 2 + 'px';
    choose_cow.style.top = game.offsetHeight / 2 - choose_cow.offsetHeight / 2 + 'px';
    choose_pig.style.left = game.offsetWidth * 0.75 - choose_cow.offsetWidth / 2 + 'px';
    choose_pig.style.top = game.offsetHeight / 2 - choose_cow.offsetHeight / 2 + 'px';

    choose_character.style.fontSize = game.offsetHeight * 0.1 + 'px';
}
function portrait() {
    background_a.style.backgroundSize = `${game.offsetHeight * 16/9}px ${game.offsetHeight}px `;

    canvas.style.height = game.offsetHeight + 'px';
    canvas.style.width = game.offsetHeight * 16 / 9 + 'px';
    canvas.style.left = game.offsetWidth / 2 - canvas.offsetWidth / 2 + 'px';

    play_button.style.fontSize = game.offsetHeight * 0.075 + 'px';
    play_button.style.marginTop = game.offsetHeight * 0.35 + 'px';

    banner_image.style.width = game.offsetWidth * 0.8 + 'px';
    banner_image.style.left = game.offsetWidth / 2 - banner_image.offsetWidth / 2 + 'px';
    banner_image.style.top = game.offsetHeight * 0.15 + 'px';

    play_button.style.fontSize = game.offsetHeight * 0.075 + 'px';
    play_button.style.marginTop = game.offsetHeight * 0.65 + 'px';

    game_hud.style.width = '100%';
    game_hud.style.left = '0px';
    game_hud.style.top = '2%';
    current_score.style.fontSize = game.offsetHeight * 0.055 + 'px';
    high_score.style.fontSize = game.offsetHeight * 0.055 + 'px';

    top_bar.style.width = game.offsetWidth + 'px';
    top_bar.style.height = (128 / 1920) * game.offsetHeight + 'px';
    top_bar.style.left =  main.offsetWidth / 2 - top_bar.offsetWidth / 2 + 'px';

    bottom_bar.style.width = game.offsetWidth + 'px';
    bottom_bar.style.height = (128 / 1920) * game.offsetHeight + 'px';
    bottom_bar.style.left =  main.offsetWidth / 2 - bottom_bar.offsetWidth / 2 + 'px';

    choose_cow.style.width = game.offsetWidth / 2 + 'px';
    choose_cow.style.height = choose_cow.offsetWidth + 'px';
    choose_pig.style.width = choose_cow.offsetWidth + 'px';
    choose_pig.style.height = choose_cow.offsetHeight + 'px';

    choose_cow.style.left = game.offsetWidth / 2 - choose_cow.offsetWidth / 2 + 'px';
    choose_cow.style.top = game.offsetHeight * 0.25 - choose_cow.offsetHeight / 2 + 'px';
    choose_pig.style.left = game.offsetWidth / 2 - choose_cow.offsetWidth / 2 + 'px';
    choose_pig.style.top = game.offsetHeight * 0.75 - choose_cow.offsetHeight / 2 + 'px';
}
function wide_portrait() {
    main.style.height = innerHeight + 'px';
    main.style.width = innerHeight * 1208 / 2176 + 'px';
    if(!document.fullscreenElement) {
        game.style.height = main.offsetHeight * 1920 / 2176 + 'px';
        game.style.width = game.offsetHeight * 9 / 16 + 'px';
    }
    else {
        game.style.height = innerHeight + 'px';
        game.style.width = game.offsetHeight * 9 / 16 + 'px';
    }
}
function tall_portrait() {
    main.style.width = innerWidth + 'px';
    main.style.height = innerWidth * 2176 / 1208 + 'px';
    if(!document.fullscreenElement) {
        game.style.width = main.offsetWidth * 1080 / 1208 + 'px';
        game.style.height = game.offsetWidth * 16 / 9 + 'px';
    }
    else {
        game.style.width = innerWidth + 'px';
        game.style.height = game.offsetWidth * 16/9 + 'px';
    }
}
function all() {
    main.style.left = innerWidth / 2 - main.offsetWidth / 2 + 'px';
    main.style.top = innerHeight / 2 - main.offsetHeight / 2 + 'px';
    start_center.style.height = game.offsetHeight + 'px';
    start_center.style.width = game.offsetHeight * 9/16 + 'px';
    start_center.style.left = game.offsetWidth / 2 - start_center.offsetWidth / 2 + 'px';

    if(!document.fullscreenElement) {
        game.style.left = main.offsetWidth / 2 - game.offsetWidth / 2 + 'px';
        game.style.top = main.offsetHeight / 2 - game.offsetHeight / 2 + 'px';
    }
    else {
        game.style.left = innerWidth / 2 - game.offsetWidth / 2 + 'px';
        game.style.top = innerHeight / 2 - game.offsetHeight / 2 + 'px';
    }
}

fullscreen_button.addEventListener('mousedown', GoFullscreen);
fullscreen_button.addEventListener('touchstart', GoFullscreen);
document.addEventListener('keydown', e=> {
    if(e.key == 'Escape') {
        document.exitFullscreen();
    }
});


function GoFullscreen() {
    game_container.requestFullscreen();
    setTimeout(()=>lastWidth=0,100);
}
function ExitFullscreen() {
    document.exitFullscreen();
    setTimeout(()=>lastWidth=0,100);
}

export default {
    reset:()=>{
        lastWidth = 0;
        lastHeight = 0;
    }
}