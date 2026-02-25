import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";

export default function Shop() {
  const { category } = useParams();
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (!category || category === "all" || p.category === category)
  );

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">{category ? category.toUpperCase() : "All Products"}</h2>
      <div className="row mb-4">
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Search products..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
      </div>
      <div className="row">
        {filteredProducts.length === 0 ? <h5 className="text-center">No products found</h5> :
          filteredProducts.map(p => (
            <div className="col-md-3 mb-4" key={p.id}>
              <div className="card h-100 text-center">
                <img src={`${import.meta.env.BASE_URL}${p.image}`} className="card-img-top" alt={p.name} />
                <div className="card-body">
                  <h6>{p.name}</h6>
                  <p className="text-primary">${p.price}</p>
                  <Link to={`/product/${p.id}`} className="btn btn-sm btn-primary">View Details</Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}