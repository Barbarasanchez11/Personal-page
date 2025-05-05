import { BrowserRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom';
import Header from '../components/Header';

import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import BootcampLetter from '../pages/BootcampLetter';

const AppRoutes = () => {
    return (
        <Router>
            <Header />
            <RouterRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/bootcamp" element={<BootcampLetter />} />
            </RouterRoutes>
            
        </Router>
    );
};

export default AppRoutes; 