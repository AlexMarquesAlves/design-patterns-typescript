import { MyDatabaseFunction } from "./db/my-database-function";

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: "Leo", age: 22 });
myDatabaseClassic.add({ name: "Eliz", age: 38 });
myDatabaseClassic.add({ name: "Luiz", age: 50 });

export { myDatabaseClassic };
