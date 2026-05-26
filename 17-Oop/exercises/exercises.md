17a). Let's practice OOP by creating a class that represents a car.
`->` Create a new file `data/car.js`, and create a `class Car {}`

`->` Give the Car class 2 properties:`brand` and `model`. Then, create a `constructor` that sets these 2 properties.

`->` Keep all properties public for now (we'll learn why in a leter exercise).

`->` Use this class to generate a few car objects:
`{ brand: 'Toyota', model: 'Corolla' }`
`{ brand: 'Tesla',  model: 'Model 3' }`


17b). Add a method `displayInfo()` that console.logs `$${brand} ${model}` Run `.displayInfo()` for each car, and check the console.


17c). Add a `speed` property, which represents how fast the car is going.
`->` The `speed` should start at 0.
`->` Add 2 methods `go()` (increases speed by 5) and `brake()` (decreases speed by 5).
`->` The speed should be limited between 0 and 200.
`->` Update `displayInfo()` to display the speed at the end:
     `${brand} ${model},  speed: ${speed} km/h`
`->` Call `go()` and `brake()` a few times for each car, call `displayInfo()` and check the console to confirm the code is working.