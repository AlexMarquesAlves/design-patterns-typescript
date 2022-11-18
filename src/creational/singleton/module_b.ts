import { MyDatabaseClassic } from "./db/my-database-classic";
import "./module_a";

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({ name: "Roberto", age: 30 });
myDatabaseClassic.add({ name: "Joanna", age: 50 });
myDatabaseClassic.add({ name: "Luíza", age: 25 });
myDatabaseClassic.show();
