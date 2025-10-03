import {Product} from "./Product";
class PhysicalProduct extends Product {
    weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price)
        this.weight = weight
    }

    override getPriceWithTax(itemPrice: number, taxRate: number): string {
        return `` + itemPrice * (1 + taxRate)
    }
    get productWeight(): number {
        return this.weight
    }
}