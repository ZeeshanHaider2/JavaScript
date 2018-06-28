
/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with car objects with random color and speed
 * @param {integer} numberOfCars - The number of cars 
 * @returns {array} Array containing the car objects
 */
function generateCars(numberOfCars) {
    const cars = [];

    const carMakes = ['Honda', 'BMW','Fiat','Skoda','Volvo'];
    const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];
    
    for (let i = 0; i < numberOfCars; i++) {
        const car = {};
        const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
        const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);

        car.make = carMakes[randomMakeIndex];
        car.color = carColors[randomColorIndex];
        car.speed = randomIntFromInterval(0, 100);

        cars.push(car);

        
    }

    return cars;
  
}


// We have saved randomly genrated cars in a variable.
const allCars = generateCars(10);
console.log("All cars", allCars);

// here we have filtered the cars with speeds more than 30 and less than 60 by using the filter method.
const slowSpeed = allCars.filter(function(car){

    return car.speed > 30 && car.speed < 60;
       });

console.log("Array of cars with speed between 30 and 60");
console.log(slowSpeed);


// first we will use filter method to filter objects(cars) without color lightyellow.
//Then we will use map method to get  names of those cars in an array.
const carColors = allCars.filter(function(car) {
    return car.color !== "lightyellow";
      }).map(function(car) {
        return car.color;
    });

console.log("Cars with colors except lightyellow");
console.log(carColors);


const newlang = allCars.map(function(car){
     return {
        maerke: car.make,
        farve: car.color,
        fart: car.speed,
     }
});
console.log("Keys renamed into dansih")
console.log(newlang);

//https://stackoverflow.com/questions/4647817/javascript-object-rename-key
let  str = JSON.stringify(allCars);
str = str.replace(/make/g, 'maærke');
str = str.replace(/color/g, 'farve');
str = str.replace(/speed/g, 'fart');

danish = JSON.parse(str);
console.log("Keys renamed into dansih by using JSON.parse(str)")
console.log(danish);
