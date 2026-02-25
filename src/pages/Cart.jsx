import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    totalPrice
  } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container my-5 text-center">
        <h2>Your Cart is Empty</h2>
        <Link to="/shop" className="btn btn-primary mt-3">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Your Cart</h2>
      <div className="row">
        {cart.map(item => (
          <div className="col-md-12 mb-3" key={item.id}>
            <div className="d-flex align-items-center border p-3">
              <img
                src={`${import.meta.env.BASE_URL}${item.image}`}
                alt={item.name}
                style={{ width: "100px", marginRight: "20px" }}
              />
              <div className="flex-grow-1">
                <h5>{item.name}</h5>
                <p>${item.price}</p>
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-sm btn-secondary me-2"
                    onClick={() => decrementQuantity(item.id)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="btn btn-sm btn-secondary ms-2"
                    onClick={() => incrementQuantity(item.id)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-sm btn-danger ms-4"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-end mt-4">
        <h4>Total: ${totalPrice.toFixed(2)}</h4>
        <button className="btn btn-success mt-2">Proceed to Checkout</button>
      </div>
    </div>
  );
}