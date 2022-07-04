
class Background {
    constructor() {
        this.scrolling = true;
        this.speed = 5;
        this.offset = 0;
    }
    scroll() {
        if(this.scrolling) {
            this.offset -= this.speed;
            background_a.style.backgroundPosition = `${this.offset}px 0px`;
        }
    }
}

export default new Background();