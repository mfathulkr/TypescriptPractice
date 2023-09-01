"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
class Inventory {
    constructor() {
        this.products = [];
        this.transactions = [];
    }
    addProduct(product) {
        this.products.push(product);
        this.logTransaction(`Added ${product.name} to inventory`);
    }
    updateStock(productName, newStock) {
        const product = this.products.find(p => p.name === productName);
        if (product) {
            product.stock = newStock;
            this.logTransaction(`Updated stock for ${product.name} to ${newStock}`);
        }
    }
    logTransaction(message) {
        this.transactions.push(`${message}`);
    }
    generateReportAsJson() {
        const report = {
            transactions: this.transactions,
            products: this.products,
        };
        return JSON.stringify(report, null, 2); // Use 2 spaces for formatting
    }
}
exports.Inventory = Inventory;
