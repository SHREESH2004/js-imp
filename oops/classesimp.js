class Car {
    constructor(brand, model, year, role) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.role = role;
    }
}

class Admin {
    constructor(carObject) {
        this.car = carObject; 
        this.role = "admin";
    }

    Alldetails() {
        console.log("--- Admin is accessing the Car's details ---");
        console.log([this.car.brand,this.car.model,this.car.year,this.role]);
    }
}

const myCar = new Car("BMW", "Gt20", 2025,"user");
const Admins = new Admin(myCar);


Admins.Alldetails();