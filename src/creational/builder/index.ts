import { MealBox } from "./classes/meal-box";
import { Beans, Beverage, Dessert, Meat, Rice } from "./classes/meals";

const rice = new Rice("Arroz", 5);
const beans = new Beans("Feijão", 10);
const meat = new Meat("Carne", 20);
const beverage = new Beverage("Bebida", 15);
const dessert = new Dessert("Sobremesa", 25);
const mealBox = new MealBox();
mealBox.add(rice, beans, meat, beverage, dessert);
console.log(mealBox);
console.log(mealBox.getPrice());
