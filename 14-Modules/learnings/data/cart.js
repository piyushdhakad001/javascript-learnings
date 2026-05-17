export const cart = [];

export function addToCart(productId, quantity) {
  let matchingItem;

  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  });

  if (matchingItem) {
    // matchingItem.quantity += 1;
    matchingItem.quantity += quantity;
  } else {
    cart.push({

      // productId: productId,
      productId,
      quantity
    })
  }
}



