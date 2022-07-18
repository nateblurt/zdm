
class Background {
    constructor() {
        this.scrolling = true;
        this.speed = 5;
        this.offset = 0;
        this.image = 'images/desert.png';
    }
    scroll() {
        if(this.scrolling) {
            this.offset -= this.speed;
            background_a.style.backgroundPosition = `${this.offset}px 0px`;
        }
    }
    choose(character) {
        switch (character) {
            case 'cow':
                this.image = 'images/desert.png';
                this.character = 'cow';
                break;
            case 'pig':
                this.image = 'images/farm.png';
                this.character = 'pig';
                break;
        }
        background_a.style.background = `url("${this.image}")`;
        background_a.style.size = '100%';
    }
}

export default new Background();