import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './pages/Carousel';
import data from './pages/data';
import Forms from './pages/Forms';
import scritp from './pages/scritp';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    <Router>
     <div className="App">
      <Navbar />
      <data />
      <Forms />
      <scritp />

      <Carousel />
    </div>
    <div>
        {/* เมนูนำทาง */}
        <nav style={styles.navbar}>
          <Link to="/" style={styles.link}>หน้าแรก</Link>
          <Link to="/rooms" style={styles.link}>ห้องพัก</Link>
          <Link to="/contact" style={styles.link}>ติดต่อเรา</Link>
        </nav>

        {/* เส้นทางการเปลี่ยนหน้า */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>  
    </Router>
      );
    }
      
    const styles = {
      navbar: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        backgroundColor: '#007bff',
        padding: '10px',
      },
      link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
      },
    };
    
    export default App;