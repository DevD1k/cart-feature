import { useEffect } from "react";
import { productData } from "../../api/productData";
import { addProduct, deleteProduct } from "./ProductPageSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ProductPage() {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  function handleAddProduct(product) {
    dispatch(addProduct(product));
    // console.log("Product Added:", cart);
  }

  function handleDeleteProduct(product) {
    dispatch(deleteProduct(product));
    // console.log("Product Removed:", cart);
  }

  useEffect(
    function () {
      console.log("Updated Cart: ", cart);
    },
    [cart]
  );

  return (
    <main>
      {productData.data.map((category) => {
        return (
          <div className="category" key={category.name}>
            <h2>{category.name}</h2>
            <div className="card-container">
              {category.productList.map((product) => {
                return (
                  <div className="card" key={product.name}>
                    <div className="card-inner-data">
                      <div className="top">
                        <p className="title">Name: {product.name}</p>
                        <p className="title">Price: {product.price}</p>
                      </div>
                      <div className="bottom">
                        <button
                          className="cart-btn"
                          onClick={() => handleAddProduct(product)}
                        >
                          Add to the cart
                        </button>
                        <button
                          className="cart-btn"
                          onClick={() => handleDeleteProduct(product)}
                        >
                          Remove from cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
}
