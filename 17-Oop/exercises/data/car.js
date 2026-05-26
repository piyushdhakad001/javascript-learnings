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
/*
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
*/

// 17d (SOLUTION)-------------------------------
/*
class Car {
  brand;
  model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.brand = carDetails.brand;
    this.model = carDetails.model;
  }

  displayInfo() {
    const trunkStatus = this.isTrunkOpen ? 'Open' : 'Closed';
    console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h , Trunk: ${trunkStatus} `);

    // console.log(`isTrunkOpen: ${this.isTrunkOpen}`);
  }

  go() {
    if (this.speed <= 200 || this.isTrunkOpen === true) {
      this.speed += 5;
    }
  }

  break() {
    if (this.speed >= 5) {
      this.speed -= 5;
    }
  }

  openTrunk() {
    if (this.speed <= 0) {
      this.isTrunkOpen = true;
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false;
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
car2.break();
car1.go();
car1.break();

car1.openTrunk();
car2.openTrunk();
// car1.closeTrunk();
// car2.closeTrunk();

car1.displayInfo();
car2.displayInfo();
*/

// 17e (SOLUTION)----------------
/*
class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }

  displayInfo() {
    const trunkStatus = this.isTrunkOpen ? "Open" : "Closed";
    console.log(
      `${this.#brand} ${this.#model}, Speed: ${this.speed} km/h , Trunk: ${trunkStatus} `,
    );
  }

  go() {
    if (this.speed <= 200 || this.isTrunkOpen === true) {
      this.speed += 5;
    }
  }

  break() {
    if (this.speed >= 5) {
      this.speed -= 5;
    }
  }

  openTrunk() {
    if (this.speed <= 0) {
      this.isTrunkOpen = true;
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car {
  acceleration;

  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go() {
    this.speed += this.acceleration;

    if (this.speed > 300) {
      this.speed = 300;
    }
  }

  openTrunk() {
    console.log("Race cars do not have a trunk.");
  }

  closeTrunk() {
    console.log("Race cars do not have a trunk.");
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
const raceCar = new RaceCar({
  brand: "McLaren",
  model: "F1",
  acceleration: 20,
});

car2.go();
car2.break();
car1.go();
car1.break();
raceCar.go();
raceCar.break();

car1.openTrunk();
car2.openTrunk();
raceCar.openTrunk();
// car1.closeTrunk();
// car2.closeTrunk();
raceCar.closeTrunk();

car1.displayInfo();
car2.displayInfo();
raceCar.displayInfo();
*/


// 17g  (SOLUTION)

class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }

  displayInfo() {
    const trunkStatus = this.isTrunkOpen ? "Open" : "Closed";
    console.log(
      `${this.#brand} ${this.#model}, Speed: ${this.speed} km/h , Trunk: ${trunkStatus} `,
    );
  }

  go() {
    if (this.speed <= 200 || this.isTrunkOpen === true) {
      this.speed += 5;
    }
  }

  break() {
    if (this.speed >= 5) {
      this.speed -= 5;
    }
  }

  openTrunk() {
    if (this.speed <= 0) {
      this.isTrunkOpen = true;
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car {
  acceleration;

  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go() {
    this.speed += this.acceleration;

    if (this.speed > 300) {
      this.speed = 300;
    }
  }

  openTrunk() {
    console.log("Race cars do not have a trunk.");
  }

  closeTrunk() {
    console.log("Race cars do not have a trunk.");
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
const raceCar = new RaceCar({
  brand: "McLaren",
  model: "F1",
  acceleration: 20,
});

car2.go();
car2.break();
car1.go();
car1.break();
raceCar.go();
raceCar.break();

car1.openTrunk();
car2.openTrunk();
raceCar.openTrunk();
// car1.closeTrunk();
// car2.closeTrunk();
raceCar.closeTrunk();

car1.displayInfo();
car2.displayInfo();
raceCar.displayInfo();
