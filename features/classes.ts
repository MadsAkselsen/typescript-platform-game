/* class Vehicle {
  // adding 'public' to the parameter is the same adding that value as a property to the class
  // This also causes the constructor to be automatically called in child classes - even though the
  // child classes don't have a constructor.
  constructor(public color: string) {}

  // protected can be used within this class and classes that extends this class
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  // private can only be accessed within this class
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
 */
