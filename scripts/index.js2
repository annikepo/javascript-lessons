// ==========================================
// ASSIGNMENT JS2: Keywords, String Methods, and Parse
// ==========================================

// Step 1: Ask user for price input
const rawInput = prompt("Please enter a price tag (e.g. $49.99):");

if (rawInput) {
  // Step 2a: Remove "$" symbol
  const priceWithoutSymbol = rawInput.slice(1);

  // Step 2b: Convert string to number
  const originalPrice = parseFloat(priceWithoutSymbol);

  // Step 3: Reduce price by 10%
  const discountedPrice = originalPrice * 0.90;

  // Step 4: Output new price using template literals
  console.log(`Your new price is: $${discountedPrice.toFixed(2)}`);
}