import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countries from './Components/Countries';
import Details from './Components/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
