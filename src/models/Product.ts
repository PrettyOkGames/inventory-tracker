export class Product {
    sku: string;
    name: string;
    price: number;

    constructor(sku: string, name: string, price: number) {
        this.sku = sku
        this.name = name
        this.price = price
    }
    
    displayDetails(productDetails: string) {
        return `${productDetails}`
        //returns a formatted string with the product’s details
    }
    getPriceWithTax(itemPrice: number, taxRate: number) {
        //calculates the final price of the product with tax
        let realPrice = itemPrice * (taxRate + 1);
        return realPrice;
    }
}