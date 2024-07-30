import { Outlet } from 'react-router-dom';
import Header from '~/layouts/Header';
import Footer from '~/layouts/Footer';

function Layout() {
 return (
  <div className="relative min-h-dvh grid grid-cols-[minmax(300px,_1fr)] grid-rows-[auto_1fr_auto] overflow-hidden">
   <Header />
   <main>
    <Outlet />
   </main>
   <Footer />
  </div>
 );
}

export default Layout;
