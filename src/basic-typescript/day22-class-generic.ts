class List<T> {
  private items: T[];

  constructor(...items: T[]) {
    this.items = items;
  }

  add(item: T) {
    this.items.push(item);
  }

  addMultiple(...items: T[]) {
    this.items.push(...items);
  }

  getAll(): T[] {
    return this.items;
  }
}

let randomList = new List<number | string>(1, 2, 'three');
randomList.add(4);
randomList.addMultiple(5, 'six', 7);
console.log(randomList.getAll());
//Output: [1, 2, 'three', 4, 5, 'six', 7]