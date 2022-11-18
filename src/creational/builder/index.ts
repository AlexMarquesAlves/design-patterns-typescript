import { log } from "console";
import { MainDishBuilder } from "./classes/main-dish-builder";

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal();
log(mainDishBuilder.getMeals());
log(mainDishBuilder.getPrice());

mainDishBuilder.reset();
const meal2 = mainDishBuilder.makeBeverage().getMeals();
log(meal2);
