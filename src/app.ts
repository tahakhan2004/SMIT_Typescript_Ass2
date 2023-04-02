
abstract class Vehicle{ 
private _make: string;
private _model : string;
private _year : number;
private _rented: boolean;
  constructor(_make: string, _model : string, _year: number, _rented: boolean){
    this._make = _make
    this._model = _model
    this._year = _year
    this._rented = _rented
  }

  get make(){
    return this._make
  }
  get model(){
    return this._model
  }
  get year(){
    return this._year
  }
  get rented(){
    return this._rented
  }

  set rented(val: boolean){
    this._rented = val
  }

  rent():void{
    if(this._rented){
      console.log("Sorry, Vehicle not avalaible")
    }else{
      this._rented = true
      console.log("Vehicle rented successfully");
    }
  }

  return():void{
    if(this._rented){
      this._rented = false
      console.log("Vehicle Returned!");
    }else{
      console.log("sorry this vehicle is not rented");
    }
  }
  abstract rentalrate() : number;
}

 class Car extends Vehicle{
  constructor(make: string, model: string, year:number, rented:boolean, private FuelType: string, private NumofPersons: number){
    super(make, model, year, rented)
  }
  rentalrate(): number {
    return 2000
  }
} 

class Truck extends Vehicle{
  constructor(make: string, model: string, year:number, rented:boolean, private FuelType: string, private NumofPersons: number){
    super(make, model, year, rented)
  }
  rentalrate(): number {
    return 3000
  }
}

 class Motorcycle extends Vehicle{
  constructor(make: string, model: string, year:number, rented:boolean, private FuelType: string, private NumofPersons: number){
    super(make, model, year, rented)
  }
  rentalrate(): number {
    return 700
  }
}

const rentVehicle = new Car("Toyota", "Prado", 2019, false, "Petrol", 4)
rentVehicle.rent()
rentVehicle.rent()
rentVehicle.return()
rentVehicle.return()
