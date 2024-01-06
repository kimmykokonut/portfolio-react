import './../App.css';
import Hero from './Hero';
import NavBar from './NavBar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

const drawerWidth = 20;

function App() {
  return (
    <Router>
      <NavBar />
      <Box component="main" sx={{ flexGrow: 1, p: 2, marginLeft: drawerWidth, marginTop: 5 }}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
