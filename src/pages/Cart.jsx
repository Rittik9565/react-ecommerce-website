import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalPrice
  } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2>Your Cart is Empty 🛒</h2>
      </div>
    )
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Shopping Cart</h2>

      {cart.map(item => (
        <div
          key={item.id}
          className="card mb-3 p-3 d-flex flex-row align-items-center justify-content-between"
        >
          <div className="d-flex align-items-center">
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "80px", height: "80px", objectFit: "contain" }}
            />

            <div className="ms-3">
              <h6>{item.title}</h6>
              <p className="mb-1">Price: ${item.price}</p>

              {/* Quantity Controls */}
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => decreaseQty(item.id)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>

                <span className="mx-2">{item.quantity}</span>

                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => increaseQty(item.id)}
                >
                  +
                </button>
              </div>

              <p className="mt-2">
                Subtotal: ${item.price * item.quantity}
              </p>
            </div>
          </div>

          <button
            className="btn btn-danger btn-sm"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <hr />

      <div className="text-end">
        <h4>Total: ${totalPrice.toFixed(2)}</h4>
      </div>
    </div>
  )
}