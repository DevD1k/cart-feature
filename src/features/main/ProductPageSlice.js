const initialStateCart = {
  products: [], // Store all the products in array
};
// Reducer function for Cart
function cartReducer(state = initialStateCart, action) {
  switch (action.type) {
    case "cart/addProduct":
      return {
        ...state,
        products: addProductToCart(state.products, action.payload),
      };

    case "cart/deleteProduct":
      return {
        ...state,
        products: deleteProductFromCart(state.products, action.payload),
      };
    default:
      return state;
  }
}

// Action dispatchers for reducer
export function addProduct(obj) {
  return {
    type: "cart/addProduct",
    payload: obj,
  };
}

export function deleteProduct(obj) {
  return {
    type: "cart/deleteProduct",
    payload: obj,
  };
}

// Helper functions
function addProductToCart(cartProducts, productToAdd) {
  // Check if the product is already in the cart
  const existingProductIndex = cartProducts.findIndex(
    (product) => product.name === productToAdd.name
  );

  if (existingProductIndex !== -1) {
    // If the product exists, update its count
    const updatedCartProducts = [...cartProducts];
    updatedCartProducts[existingProductIndex].count += 1;
    return updatedCartProducts;
  } else {
    // If the product is not in the cart, add it
    return [...cartProducts, { ...productToAdd, count: 1 }];
  }
}

function deleteProductFromCart(cartProducts, productToDelete) {
  // Find the index of the product in the cart
  const existingProductIndex = cartProducts.findIndex(
    (product) => product.name === productToDelete.name
  );

  if (existingProductIndex !== -1) {
    const updatedCartProducts = [...cartProducts];
    // If the product count is greater than 1, decrement count
    if (updatedCartProducts[existingProductIndex].count > 1) {
      updatedCartProducts[existingProductIndex].count -= 1;
    } else {
      // If the product count is 1, remove the product from cart
      updatedCartProducts.splice(existingProductIndex, 1);
    }
    return updatedCartProducts;
  } else {
    // If the product is not in the cart, return the cart as is
    return cartProducts;
  }
}

export default cartReducer;
