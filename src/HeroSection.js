import { Link } from 'react-router-dom';
import  HeroImage from './assets/restaurantfood.jpg';
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div>
        <h2>
          Little Lemon
        </h2>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional recipies served with mordern twist.
        </p>
        <Link className="reservation-btn" to="/reservation">Reserve a Table</Link>
      </div>
      <div className="hero-image-container">
        <img className="hero-image" src={HeroImage} alt="Restaurant Food" />
      </div>
    </section>
  )
};

export default HeroSection;
