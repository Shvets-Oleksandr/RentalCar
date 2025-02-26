import NavLinkHome from '../NavLinkHome/NavLinkHome';
import { useLocation } from 'react-router-dom';

import clsx from 'clsx';

import css from './Navigation.module.css';

const Navigation = () => {
  const location = useLocation();

  const pageCssClass = path =>
    clsx(css.page, location.pathname === path && css.active);

  return (
    <header className={css.appHeader}>
      <nav className={css.appNav}>
        <NavLinkHome>
          <img src="/RentalCar.svg" alt="home" />
        </NavLinkHome>
        <ul className={css.appMenu}>
          <li>
            <p className={pageCssClass('/')}>Home</p>
          </li>
          <li>
            <p className={pageCssClass('/catalog')}>Catalog</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
