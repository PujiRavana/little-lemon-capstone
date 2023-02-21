import { Link } from 'react-router-dom';

const Nav = () => {
  return <nav>
      <Link className="nav-item" to="/">Home</Link>
      <Link className="nav-item" to="/about">About</Link>
      <Link className="nav-item" to="/menu">Menu</Link>
      <Link className="nav-item" to="/reservation">Reservations</Link>
      <Link className="nav-item" to="/orderonline">Order Online</Link>
      <Link className="nav-item" to="/Login">Login</Link>
  </nav>;
}

export default Nav;