import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import About from './component/About';
import Login from './component/Login';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;