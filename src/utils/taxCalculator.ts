import {Product} from "../models//Product";

function calculateTax(product: Product): number {
    return product.getPriceWithTax(0.07)
}