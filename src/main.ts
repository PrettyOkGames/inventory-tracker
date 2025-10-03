import { Product } from "./models/Product";
import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";

const currentProducts: Product[] = []

const mouseItem = new PhysicalProduct("1001", "Cool Mouse", 35, 0.2);
const funGame = new DigitalProduct("1010", "Funnest Game Ever!", 14.99, 321983);

currentProducts.push(mouseItem)
currentProducts.push(funGame)

currentProducts.forEach(item => {
    if (item instanceof PhysicalProduct) {
        console.log(`${item.name}: ${item.getPriceWithTax(0.1)}, Weight: ${item.productWeightInKilograms}`)
    }
    else if (item instanceof DigitalProduct) {
        console.log(`${item.name}: ${item.getPriceWithTax()}, File size: ${item.filesSize}`)
    }
});