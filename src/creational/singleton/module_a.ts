import { MyDatabaseModule } from "./db/my-database-module";

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: "Leo", age: 22 });
myDatabaseClassic.add({ name: "Eliz", age: 38 });
myDatabaseClassic.add({ name: "Luiz", age: 50 });

export { myDatabaseClassic };
