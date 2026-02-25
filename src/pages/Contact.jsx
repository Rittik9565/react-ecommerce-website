import { Link } from "react-router-dom";


export default function Contact() {
  return (
    <div className="container my-5">
      <h2>Contact Us</h2>
      <form className="mt-4">
        <input className="form-control mb-3" placeholder="Your Name" />
        <input className="form-control mb-3" placeholder="Email" />
        <textarea className="form-control mb-3" placeholder="Message" />
        <button className="btn btn-primary">Send Message</button>
      </form>
    </div>
  )
}