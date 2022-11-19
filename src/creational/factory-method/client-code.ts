import { CarFactory } from "./factories/car-factory";
import { randomCarAlgorithm } from "./main/random-vehicle-algorithm";
import { randomNumbers } from "./utils/random-numbers";

const carFactory = new CarFactory();
const customerNames = ["Ana", "Helena", "Joanna", "João", "Léo"];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUP(name);
  vehicle.stop();
  const newCar = carFactory.pickUP(name, `NOVO CARRO - ${randomNumbers(100)}`);
  newCar.stop();
  console.log("\n");
}
