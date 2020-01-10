function mapper(string) {

    this.string = string; // scroller message string
    this.xMapSize = 8; // symbol map - bitMatrix of symbols
    this.yMapSize = 8;
    this.ptMap = [];// array of symbol buffer objects
    this.viewId = 'bitmap';
    this.bitN = 0;
    this.charN = 0;
    //  point id formatter
    this.id = function (x, y) {
        return "b" + x + "," + y;
    };

    this.getRow = function () {
        this.bitN++;
        if (this.bitN == this.xMapSize ) {
            this.mapChar(this.string.charCodeAt(this.charN));
            this.bitN = 0;
            if (this.string.length == this.charN + 1) {
                this.charN = 0;
            }
            else {
                this.charN++;
            }
        }
        return this.currentRow();
    };

    this.currentRow = function () {
        let row =[];
        for (let y = 0; y != this.yMapSize; y++) {
            row[y] = this.ptMap[this.id(this.bitN, y)];
        }
        return row;
    };

    this.mapChar = function (code) {
        let bitMatrix = Char8.getGlyph(code);
        for (let y = 0; y != this.yMapSize; y++) {
            let byte = ("00000000" + bitMatrix[y].toString(2)).substr(-8);// map partial char binary code on 8 bit zero mask
            for (let x = 0; x != this.xMapSize; x++) { // shift bitmap
                this.ptMap[this.id(x, y)].change(byte.charAt(x) == '1' ? 'set' : 'default');
                this.ptMap[this.id(x, y)].setDomStyle('opacity',0.7); // 'scan' bitmap visualization effect
            }
        }
    };

    this.fillMap = function () {
        for (let y = 0; y != this.yMapSize; y++) {
            for (let x = 0; x != this.xMapSize; x++) {
                this.createItem(x, y);
            }
        }
    };

    this.createItem = function (x, y) {
        let objId = this.id(x, y);
        this.ptMap[objId] = new Point(this.viewId);
        this.ptMap[objId].x = x;
        this.ptMap[objId].y = y;
        this.ptMap[objId].id = objId;
        this.ptMap[objId].fill();
    };
}