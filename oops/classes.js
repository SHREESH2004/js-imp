/*create blueprint of object from sample fns and prorperties which will create new object with different values
but same properties and functions*/

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getDetails = function () {
        return `Car Details: ${this.brand} ${this.model} (${this.year})`;
    }
    this.writeDetails = (() => {
        let h1 = document.createElement('h1');
        h1.textContent = this.getDetails(h1);
        document.body.appendChild(h1);
    });
}
Car.prototype.company = "Car Manufacturer";
/*Methods are added to the .prototype so that all instances share one copy (saving memory). shared memory*/
const newCar1 = new Car("Toyota", "Corolla", 2020);
const newCar2 = new Car("Honda", "Civic", 2021);
console.log([newCar1, newCar2]);
newCar1.writeDetails();
newCar2.writeDetails();