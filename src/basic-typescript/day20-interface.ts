interface Size {
  width: number;
  height: number;
  getWidth(): number;
  getHeight(): number;
}

class Shapes implements Size {
  constructor(public width: number, public height: number) {}

  getWidth(): number {
    return this.width;
  }
  
  getHeight(): number {
    return this.height;
  }
}

let shapes = new Shapes(10, 20);
console.log(shapes.getWidth());
console.log(shapes.getHeight());