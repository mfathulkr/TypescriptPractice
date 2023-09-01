import { Product } from './product';

class Inventory {
    private products: Product[] = [];
    private transactions: string[] = [];

    addProduct(product: Product) {
        this.products.push(product);
        this.logTransaction(`Added ${product.name} to inventory`);
    }

    updateStock(productName: string, newStock: number) {
        const product = this.products.find(p => p.name === productName);
        if (product) {
            product.stock = newStock;
            this.logTransaction(`Updated stock for ${product.name} to ${newStock}`);
        }
    }

    logTransaction(message: string) {
        this.transactions.push(`${message}`);
    }

    generateReportAsJson(): string {
        const report = {
            transactions: this.transactions,
            products: this.products,
        };
        return JSON.stringify(report, null, 2); // Use 2 spaces for formatting
    }
}

export { Inventory };