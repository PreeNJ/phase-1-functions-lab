// Code your solution in tf
function distanceFromHqInBlocks(pickUpLocation) {
  const headquarters = "57";
  return Math.abs(pickUpLocation - headquarters);
}

console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(63));

function distanceFromHqInFeet(pickUpLocation){
let blocks = distanceFromHqInBlocks(pickUpLocation);
  return blocks * 264;
}

console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(67));


function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start) * 264;
}

console.log(distanceTravelledInFeet(34, 38)); 
console.log(distanceTravelledInFeet(50, 60)); 
console.log(distanceTravelledInFeet(60, 50)); 