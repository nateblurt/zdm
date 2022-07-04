let lastWidth = 0, lastHeight = 0;
let landscape_main_ratio = 2048 / 1336;
let portrait_main_ratio = 1208 / 2176;

(function layout() {
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
}
function tall_landscape() {
    main.style.width = innerWidth + 'px';
    main.style.height = innerWidth * 1336 / 2048 + 'px';
    game.style.height = main.offsetHeight * 1080 / 1336 + 'px';
    game.style.width = game.offsetHeight * 16 / 9 + 'px';
}
function landscape() {
    background_a.style.backgroundSize = '100%';

    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.left = '0px';

    banner_image.style.width = '40%'
    banner_image.style.marginTop = '7.5%';

    play_button.style.fontSize = game.offsetHeight * 0.075 + 'px';
    play_button.style.marginTop = game.offsetHeight * 0.30 + 'px';
    
    game_hud.style.width = '50%';
    game_hud.style.left = '25%';
    game_hud.style.top = '2%';
    current_score.style.fontSize = game.offsetHeight * 0.075 + 'px';
    high_score.style.fontSize = game.offsetHeight * 0.075 + 'px';

    top_bar.style.width = game.offsetWidth + 'px';
    top_bar.style.height = (128 / 1080) * game.offsetHeight + 'px';
    top_bar.style.left =  main.offsetWidth / 2 - top_bar.offsetWidth / 2 + 'px';

    bottom_bar.style.width = game.offsetWidth + 'px';
    bottom_bar.style.height = (128 / 1080) * game.offsetHeight + 'px';
    bottom_bar.style.left =  main.offsetWidth / 2 - bottom_bar.offsetWidth / 2 + 'px';
}
function portrait() {
    background_a.style.backgroundSize = `${game.offsetHeight * 16/9}px ${game.offsetHeight}px `;

    canvas.style.height = game.offsetHeight + 'px';
    canvas.style.width = game.offsetHeight * 16 / 9 + 'px';
    canvas.style.left = game.offsetWidth / 2 - canvas.offsetWidth / 2 + 'px';

    banner_image.style.width = '80%'
    banner_image.style.marginTop = '30%';

    play_button.style.fontSize = game.offsetHeight * 0.075 + 'px';
    play_button.style.marginTop = game.offsetHeight * 0.35 + 'px';

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

    fullscreen_button.style.height = (128 / 1920) * game.height + 'px';
    fullscreen_button.style.fontSize = fullscreen_button.offsetHeight * 0.8 + 'px';
    fullscreen_button.style.top = game.offsetBottom + 'px';
    fullscreen_button.style.left = innerWidth / 2 - fullscreen_button.offsetWidth / 2 + 'px';
}
function wide_portrait() {
    main.style.height = innerHeight + 'px';
    main.style.width = innerHeight * 1208 / 2176 + 'px';
    if(!window.fullscreen) {
        game.style.height = main.offsetHeight * 1920 / 2176 + 'px';
        game.style.width = game.offsetHeight * 9 / 16 + 'px';
    }
    else {
        console.log('wide portrait')
        game.style.height = innerHeight + 'px';
        game.style.width = game.offsetHeight * 9 / 16 + 'px';
    }
}
function tall_portrait() {
    main.style.width = innerWidth + 'px';
    main.style.height = innerWidth * 2176 / 1208 + 'px';
    game.style.width = main.offsetWidth * 1080 / 1208 + 'px';
    game.style.height = game.offsetWidth * 16 / 9 + 'px';
}
function all() {
    main.style.left = innerWidth / 2 - main.offsetWidth / 2 + 'px';
    main.style.top = innerHeight / 2 - main.offsetHeight / 2 + 'px';
    game.style.left = main.offsetWidth / 2 - game.offsetWidth / 2 + 'px';
    game.style.top = main.offsetHeight / 2 - game.offsetHeight / 2 + 'px';
}