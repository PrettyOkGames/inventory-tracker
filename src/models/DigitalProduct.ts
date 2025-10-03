import {Product} from "./Product";
class DigitalProduct extends Product {
    fileSize: number;

    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price)
        this.fileSize = fileSize
    }

    getPriceWithTax(taxRate: number) {

    }
    get productWeight(): number {
        return this.weight
    }
}