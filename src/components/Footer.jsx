import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row">

          {/* About Section */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="mb-3">About</h5>
            <p className="small">
              We provide high quality footwear with modern design and comfort.
            </p>
          </div>

          {/* Information Links */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="mb-3">Information</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none text-light">About Us</Link></li>
              <li><Link to="/" className="text-decoration-none text-light">Delivery Info</Link></li>
              <li><Link to="/" className="text-decoration-none text-light">Privacy Policy</Link></li>
              <li><Link to="/" className="text-decoration-none text-light">Support</Link></li>
            </ul>
          </div>

          {/* News Section */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="mb-3">News</h5>
            <ul className="list-unstyled">
              <li><Link to="/blog" className="text-decoration-none text-light">Blog</Link></li>
              <li><Link to="/" className="text-decoration-none text-light">Press</Link></li>
              <li><Link to="/" className="text-decoration-none text-light">Exhibitions</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="mb-3">Contact</h5>
            <ul className="list-unstyled small">
              <li>291 South 21st Street, New York</li>
              <li><a href="tel:9565706481" className="text-light text-decoration-none">+91 9565706481</a></li>
              <li><a href="mailto:rittiksrivastav9140@gmail.com" className="text-light text-decoration-none">rittiksrivastav9140@gmail.com</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <hr className="border-light" />

        <div className="text-center small">
          © {year} All Rights Reserved | Designed with ❤️ by Rittik Srivastav
        </div>
      </div>
    </footer>
  );
}