"use strict";
class Vehicle {
    constructor(_make, _model, _year, _rented) {
        this._make = _make;
        this._model = _model;
        this._year = _year;
        this._rented = _rented;
    }
    get make() {
        return this._make;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get rented() {
        return this._rented;
    }
    set rented(val) {
        this._rented = val;
    }
    rent() {
        if (this._rented) {
            console.log("Sorry, Vehicle not avalaible");
        }
        else {
            this._rented = true;
            console.log("Vehicle rented successfully");
        }
    }
    return() {
        if (this._rented) {
            this._rented = false;
            console.log("Vehicle Returned!");
        }
        else {
            console.log("sorry this vehicle is not rented");
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, rented, FuelType, NumofPersons) {
        super(make, model, year, rented);
        this.FuelType = FuelType;
        this.NumofPersons = NumofPersons;
    }
    rentalrate() {
        return 2000;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, rented, FuelType, NumofPersons) {
        super(make, model, year, rented);
        this.FuelType = FuelType;
        this.NumofPersons = NumofPersons;
    }
    rentalrate() {
        return 3000;
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, year, rented, FuelType, NumofPersons) {
        super(make, model, year, rented);
        this.FuelType = FuelType;
        this.NumofPersons = NumofPersons;
    }
    rentalrate() {
        return 700;
    }
}
const rentVehicle = new Car("Toyota", "Prado", 2019, false, "Petrol", 4);
rentVehicle.rent();
rentVehicle.rent();
rentVehicle.return();
rentVehicle.return();
//# sourceMappingURL=app.js.map