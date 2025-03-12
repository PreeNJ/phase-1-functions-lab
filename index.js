// Code your solution in tf
function distanceFromHqInBlocks(pickUpLocation) {
  const headquarters = "42";
  return Math.abs(pickUpLocation - headquarters);
}

console.log(distanceFromHqInBlocks(30));
console.log(distanceFromHqInBlocks(37));

function distanceFromHqInFeet(pickUpLocation){
let blocks = distanceFromHqInBlocks(pickUpLocation);
  return blocks * 264;
}

console.log(distanceFromHqInFeet(22));
console.log(distanceFromHqInFeet(17));


function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start) * 264;
}

console.log(distanceTravelledInFeet(34, 38)); 
console.log(distanceTravelledInFeet(20, 30)); 
console.log(distanceTravelledInFeet(10, 27)); 

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination); 

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; 
    } else if (distance > 2000 && distance <= 2500) {
        return 25; 
    } else {
        return "cannot travel that far"; 
    }
}

console.log(calculatesFarePrice(34, 32)); 
console.log(calculatesFarePrice(34, 40)); 
console.log(calculatesFarePrice(34, 60)); 
console.log(calculatesFarePrice(34, 80)); 
