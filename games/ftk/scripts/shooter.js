import player from './player.js';

class Shooter {
    constructor() {
        this.x = 500;
        this.y = 500;
        this.list = [];
        this.speed = 7.5;
        this.lastShot = 0;
        this.shotDelay = 400;
        this.hitbox = 42;
        this.shotCount = 1;
        this.foodFrequency = 5;
        this.shooting = false;
    }
    reset() {
        this.shotCount = 1;
        this.list = [];
    }
    physics() {
        if(!this.shooting) return;
        if(_time - this.lastShot > this.shotDelay) {
            let type = 'food';
            if(this.shotCount % this.foodFrequency) {
                type = 'mine';
            }
            this.list.push({x:2000, y:Math.random()*900+90,type:type,visible:true});
            this.lastShot = _time;
            this.shotCount++;
        }
        for(let x = 0, s = null; x < this.list.length; x++) {
            if(player.alive) {
                this.list[x].x -= this.speed;
                s = this.list[x];
                if(_distance(player.x, player.y, s.x, s.y) < this.hitbox) {
                    if(s.type == 'mine') {
                        player.kill();
                    }
                    else if(s.visible) {
                        s.visible = false;
                        player.eat();
                    }
                }
                if(s.x < -200) {
                    this.list.shift();
                }
            }
        }
    }
    draw() {
        for(let x = 0, s = null; x < this.list.length; x++) {
            s = this.list[x];
            if(s.type == 'mine') {
                _context.drawImage(mine_img, 0, 0, 160, 160, s.x-45, s.y-45, 90, 90);
            }
            else {
                if(s.visible) {
                    _context.drawImage(haybale_img, 0, 0, 160, 160, s.x-45, s.y-45, 90, 90);
                }
            }
        }
    }
}

export default new Shooter();