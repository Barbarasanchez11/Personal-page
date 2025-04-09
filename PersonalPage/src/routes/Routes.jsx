import { BrowserRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const AppRoutes = () => {
    return (
        <Router>
            <Header />
            <RouterRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </RouterRoutes>
            <Footer />
        </Router>
    );
};

export default AppRoutes; 