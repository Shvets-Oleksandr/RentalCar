import { NavLink } from 'react-router-dom';

const NavLinkCatalog = ({ className }) => {
  return (
    <>
      <NavLink className={className} to="/catalog">
        Catalog
      </NavLink>
    </>
  );
};

export default NavLinkCatalog;
