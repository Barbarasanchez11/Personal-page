import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Aboutme from "./pages/Aboutme";
import Contact from "./pages/Contact";
import HireMeGame from './pages/HireMeGame';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/hireme" element={<HireMeGame />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
