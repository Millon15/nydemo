function scrollerTransform() {
    let xPix = scroller.unitSize * scroller.xSize;
    let yPix = scroller.unitSize * scroller.ySize;
    let view = document.getElementById('scroller');
    let ready = true;
    if (view.offsetWidth > xPix) {
        view.style.width = (view.offsetWidth - 4) + 'px';
        ready = false;
    }
    if (view.offsetWidth < xPix) {
        view.style.width = (view.offsetWidth + 4) + 'px';
        ready = false;
    }
    if (view.offsetHeight > yPix) {
        view.style.height = (view.offsetHeight - 4) + 'px';
        ready = false;
    }
    if (view.offsetHeight < yPix) {
        view.style.height = (view.offsetHeight + 4) + 'px';
        ready = false;
    }
    if (!ready) {
        setTimeout('scrollerTransform()', 29);
    }
};