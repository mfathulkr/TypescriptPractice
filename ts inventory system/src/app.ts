import { Product } from './product';
import { Inventory } from './inventory';

const inventory = new Inventory();

const apple = new Product('Apple', 0.5, 50);
const banana = new Product('Banana', 0.3, 30);

inventory.addProduct(apple);
inventory.addProduct(banana);

inventory.updateStock('Apple', 40);

const reportJson = inventory.generateReportAsJson();
console.log(reportJson);