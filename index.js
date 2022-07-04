import './scripts/layout.js';

flutterkins_button.addEventListener('mousedown', open_flutterkins);
flutterkins_button.addEventListener('touchstart', open_flutterkins);

function open_flutterkins() {
    setTimeout(()=> {
        game_popup.style.visibility = 'visible';
    },300);
}


window.addEventListener('message', function(m) {
    if(m = 'exit game') {
        game_popup.style.visibility = 'hidden';
        game_iframe.src = 'games/ftk/';
    }
});