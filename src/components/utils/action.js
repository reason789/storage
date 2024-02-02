export const getItemsFromLocalStorage = () => {
  const itemsJsonString = localStorage.getItem("cartItems");
  const items = itemsJsonString ? JSON.parse(itemsJsonString) : [];
  return items;
};

export const removeFromCart = (id) => {
  const cartItemsJsonString = localStorage.getItem("cartItems");
  const cartItems = cartItemsJsonString ? JSON.parse(cartItemsJsonString) : [];
  const updatedCartItems = cartItems.filter((item) => item.id !== id);
  localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
};

export const increaseQuantity = (id) => {
  const items = getItemsFromLocalStorage();
  const item = items.find((item) => item.id === id);
  if (item) {
    item.quantity += 1;

    localStorage.setItem("cartItems", JSON.stringify(items));
  }
};

export const decreaseQuantity = (id) => {
  const items = getItemsFromLocalStorage();
  const item = items.find((item) => item.id === id);

  if (item) {
    // Decrease the quantity, ensuring it doesn't go below 1
    item.quantity = Math.max(1, item.quantity - 1);

    // Update the localStorage
    localStorage.setItem("cartItems", JSON.stringify(items));
  }
};

export const totalCartItems = () => {
  const cartItemsJsonString = localStorage.getItem("cartItems");
  const cartItems = cartItemsJsonString ? JSON.parse(cartItemsJsonString) : [];

  return cartItems.length;
};

export const addToCart = (product, quantity = 1) => {
  const productId = product.id;
  let cartItems = getItemsFromLocalStorage();

  const existingProductIndex = cartItems.findIndex(
    (item) => item.id === productId
  );

  if (existingProductIndex !== -1) {
    cartItems[existingProductIndex].quantity += 1;
  } else {
    product.quantity = quantity;
    cartItems.push(product);
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const getRandomProducts = (products, qty) => {
  const copyOfProducts = [...products];

  for (let i = copyOfProducts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copyOfProducts[i], copyOfProducts[j]] = [
      copyOfProducts[j],
      copyOfProducts[i],
    ];
  }

  const randomSixItems = copyOfProducts.slice(0, qty);

  return randomSixItems;
};

export const subtotal = () => {
  const cartItems = getItemsFromLocalStorage();
  const total = cartItems.reduce((acc, item) => {
    const itemTotal = item.price * item.quantity;
    return acc + itemTotal;
  }, 0);

  return total;
};

export const total = (deliveryCharge) => {
  const cartItems = getItemsFromLocalStorage();
  const total = cartItems.reduce((acc, item) => {
    const itemTotal = item.price * item.quantity;
    return acc + itemTotal;
  }, 0);

  return total + deliveryCharge;
};
