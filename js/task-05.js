class Car {
  /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */

  static getSpecs(car) {
    console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);
  }

  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */
  constructor(carObj) {
    this._price = carObj.price;
    this.maxSpeed = carObj.maxSpeed;
    this.speed = carObj.speed === undefined ? 0 : carObj.speed;
    this.isOn = carObj.isOn === undefined ? false : carObj.isOn;
    this.distance = carObj.distance === undefined ? 0 : carObj.distance;
  }

  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать со свойством цены автомобиля.
   */

   get price () {
     return this._price;
   }

   set price (newPrice) {
     this._price = newPrice;
   }

  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn() {
    this.isOn = true;
  }

  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {
    const newSpeed = this.speed + value;

    if (newSpeed <= this.maxSpeed) {
      this.speed = newSpeed;
      return;
    }
    
    console.log("This car can not reach such a speed! Calm dowm!");
  }

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    const newSpeed = this.speed - value;

    if (newSpeed >= 0) {
      this.speed = newSpeed;
      return;
    }
    
    console.log("What?! Do you really want your car to move with negative speed?!");
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
      return;
    }

    console.log("I can not calculate the distance, because your car is not on!")
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000