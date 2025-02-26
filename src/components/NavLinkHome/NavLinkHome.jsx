import { NavLink } from 'react-router-dom';

const NavLinkHome = ({ children }) => {
  return (
    <>
      <NavLink to="/">{children}</NavLink>
    </>
  );
};

export default NavLinkHome;
