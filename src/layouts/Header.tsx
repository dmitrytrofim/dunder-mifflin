import { NavLink } from 'react-router-dom';

function Header() {
 const activeLink = ({ isActive }: any) => (isActive ? 'text-[red]' : '');
 return (
  <header>
   <NavLink to={'/'} className={activeLink}>
    Main
   </NavLink>
   <NavLink to={'/about'} className={activeLink}>
    About
   </NavLink>
   <NavLink to={'/contacts'} className={activeLink}>
    Contacts
   </NavLink>
  </header>
 );
}

export default Header;
