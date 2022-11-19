import { CarFactory } from "./factories/car-factory";

const carFactory = new CarFactory();
const fusca = carFactory.getVehicle("Fusca");
fusca.pickUP("Joanna");
fusca.stop();
