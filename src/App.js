import './App.css';
import Countries from './Components/Countries';
import Details from './Components/Details';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path ="/" element={ <Countries />} />
          <Route path="/details" element={  <Details />} />
        </Routes>
      </Router>
     
    
    </div>
  );
}

export default App;
