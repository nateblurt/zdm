import background from './background.js';
import shooter from './shooter.js';
import sound from './sound.js';

class Player {
    constructor() {
        //this.img = cow_img;
        this.img = pig_img;
        this.alive = true;
        this.vx = 0;
        this.vy = 0;
        this.leftSpeed = -5;
        this.flapHeight = -15;
        this.gravity = 0.7;
        this.maxFallSpeed = 10;
        this.lowerBound = canvas.height - 100;
        this.upperBound = 100;
        this.leftBound = canvas.width / 2 - canvas.height * 9 / 16 / 2 + 60;

        this.score = 0;
        this.loadHighScore();
    }
    physics() {
        if(this.active) {
            this.vy += this.gravity;
            this.x += this.vx;
            this.y += this.vy;

            if(this.vy > this.maxFallSpeed) {
                this.vy = this.maxFallSpeed;
            }
            if(this.x < this.leftBound) {
                this.x = this.leftBound;
            }
            if(this.y > this.lowerBound) {
                this.y = this.lowerBound;
            }
            if(this.y < this.upperBound) {
                this.y = this.upperBound;
            }
        }
        if(!this.alive && this.y >= this.lowerBound) {
            this.active = false;
        }
    }
    reset() {
        console.log('reset');
        start_screen.style.visibility = 'visible';
        game_hud.style.visibility = 'hidden';
        this.alive = true;
        this.center();
        shooter.reset();
        background.scrolling = true;

        if (this.score > this.highScore) {
            this.highScore = this.score;
        }
        this.score = 0;
        this.updateHighScore();
        this.updateCurrentScore();
    }
    updateCurrentScore() {
        current_score.textContent = `Score: ${this.score.toString()}`;
    }
    updateHighScore() {
        high_score.textContent = `High: ${this.highScore.toString()}`;

        localStorage.highScore = this.highScore;
    }
    loadHighScore() {
        if (localStorage.highScore) {
            this.highScore = localStorage.highScore;
        }
        else {
            this.highScore = 0;
        }
        this.updateHighScore();
    }
    init() {
        this.center();
    }
    start() {
        this.active = true;
        this.alive = true;
        this.vx = this.leftSpeed;
        this.flap();
        start_screen.style.visibility = 'hidden';
        game_hud.style.visibility = 'visible';
        shooter.shooting = true;
    }
    flap() {
        this.vy = this.flapHeight;
        if(this.vy < this.flapHeight) {
            this.vy = this.flapHeight;
        }
        sound.play('flap');
    }
    kill() {
        background.scrolling = false;
        this.flap();
        this.alive = false;
        shooter.shooting = false;
        //sound.play('moo', 0.75);
        sound.play('oink', 0.75);
        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.highScore = this.highScore;
        }
    }
    eat() {
        this.score++;
        this.updateCurrentScore();
        sound.play('chomp');
    }
    center() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
    }
    draw() {
        let ox, oy;
        let flaps = ['up', 'mid', 'down', 'mid'];
        let flapTime = 300;
        let flapSegment = flapTime / 4;
        if (this.alive) {
            let current = _time % flapTime;
            let flapState = flaps[Math.floor(current / flapSegment)];
            switch (flapState) {
                case 'mid':
                    ox = 0;
                    oy = 0;
                    break;
                case 'up':
                    ox = 160;
                    oy = 0;
                    break;
                case 'down':
                    ox = 0;
                    oy = 160;
                    break;
            }
        }
        else {
            ox = 160;
            oy = 160;
        }
        this.u = ox;
        this.v = oy;

        let s = this;
        _context.drawImage(s.img, s.u, s.v, 160, 160, s.x-45, s.y-45, 90, 90);
    }
}

export default new Player();