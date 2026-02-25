import { Link } from "react-router-dom";

export default function Featured() {
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-md-6 text-center">
          <img src={`${import.meta.env.BASE_URL}images/men.jpg`} className="img-fluid" />
          <h3><Link to="/shop/men">Shop Men's Collection</Link></h3>
        </div>
        <div className="col-md-6 text-center">
          <img src={`${import.meta.env.BASE_URL}images/women.jpg`} className="img-fluid" />
          <h3><Link to="/shop/women">Shop Women's Collection</Link></h3>
        </div>
      </div>
    </div>
  );
}