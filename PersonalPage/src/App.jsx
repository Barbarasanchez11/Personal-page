import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header';
import Hero from './components/Hero';
import Projects from "./pages/Projects";
import Aboutme from "./pages/Aboutme";

import HireMeGame from './pages/HireMeGame';

import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Header />
     
      
      <Routes>

        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/hireme" element={<HireMeGame />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
