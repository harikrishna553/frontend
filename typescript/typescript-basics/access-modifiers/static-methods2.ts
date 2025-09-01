class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    // Static method - common discount rule
    static applyDiscount(price: number): number {
        return price * 0.9; // 10% discount
    }
}

let p1 = new Product("Laptop", 1000);
let p2 = new Product("Phone", 500);

console.log(Product.applyDiscount(p1.price)); // 900
console.log(Product.applyDiscount(p2.price)); // 450
