import './scripts/layout.js';
import main from './scripts/_main.js'

window._context = canvas.getContext('2d');
window._distance = (x1,y1,x2,y2)=>{
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}

let lastTime = 0;
(function loop(time) { 
    window._time = time;
    window._delta = time - lastTime;
    main();
    requestAnimationFrame(loop); 
})();
