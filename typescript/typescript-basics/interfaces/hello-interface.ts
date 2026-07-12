// Define the interface
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPercentage?: number; // optional property
  getSummary(): string;
}

// Create multiple products

const phone: Product = {
  id: 1,
  name: "Smartphone",
  description: "Latest 5G smartphone with AMOLED display",
  price: 49999,
  discountPercentage: 10,
  getSummary() {
    const discount = this.discountPercentage
      ? `Discount: ${this.discountPercentage}%`
      : "No discount";
    return `
    Product Summary:
    ---------------------
    ID          : ${this.id}
    Name        : ${this.name}
    Description : ${this.description}
    Price       : ₹${this.price}
    ${discount}
    `;
  },
};

const laptop: Product = {
  id: 2,
  name: "Laptop",
  description: "Lightweight laptop with 16GB RAM",
  price: 89999,
  getSummary() {
    return `
    Product Summary:
    ---------------------
    ID          : ${this.id}
    Name        : ${this.name}
    Description : ${this.description}
    Price       : ₹${this.price}
    No discount
    `;
  },
};


function displayProducts(products: Product[]): void {
  console.log("Listing All Products:\n");

  for (const product of products) {
    console.log(product.getSummary());
  }
}

const products: Product[] = [phone, laptop];
displayProducts(products);
