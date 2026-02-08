import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ThemeDetails from './pages/ThemeDetails';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/themes/:id" element={<ThemeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
