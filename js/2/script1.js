//1.1
function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return {min, max};
}

const numbers = [7, 1, 5, 10, 4];
const result = findMinMax(numbers);
console.log(result);

//1.2
function compareObjects(obj1, obj2) {
    const keys = Object.keys(obj1);

    for (let key of keys) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true; // якщо всі збігаються
}

const obj1 = {name: "Bogdan", age: 20};
const obj2 = {name: "Vlad", age: 19};
const obj3 = {name: "Bogdan", age: 20};
const obj4 = {name: "Bogdan", age: 60};

console.log(compareObjects(obj1, obj2));
console.log(compareObjects(obj1, obj3));
console.log(compareObjects(obj2, obj4));
