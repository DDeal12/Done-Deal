import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Showroom from './pages/Showroom';
import Craftsmanship from './pages/Craftsmanship';
import Services from './pages/Services';
import Consultation from './pages/Consultation';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Footer from './components/Footer';
import './index.css';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/showroom" element={<Showroom />} />
          <Route path="/craftsmanship" element={<Craftsmanship />} />
          <Route path="/services" element={<Services />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </AnimatePresence>
      <Footer /> {/* Add this line to display the footer */}
    </div>
  );
}

export default App;
