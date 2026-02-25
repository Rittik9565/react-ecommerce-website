import { Link } from "react-router-dom"
import products from "../data/products"

export default function Products() {
  return (
    <div className="container my-5">
      <div className="row">
        {products.map(item => (
          <div className="col-lg-3 mb-4 text-center" key={item.id}>
            <Link to={`/product/${item.id}`}>
              <img src={item.image} className="img-fluid" />
              <h5>{item.name}</h5>
              <p>${item.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}