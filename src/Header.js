import Nav from './Nav';
import Logo from './assets/logo1.svg';

const Header = () => {
  return <header>
    <img className="header-logo" src={Logo} alt="logo" />
    <Nav />
  </header>;
}

export default Header;