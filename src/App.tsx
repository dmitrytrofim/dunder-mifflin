import { Route, Routes } from 'react-router';
import Layout from '~/components/Layout';
import Home from '~/pages/Home';
import Contacts from '~/pages/Contacts';
import About from '~/pages/About';

function App() {
 return (
  <Routes>
   <Route path="/" element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="/about" element={<About />} />
   </Route>
  </Routes>
 );
}

export default App;
