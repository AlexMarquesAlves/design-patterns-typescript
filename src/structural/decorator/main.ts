import { ProductCustomizationDecorator } from "./product/product-customization-decorator";
import { ProductStampDecorator } from "./product/product-stamp-decorator";
import { TShit } from "./product/t-shirt";

const tShit = new TShit();
const stampedTShit = new ProductStampDecorator(tShit);
const customizedTShit = new ProductCustomizationDecorator(tShit);

console.log(tShit.getPrice(), tShit.getName());
console.log(stampedTShit.getPrice(), stampedTShit.getName());
console.log(customizedTShit.getPrice(), customizedTShit.getName());
