export class Product {
    sku: string;
    name: string;
    price: number;

    constructor(sku: string, name: string, price: number) {
        this.sku = sku
        this.name = name
        this.price = price
    }
    
    displayDetails() {
        return `SKU: ${this.sku}, Name: ${this.name}`
        //returns a formatted string with the product’s details
    }
    public getPriceWithTax(taxRate: number) {
        //calculates the final price of the product with tax
        return this.price * (taxRate + 1);
    }
}