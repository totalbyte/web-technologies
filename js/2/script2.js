//2.1
function isInRange(number, min, max) {
    return number >= min && number <= max;
}

console.log(isInRange(30, 5, 30));
console.log(isInRange(35, 5, 30));

//2.2
let isActive = true;

isActive = !isActive;

console.log(isActive);
