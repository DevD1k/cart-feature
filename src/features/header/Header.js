import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Header() {
  const cart = useSelector((store) => store.cart.products);
  const cartCount = cart.reduce((acc, item) => item.count + acc, 0);
  return (
    <header>
      <div className="icon-wrapper">
        <FaShoppingCart className="cartIcon" />
        <h2 className="cartCount">{cartCount}</h2>
      </div>
    </header>
  );
}
