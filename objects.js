
console.log("\n")
//sample object created
const bird ={
    name : "Eagle",
    eyes : "blue",
    age : "72",  
}

//inherited some properties of above objects
const bird2 ={
    name: bird.name,
    eyes: "red",
    age: "50"
}
console.log("Inherited property from object bird",bird2)

console.log("\n")


//array of different objects
const car =[
    {name:"Jeep",year:"2022",cost:"24lakhs"},
    {name:"Ecco", year:"2016", cost:"3lakhs"},
    {name:"EcoSport", year:"2014", cost:"14lakhs"}
]
console.log("Available cars in stores are:")
car.forEach(car => {
    console.log(`Name: ${car.name}, Year: ${car.year}, Cost: ${car.cost}`);
});


//nested objects
console.log("\n")
const person={
    name:"Alice",
    age:"58",
    profession:"Teacher",
    address:{
        houseNo:"124/W1",
        street:"London street",
        postCode:"ZAP 1818",
    }
}

console.log("Missing person details")
console.log(`Name:${person.name}, Age:${person.age}, Profession:${person.profession}, Address:${person.address.houseNo},${person.address.street},${person.address.postCode}`)

console.log("\n")

//DELETE PROPERTIES
function deleteFunc() {
    car.forEach(function (obj) {
        delete obj.year
    });

    console.log(JSON.stringify(car));
}
deleteFunc();



