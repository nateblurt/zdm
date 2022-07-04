let context = canvas.getContext('2d');

let frame = {};

let sprites = [];

frame.add = (src, s, d)=> {
    sprites.push({src:src,s:s,d:d});
}

frame.draw = (source, sr, dr) => {
    context.clearRect(0,0,canvas.width, canvas.height);
    for(let x=0, s=null; x<sprites.length; x++) {
        s = sprites[x];
        context.drawImage(s.src, s.s[0],s.s[1],s.s[2],s.s[3], s.d[0],s.d[1],s.d[2],s.d[3]);
    }
    sprites = [];
}

export default frame;