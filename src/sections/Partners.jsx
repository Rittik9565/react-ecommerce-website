import { Link } from "react-router-dom";
export default function Partners() {
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-md-6 text-center">
          <img
            src={`${import.meta.env.BASE_URL}images/men.jpg`}
            className="img-fluid"
            alt="Men Collection"
          />
          <h3>Shop Men's Collection</h3>
        </div>

        <div className="col-md-6 text-center">
          <img
            src={`${import.meta.env.BASE_URL}images/women.jpg`}
            className="img-fluid"
            alt="Women Collection"
          />
          <h3>Shop Women's Collection</h3>
        </div>
      </div>
    </div>
  );
}