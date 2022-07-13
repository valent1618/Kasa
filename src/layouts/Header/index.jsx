import { NavLink } from 'react-router-dom';

import Logo from '../../assets/logo';

function Header() {
  return (
    <header id='Header'>
      <Logo />
      <nav>
        <ul>
          <li>
            <NavLink exact to='/Kasa/'>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to='/Kasa/about'>A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
