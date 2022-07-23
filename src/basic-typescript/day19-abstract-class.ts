abstract class Vehicle {
  abstract wheels: number;

  start(): void {
    console.log("Starting vehicle");
  }

  getMyWheels(): void {
    console.log(`This vehicle has ${this.wheels} wheels`);
  }
}

class Car extends Vehicle {
  wheels: number = 4;
}

class MotorCycle extends Vehicle {
  wheels: number = 2;
}

let car = new Car();
console.log(car.wheels);
car.start();
car.getMyWheels();
//Output: This vehicle has 4 wheels

let motorCycle = new MotorCycle();
console.log(motorCycle.wheels)
motorCycle.start();
motorCycle.getMyWheels()
//Output: This vehicle has 2 wheels