import { Vehicle } from "./vehicle";

export class Bicycle implements Vehicle {
  constructor(private name: string) {}

  pickUP(customerName: string): void {
    console.log(`${this.name} está a buscar ${customerName}.`);
  }
  stop(): void {
    console.log(`${this.name} parou.`);
  }
}
