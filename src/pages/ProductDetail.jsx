import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2 className="text-center mt-5">Product Not Found</h2>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`${import.meta.env.BASE_URL}${product.image}`}
            className="img-fluid"
            alt={product.name}
          />
        </div>

        <div className="col-md-6">
          <h2>{product.name}</h2>
          <h4 className="text-primary">${product.price}</h4>
          <p className="mt-3">{product.description}</p>
          <button
            className="btn btn-primary mt-3"
            onClick={() => addToCart(product, 1)}
          >
            Add to Cart
          </button>
        </div>

        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <Link to="/shop" className="btn btn-primary btn-lg">
              Shop All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}