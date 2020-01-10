//point of space object
function Point(viewId) {
    this.x = 0;
    this.y = 0;
    this.id = '';
    this.state = 'default';
    this.viewId = viewId;
}
// methods - to prototype because less of memory usage (there are lot of point objects in scroller)
Point.prototype.fill = function () {
    document.getElementById(this.viewId).insertAdjacentHTML(
        'beforeend',
        '<div id="' + this.id + '" class="' + this.state + '"></div>'
    );
};

Point.prototype.change = function (state) {
    this.state = state;
    document.getElementById(this.id).className = state;
};

Point.prototype.setDomStyle = function (property, value) {
    document.getElementById(this.id).style[property] = value;
};