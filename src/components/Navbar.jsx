import { NavLink, Link } from "react-router-dom"; // ✅ add Link
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="colorlib-nav">
      <div className="container">
        <ul className="menu-1">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/shop">Shop</NavLink></li>
          <li><NavLink to="/shop/men">Men</NavLink></li>
          <li><NavLink to="/shop/women">Women</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li>
            <NavLink to="/cart">
              Cart ({totalItems})
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}