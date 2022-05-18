import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import Company from './components/Company';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Routes>
        <Route path="/:companySymbol" element={<Company />} />
        <Route path="/company-profile" element={<Home />} />
      </Routes>
    </div>
  </Router>
);

export default App;
