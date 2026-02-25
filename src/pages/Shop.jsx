import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import products from "../data/products"

export default function Shop() {

    const { category } = useParams()
    const [search, setSearch] = useState("")

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) &&
        (!category || category === "all" || product.category === category)
    )

    return (
        <div className="container my-5">

            <h2 className="text-center mb-4">
                {category ? category.toUpperCase() : "All Products"}
            </h2>

            <div className="row mb-4">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className="row">
                {filteredProducts.length === 0 ? (
                    <h5 className="text-center">No products found</h5>
                ) : (
                    filteredProducts.map(product => (
                        <div className="col-md-3 mb-4" key={product.id}>
                            <div className="card h-100 text-center">

                                <img
                                    src={`${import.meta.env.BASE_URL}${product.image}`}
                                    className="card-img-top"
                                    alt={product.name}
                                />

                                <div className="card-body">
                                    <h6>{product.name}</h6>
                                    <p className="text-primary">${product.price}</p>

                                    <Link
                                        to={`/product/${product.id}`}
                                        className="btn btn-sm btn-primary"
                                    >
                                        View Details
                                    </Link>

                                </div>

                            </div>
                        </div>
                    ))
                )}
            </div>

        </div>
    )
}