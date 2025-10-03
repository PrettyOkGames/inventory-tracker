import {Product} from "./Product";
class DigitalProduct extends Product {
    fileSize: number;

    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price)
        this.fileSize = fileSize
    }

    getPriceWithTax(itemPrice: number, taxRate: number): number {
        return 2
    }
}