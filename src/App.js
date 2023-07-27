import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import OT from './pages/Services/OT/OT';

function App() {
  return (<>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services/" element={<Services/>}/>
        <Route path="services/ot/" element={<OT/>} />
        <Route path='about/' element={<About/>}/>
        <Route path='contact/' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
