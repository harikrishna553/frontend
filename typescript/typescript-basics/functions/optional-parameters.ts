function placeOrder(
  customerName: string,
  product: string,
  quantity: number,
  couponCode?: string,
  deliveryNote?: string,
  isCOD: boolean = false // Default is prepaid
): void {
  // Simulate order ID generation
  const orderId = Math.floor(Math.random() * 100000);

  // Dummy price data for demo
  const priceList: Record<string, number> = {
    "Wireless Mouse": 799,
    "Bluetooth Speaker": 1299,
    "Smartphone": 19999,
  };

  const basePrice = priceList[product] ?? 1000; // default price if unknown product
  const total = basePrice * quantity;
  let discount = 0;

  // Apply discount based on coupon code
  if (couponCode === "NEWYEAR20") {
    discount = total * 0.2;
  } else if (couponCode === "FESTIVE50") {
    discount = total * 0.5;
  }

  const finalPrice = total - discount;

  // Print order summary
  console.log("=====================================");
  console.log(`Order ID       : #${orderId}`);
  console.log(`Customer       : ${customerName}`);
  console.log(`Product        : ${product}`);
  console.log(`Quantity       : ${quantity}`);
  console.log(`Base Total     : ₹${total}`);

  if (couponCode) {
    console.log(`Coupon Applied : ${couponCode}`);
    console.log(`Discount       : -₹${discount}`);
  }

  console.log(`Final Amount   : ₹${finalPrice}`);

  if (deliveryNote) {
    console.log(`Delivery Note  : ${deliveryNote}`);
  }

  console.log(`Payment Method : ${isCOD ? "Cash on Delivery" : "Prepaid"}`);
  console.log("Order placed successfully!");
  console.log("=====================================\n");
}

// Simple Order Without Optional Details
placeOrder("Ram", "Wireless Mouse", 1);

// Order With a Coupon
placeOrder("Harini", "Bluetooth Speaker", 2, "NEWYEAR20");

// Full Order With All Optional Details
placeOrder(
  "Krishna",
  "Smartphone",
  1,
  "FESTIVE50",
  "Leave it at the front desk",
  true
);
