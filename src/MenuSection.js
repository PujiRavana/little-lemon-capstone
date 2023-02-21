import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';

const MenuSection = () => {
  return (
    <section className="menu-section">
      <div className="menu-header">
        <h2>This Weeks Specials!</h2>
        <Link className="menu-btn" to='/menu'>Online Menu</Link>
      </div>
      <div className="menu-item-container">
        <MenuItem title="Greek Salad"
          imageName="greeksalad"
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
          price="12.99" />
        <MenuItem title="Bruschetta"
          imageName="bruchetta"
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
          price="6.99" />
        <MenuItem title="Lemon Dessert"
          imageName="lemondessert"
          description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          price="4.99" />
        </div>
    </section>
  );
}

export default MenuSection;
