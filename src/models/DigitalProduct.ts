import {Product} from "./Product";
export class DigitalProduct extends Product {
    fileSize: number;

    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price)
        this.fileSize = fileSize
    }

    getPriceWithTax() {
        return this.price
    }
    get filesSize(): string {
        if (this.fileSize < 1000) {
            return `${this.fileSize} KB`
        }
        else if (this.fileSize >= 1000 && this.fileSize < 1000000) {
            return `${(this.fileSize / 1000).toFixed(2)} MB`
        }
        else {
            return `${(this.fileSize / 1000000).toFixed(2)} GB`
        }
    }
}