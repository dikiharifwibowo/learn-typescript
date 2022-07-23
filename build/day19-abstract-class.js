"use strict";
class Vehicle {
    start() {
        console.log("Starting vehicle");
    }
    getMyWheels() {
        console.log(`This vehicle has ${this.wheels} wheels`);
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
class MotorCycle extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
let car = new Car();
console.log(car.wheels);
car.start();
car.getMyWheels();
//Output: This vehicle has 4 wheels
let motorCycle = new MotorCycle();
console.log(motorCycle.wheels);
motorCycle.start();
motorCycle.getMyWheels();
//Output: This vehicle has 2 wheels
