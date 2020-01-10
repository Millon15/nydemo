const yoff = 510;
let vector = 0;
let touch = 0;
let xpos = 0;
let dir = 0;

function rotatorMove() {
    document.getElementById('bitmap').style.top = (Math.sin(vector) * 100) + yoff + 'px';
    xpos = (dir == 0) ? xpos + 4 : xpos - 4;
    document.getElementById('bitmap').style.left = xpos + 'px';
    if (vector >= 6.28) {
        vector = 3.14;
        touch++;
        dir = (dir == 0) ? 1 : 0;
    }
    else {
        vector  += 0.07;
    }
    document.getElementById('bitmap').style.zIndex = touch;// 'cross-scroller-layers' effect
    if (touch >= 7) {
        touch = vector = 0;
    }
    setTimeout('rotatorMove()', 40);
}