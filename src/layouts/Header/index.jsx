import Logo from '../../assets/logo';

import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header id="Header">
      <Logo />
      <nav>
        <ul>
          <li><NavLink exact="true" activeclassname="active" to="/">Accueil</NavLink></li>
          <li><NavLink activeclassname="active" to="/about">A Propos</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
