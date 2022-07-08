let bh = 0.15;
let fr = 0.5;
function landscape() {
    section_a.style.width = innerWidth / 2 + 'px';
    section_a.style.height = innerHeight + 'px';

    logo_box.style.width = section_a.offsetWidth * 0.8 + 'px';
    logo_box.style.height = logo_box.offsetWidth + 'px';
    logo_box.style.left = section_a.offsetWidth / 2 - logo_box.offsetWidth / 2 + 'px';
    logo_box.style.top = section_a.offsetHeight / 2 - logo_box.offsetHeight / 2 + 'px';

    section_b.style.width = innerWidth / 2 + 'px';
    section_b.style.height = innerHeight + 'px';
    section_b.style.left = innerWidth / 2 + 'px';
    section_b.style.top = '0px';

    welcome_text.style.width = section_b.offsetWidth + 'px';
    welcome_text.style.fontSize = section_b.offsetWidth * 0.05 + 'px';
    welcome_text.style.top = section_b.offsetHeight / 2 - section_b.offsetWidth * 0.475 + 'px';
    welcome_text.style.left = section_b.offsetWidth / 2 - welcome_text.offsetWidth / 2 + 'px';

    welcome_message.style.width = section_b.offsetWidth * 0.9 + 'px';
    welcome_message.style.fontSize = section_b.offsetWidth * 0.04 + 'px';
    welcome_message.style.top = section_b.offsetHeight / 2 - section_b.offsetWidth * 0.4 + 'px';
    welcome_message.style.left = section_b.offsetWidth / 2 - welcome_message.offsetWidth / 2 + 'px';

    welcome_message_2.style.width = section_b.offsetWidth * 0.9 + 'px';
    welcome_message_2.style.fontSize = section_b.offsetWidth * 0.04 + 'px';
    welcome_message_2.style.top = section_b.offsetHeight / 2 - section_b.offsetWidth * 0.25 + 'px';
    welcome_message_2.style.left = section_b.offsetWidth / 2 - welcome_message.offsetWidth / 2 + 'px';

    flutterkins_button.style.width = section_b.offsetWidth * 0.3 + 'px';
    flutterkins_button.style.height = flutterkins_button.offsetWidth + 'px';
    flutterkins_button.style.top = welcome_text.offsetTop + section_b.offsetWidth * 0.4 + 'px';
    flutterkins_button.style.left = section_b.offsetWidth / 2 - flutterkins_button.offsetWidth / 2 + 'px';
    flutterkins_button.style.borderRadius = flutterkins_button.offsetWidth * 0.1 + 'px';
    flutterkins_button.style.border = `${flutterkins_button.offsetWidth * 0.02 + 'px'} solid grey`;

    let bw = 0.5;
    tb.style.width = section_b.offsetWidth * bw + 'px';
    tb.style.height = tb.offsetWidth * bh + 'px';
    tb.style.top = section_b.offsetHeight / 2 + section_b.offsetWidth * 0.25 + 'px';
    tb.style.left = section_b.offsetWidth / 2 - tb.offsetWidth / 2 + 'px';
    tb.style.fontSize = tb.offsetHeight * fr + 'px';
    tb.style.lineHeight = tb.offsetHeight + 'px';

    kofi_button.style.width = section_b.offsetWidth * bw + 'px';
    kofi_button.style.height = kofi_button.offsetWidth * bh + 'px';
    kofi_button.style.top = section_b.offsetHeight / 2 + section_b.offsetWidth * 0.35 + 'px';
    kofi_button.style.left = section_b.offsetWidth / 2 - kofi_button.offsetWidth / 2 + 'px';
    kofi_button.style.fontSize = kofi_button.offsetHeight * fr + 'px';
    kofi_button.style.lineHeight = kofi_button.offsetHeight + 'px';
}
function portrait() {
    section_a.style.width = innerWidth + 'px';
    section_a.style.height = innerHeight * 0.4 + 'px';

    logo_box.style.height = section_a.offsetHeight * 0.8 + 'px';
    logo_box.style.width = logo_box.offsetHeight + 'px';
    logo_box.style.left = section_a.offsetWidth / 2 - logo_box.offsetWidth / 2 + 'px';
    logo_box.style.top = section_a.offsetHeight / 2 - logo_box.offsetHeight / 2 + 'px';

    section_b.style.width = innerWidth + 'px';
    section_b.style.height = innerHeight * 0.6 + 'px';
    section_b.style.left = '0px';
    section_b.style.top = innerHeight * 0.4 + 'px';

    welcome_text.style.width = section_b.offsetHeight * 0.8 + 'px';
    welcome_text.style.fontSize = section_b.offsetHeight * 0.05 + 'px';
    welcome_text.style.top = section_b.offsetHeight * 0.025 + 'px';
    welcome_text.style.left = section_b.offsetWidth / 2 - welcome_text.offsetWidth / 2 +'px';

    let pfs = 0.030;
    let pfw = 0.725;
    welcome_message.style.width = section_b.offsetHeight * pfw + 'px';
    welcome_message.style.fontSize = section_b.offsetHeight * pfs + 'px';
    welcome_message.style.top = section_b.offsetHeight  * 0.1 + 'px';
    welcome_message.style.left = section_b.offsetWidth / 2 - welcome_message.offsetWidth / 2 + 'px';

    welcome_message_2.style.width = section_b.offsetHeight * pfw + 'px';
    welcome_message_2.style.fontSize = section_b.offsetHeight * pfs + 'px';
    welcome_message_2.style.top = section_b.offsetHeight  * 0.225 + 'px';
    welcome_message_2.style.left = section_b.offsetWidth / 2 - welcome_message_2.offsetWidth / 2 + 'px';

    flutterkins_button.style.height = section_b.offsetHeight * 0.3 + 'px';
    flutterkins_button.style.width = flutterkins_button.offsetHeight + 'px';
    flutterkins_button.style.top = section_b.offsetHeight * 0.375 + 'px';
    flutterkins_button.style.left = section_b.offsetWidth / 2 - flutterkins_button.offsetWidth / 2 + 'px';
    flutterkins_button.style.borderRadius = flutterkins_button.offsetWidth * 0.1 + 'px';
    flutterkins_button.style.border = `${flutterkins_button.offsetWidth * 0.02 + 'px'} solid grey`;

    let bw = 0.4;
    tb.style.width = section_b.offsetHeight * bw + 'px';
    tb.style.height = tb.offsetWidth * bh  + 'px';
    tb.style.top = section_b.offsetHeight  * 0.725 + 'px';
    tb.style.left = section_b.offsetWidth / 2 - tb.offsetWidth / 2 + 'px';
    tb.style.fontSize = tb.offsetHeight * fr + 'px';
    tb.style.lineHeight = tb.offsetHeight + 'px';

    kofi_button.style.width = section_b.offsetHeight * bw + 'px';
    kofi_button.style.height = kofi_button.offsetWidth * bh + 'px';
    kofi_button.style.top = section_b.offsetHeight  * 0.825 + 'px';
    kofi_button.style.left = section_b.offsetWidth / 2 - kofi_button.offsetWidth / 2 + 'px';
    kofi_button.style.fontSize = kofi_button.offsetHeight * fr + 'px';
    kofi_button.style.lineHeight = kofi_button.offsetHeight + 'px';
}
function all() {
    game_popup.style.width = innerWidth + 'px';
    game_popup.style.height = innerHeight + 'px';
}

let lastWidth = 0, lastHeight = 0;
let first_run = true;
(function loop() {
    if(lastWidth != innerWidth || lastHeight != innerHeight) {
        lastWidth = innerWidth;
        lastHeight = innerHeight;
        all();
        if(innerWidth > innerHeight) {
            landscape();
        }
        else {
            portrait();
        }
    }
    if(first_run) {
        section_a.style.visibility = 'visible';
        section_b.style.visibility = 'visible';
        first_run = false;
    }
    requestAnimationFrame(loop);
})();