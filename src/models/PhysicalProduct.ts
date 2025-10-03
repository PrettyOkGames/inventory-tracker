import {Product} from "./Product";
class PhysicalProduct extends Product {
    weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price)
        this.weight = weight
    }

    getPriceWithTax(taxRate: number) {

    }
    get productWeight(): number {
        return this.weight
    }
}