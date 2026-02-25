import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { addToCart } = useContext(CartContext)

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`)
                if (!res.ok) throw new Error("Product not found")
                const data = await res.json()
                setProduct(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchProduct()
    }, [id])

    if (loading) return <h2 className="text-center mt-5">Loading...</h2>
    if (error) return <h2 className="text-center mt-5 text-danger">{error}</h2>

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 text-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid"
                        style={{ height: "300px", objectFit: "contain" }}
                    />
                </div>

                <div className="col-md-6">
                    <h2>{product.title}</h2>
                    <h4 className="text-primary mt-3">${product.price}</h4>
                    <p className="mt-3">{product.description}</p>

                    <button
                        className="btn btn-primary mt-3"
                        onClick={() => addToCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}