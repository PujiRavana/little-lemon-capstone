import {Link } from 'react-router-dom';
import FooterLogo from './assets/logo2.png';
import Facebook from './assets/square-facebook.svg';
import Instagram from './assets/square-instagram.svg';
const Footer = () => {
  return <footer>
    <img className="footer-img" src={FooterLogo} alt="Footer Logo" />
    <div className="site-links">
      <h2>Doormat Navigation</h2>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/reservation">Reservations</Link>
      <Link to="/orderonline">Order Online</Link>
      <Link to="/Login">Login</Link>
    </div>
    <div className="contact-us">
      <h3>Contact Us</h3>
      <h4>(470)-336-0000</h4>
    </div>
    <div className="social-media">
      <h3>Follow us:</h3>
      <div className="image-container">
        <img src={Facebook} alt="facebook" />
        <img src={Instagram} alt="instagram" />
      </div>
    </div>
  </footer>;
}

export default Footer;