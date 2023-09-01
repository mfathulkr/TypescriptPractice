"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
const inventory_1 = require("./inventory");
const inventory = new inventory_1.Inventory();
const apple = new product_1.Product('Apple', 0.5, 50);
const banana = new product_1.Product('Banana', 0.3, 30);
inventory.addProduct(apple);
inventory.addProduct(banana);
inventory.updateStock('Apple', 40);
const reportJson = inventory.generateReportAsJson();
console.log(reportJson);