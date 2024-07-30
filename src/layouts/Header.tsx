import { NavLink, Link } from 'react-router-dom';
import Container from '~/components/Container';

function Header() {
 const activeLink = ({ isActive }: any) =>
  (isActive ? 'text-[var(--t-000)]' : 'text-[var(--t-fff)]') + ' font-600';
 return (
  <header className="bg-[var(--b-1b54dd)]">
   <Container>
    <div className="h-[50px] flex justify-between items-center">
     <Link to={'/'} className="h-[40px] shrink-0 aspect-[1.51] i-wrap">
      <img
       className="i-full"
       src="/portfolio/works/dunder-mifflin/img/svg/logo.svg"
       alt=""
      />
     </Link>
     <nav>
      <ul className="flex items-center gap-[10px]">
       <li>
        <NavLink to={'/'} className={activeLink}>
         Main
        </NavLink>
       </li>
       <li>
        <NavLink to={'/about'} className={activeLink}>
         About
        </NavLink>
       </li>
       <li>
        <NavLink to={'/contacts'} className={activeLink}>
         Contacts
        </NavLink>
       </li>
      </ul>
     </nav>
    </div>
   </Container>
  </header>
 );
}

export default Header;
