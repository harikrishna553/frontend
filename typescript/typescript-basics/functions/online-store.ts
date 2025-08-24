// 1. Greet the user
function greetUser(name: string): string {
  return `Welcome to Krishna's Bookstore, ${name}!`;
}

// 2. Calculate total price
function calculateTotalPrice(pricePerBook: number, quantity: number): number {
  return pricePerBook * quantity;
}

// 3. Apply discount if eligible
function applyDiscount(total: number, isMember: boolean): number {
  const discountRate = isMember ? 0.1 : 0; // 10% discount for members
  return total - total * discountRate;
}

// 4. Place an order
function placeOrder(
  customerName: string,
  bookName: string,
  quantity: number,
  pricePerBook: number,
  isMember: boolean
): string {
  const greeting = greetUser(customerName);
  const total = calculateTotalPrice(pricePerBook, quantity);
  const finalTotal = applyDiscount(total, isMember);

  return `
${greeting}

Order Summary:
--------------------------
Book: ${bookName}
Quantity: ${quantity}
Price per book: ₹${pricePerBook}
Membership Discount: ${isMember ? "10%" : "None"}
Final Price: ₹${finalTotal.toFixed(2)}

Thank you for shopping with us!
`;
}

// 5. Display order summary
console.log(
  placeOrder("Harini", "TypeScript Basics", 3, 250, true)
);
