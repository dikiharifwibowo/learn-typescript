"use strict";
class List {
    constructor(...items) {
        this.items = items;
    }
    add(item) {
        this.items.push(item);
    }
    addMultiple(...items) {
        this.items.push(...items);
    }
    getAll() {
        return this.items;
    }
}
let randomList = new List(1, 2, 'three');
randomList.add(4);
randomList.addMultiple(5, 'six', 7);
console.log(randomList.getAll());
//Output: [1, 2, 'three', 4, 5, 'six', 7]
