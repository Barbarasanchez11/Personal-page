import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Header from './components/Header/Header'
import Hero from './components/Hero'
import Projects from "./pages/Projects"
import Menu from "./pages/Menu"
import HireMeGame from './pages/HireMeGame'
import Footer from "./components/Footer"
import About from './pages/About'

import './styles/App.css'

function AppContent() {
  const location = useLocation();
  const showFooter = location.pathname !== '/menu';

  return (
    <>
      <Header />
      <main>
        <AnimatePresence mode="sync">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Hero />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/aboutme" element={<About />} />
            <Route path="/hireme" element={<HireMeGame />} />
          </Routes>
        </AnimatePresence>
      </main>
      {showFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
