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

  console.log(existingProductIndex);

  if (existingProductIndex !== -1) {
    cartItems[existingProductIndex].quantity += 1;
  } else {
    product.quantity = quantity;
    cartItems.push(product);
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const openSidebar = () => {};
