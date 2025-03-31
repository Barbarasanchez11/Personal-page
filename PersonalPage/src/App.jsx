import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Aboutme from "./pages/Aboutme";
import Contact from "./pages/Contact";
import HireMeGame from './pages/HireMeGame';

import Footer from "./components/Footer";
import HamburgerMenu from './components/HamburgerMenu';
import ContactButton from './pages/ContactButton';

function App() {
  return (
    <Router>
      <HamburgerMenu />
      <ContactButton />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/hireme" element={<HireMeGame />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
