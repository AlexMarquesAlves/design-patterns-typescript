import { Vehicle } from "../vehicle/vehicle";

export abstract class VehicleFactory {
  abstract getVehicle(vehicleName: string): Vehicle;

  pickUP(customerName: string, vehicleName: string): Vehicle {
    const car = this.getVehicle(vehicleName);
    car.pickUP(customerName);
    return car;
  }
}
