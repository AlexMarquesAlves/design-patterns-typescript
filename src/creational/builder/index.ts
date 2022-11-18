import { log } from "console";
import { MainDishBuilder } from "./classes/main-dish-builder";
import { VeganDishBuilder } from "./classes/vegan-dish-builder";

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal();
log(mainDishBuilder.getMeals());
log(mainDishBuilder.getPrice());

log("\n");

mainDishBuilder.reset();
const meal2 = mainDishBuilder.makeBeverage().getMeals();
log(meal2);

log("\n");

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().getMeals();
log(veganMeal);
log(veganMeal.getPrice());
