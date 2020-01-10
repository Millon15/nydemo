//  Space mapping 2x2 example:
//  00 10  X
//  01 11
//  Y
function Scroller(viewId, name, string) {

    this.viewId = viewId;
    this.name = name;
    this.mapper = new mapper(string);
    this.speed = 16;
    this.unitSize = 5;// size
    this.xSize = 112; // scroller bit width
    this.ySize = 8; // scroller bit height
    this.pt = [];  // array to store the field objects

    this.onSpace = function (objId) {
        this.pt[objId].change('pick');
    };

    this.runTime = function () {
        this.run = setInterval(this.name + '.scrollStep()', this.speed);
    };

    this.scrollStep = function () {
        this.rlc();
        let row = this.mapper.getRow();
        for (let y = 0; y != this.ySize; y++) {
            this.pt[this.id(this.xSize - 1, y)].change(row[y].state);
            row[y].setDomStyle('opacity', 0.2); // 'scan' effect on bitmap
        }
    };

    this.rlc = function () {
        for (let x = 0; x != this.xSize; x++) {
            let nextX = x + 1 >= this.xSize ? 0 : x + 1;
            for (let y = 0; y != this.ySize; y++) {
                this.pt[this.id(x, y)].change(this.pt[this.id(nextX, y)].state);// analog of 'rlc' asm command 'rotate left with carry flag'
            }
        }
    };

    this.id = function (x, y) {
        return +x + "," + y;
    };

    this.fillMap = function () {
        for (let y = 0; y != this.ySize; y++) {
            for (let x = 0; x != this.xSize; x++) {
                this.createItem(x, y);
            }
        }
    };

    this.createItem = function (x, y) {
        var objId = this.id(x, y);
        this.pt[objId] = new Point(this.viewId);
        this.pt[objId].x = x;
        this.pt[objId].y = y;
        this.pt[objId].id = objId;
        this.pt[objId].fill();
        this.pt[objId].setDomStyle('zIndex', y);
    };
}
