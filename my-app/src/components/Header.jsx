import "./Header.css";
import { Link } from "react-router-dom";
import heroHeader from "../assets/hero-header.jpg";

export function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-content">
          <h1 className="intro-data">Welcome to</h1>
          <p className="header-description">
          <strong>GearStore</strong> is your one-stop shop for all the latest and greatest gadgets. We have a wide selection of products to choose from, including smartphones, tablets, laptops, TVs, cameras, and more. We also offer a variety of accessories, so you can customize your gadgets to fit your needs.</p>
    

          <Link to="/products">
            {" "}
            <button className="shop-now-btn">Shop now</button>{" "}
          </Link>
        </div>

        <div className="hero-header-img">
          <figure>
          <img src={heroHeader} alt="hero-img" className='img-style' />
          </figure>
        </div>
      </div>
    </header>
  );
}