// Step 1: Define the interface
interface Product {
  id: number;
  name: string;
  category: string;
  display: () => void;
}

// Step 2: Create objects based on the interface

const product1: Product = {
  id: 101,
  name: "Notebook",
  category: "Stationery",
  display() {
    console.log(`Product Details:
    ID: ${this.id}
    Name: ${this.name}
    Category: ${this.category}`);
  }
};

const product2: Product = {
  id: 202,
  name: "Pen",
  category: "Stationery",
  display() {
    console.log(`Product Info:
    ID: ${this.id}, Name: ${this.name}, Category: ${this.category}`);
  }
};

// Step 3: Use the objects
product1.display();
product2.display();

// Step 4: Create a class implementing the interface

class ProductItem implements Product {
  id: number;
  name: string;
  category: string;

  constructor(id: number, name: string, category: string) {
    this.id = id;
    this.name = name;
    this.category = category;
  }

  display(): void {
    console.log(`ProductItem:
    ID: ${this.id}
    Name: ${this.name}
    Category: ${this.category}`);
  }
}

// Step 5: Instantiate the class
const item1 = new ProductItem(303, "Whiteboard Marker", "Office Supplies");
const item2 = new ProductItem(404, "Eraser", "Stationery");

item1.display();
item2.display();
