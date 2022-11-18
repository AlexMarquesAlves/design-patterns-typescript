import { MyDatabaseClassic } from "./db/my-database-classic";

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({ name: "Leo", age: 22 });
myDatabaseClassic.add({ name: "Eliz", age: 38 });
myDatabaseClassic.add({ name: "Luiz", age: 50 });
