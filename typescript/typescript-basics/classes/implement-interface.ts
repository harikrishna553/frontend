// Interface defines the blueprint for all products
interface IProduct {
  productId: number;
  productName: string;
  price: number;
  category?: string; // optional field
  display(): void;
  getDiscountedPrice(discountPercent: number): number;
}

// Product class implements the IProduct interface
class Product implements IProduct {
  productId: number;
  productName: string;
  price: number;
  category?: string;

  constructor(productId: number, productName: string, price: number, category?: string) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.category = category;
  }

  display(): void {
    console.log(`Product #${this.productId}: ${this.productName}`);
    console.log(`Price: ₹${this.price}`);
    if (this.category) {
      console.log(`Category: ${this.category}`);
    }
    console.log('-------------------------------');
  }

  getDiscountedPrice(discountPercent: number): number {
    const discount = (this.price * discountPercent) / 100;
    return this.price - discount;
  }
}

// Create product objects
const product1 = new Product(101, "Wireless Mouse", 699, "Electronics");
const product2 = new Product(102, "Bluetooth Speaker", 1299, "Audio");
const product3 = new Product(103, "Laptop Stand", 999); // No category

// Store all products in an array
const products: IProduct[] = [product1, product2, product3];

// Function to display all products
function displayAllProducts(products: IProduct[]) {
  console.log("Product Catalog:");
  console.log("===============================");
  products.forEach((product) => {
    product.display();
  });
}

// Function to show discounted price
function showDiscount(product: IProduct, discountPercent: number) {
  const discountedPrice = product.getDiscountedPrice(discountPercent);
  console.log(
    `${product.productName} after ${discountPercent}% discount: ₹${discountedPrice.toFixed(2)}`
  );
  console.log('-------------------------------');
}

// Demo Execution
displayAllProducts(products);

// Show discount for each product
console.log("Discounted Prices:");
console.log("===============================");
products.forEach((product) => {
  showDiscount(product, 10); // Apply 10% discount
});
