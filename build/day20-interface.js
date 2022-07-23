"use strict";
class Shapes {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
}
let shapes = new Shapes(10, 20);
console.log(shapes.getWidth());
console.log(shapes.getHeight());
