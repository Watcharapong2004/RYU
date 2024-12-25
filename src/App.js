import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './pages/Carousel';
import data from './pages/data';
import Forms from './pages/Forms';
import scritp from './pages/scritp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  return (
    <div className="App">
      <Navbar />
      <data />
      <Forms />
      <scritp />

      <Carousel />
    </div>
  );
}

export default App;