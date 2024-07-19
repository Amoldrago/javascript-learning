function areObjectsEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

// Creating two objects for comparison
let car1 = { make: "Toyota", model: "Corolla", year1: 2021 };
let car2 = { make: "Toyota", model: "Corolla", year: 2021 };

// Comparing the two objects
console.log("Are car1 and car2 equal?", areObjectsEqual(car1, car2));