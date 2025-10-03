import {Product} from "./Product";
export class PhysicalProduct extends Product {
    weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price)
        this.weight = weight
    }

    getPriceWithTax(taxRate: number) {
        return this.price * (1 + taxRate)
    }
    get productWeightInKilograms() {
        return `${this.weight / 2.205} kg`
    }
}