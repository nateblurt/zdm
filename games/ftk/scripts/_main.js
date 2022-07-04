import player from './player.js';
import background from './background.js';
import shooter from './shooter.js';
import './input.js';

// init
player.init();

export default main => {
    background.scroll();
    player.physics();
    shooter.physics();

    _context.clearRect(0,0,canvas.width,canvas.height);
    shooter.draw();
    player.draw();
}