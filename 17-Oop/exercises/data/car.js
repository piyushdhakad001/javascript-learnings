// 17a (SOLUTION)
/*
class Car {
  brand;
  model;

  constructor(carDetails) {
    this.brand = carDetails.brand;
    this.model = carDetails.model;
  }
}

const car1 = new Car({
  brand: 'Toyota',
  model: 'Corolla'
});
const car2 = new Car({
  brand: 'Tesla',
  model: 'Model 3'
});

console.log(car1);
console.log(car2);
*/

// 17b (SOLUTION)--------------------------
/*
class Car {
  brand;
  model;

  constructor(carDetails){
    this.brand = carDetails.brand;
    this.model = carDetails.model;
  }
  displayInfo(){
    console.log(`${this.brand} ${this.model}`)

  }
}

const car1 = new Car({
  brand: 'Toyota',
  model: 'Corolla'
});
const car2 = new Car({
  brand: 'Tesla', 
  model: 'Model 3'
});

car1.displayInfo();
car2.displayInfo();
*/

// 17c (SOLUTION)-----------------------------

class Car {
  brand;
  model;
  speed = 0;

 

  constructor(carDetails) {
    this.brand = carDetails.brand;
    this.model = carDetails.model;
  
  }

   go() {
    if (this.speed <= 200) {
      this.speed += 5;
    }
  }

  break() {
    if (this.speed >= 5) {
      this.speed -= 5;
    }
  }

  displayInfo() {
    console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h`);
  }
}

const car1 = new Car({
  brand: "Toyota",
  model: "Corolla",
  
});
const car2 = new Car({
  brand: "Tesla",
  model: "Model 3",
  
});

car2.go();
car2.go();
car2.break();
car1.go();
car1.go();
car1.break();

car1.displayInfo();
car2.displayInfo();
