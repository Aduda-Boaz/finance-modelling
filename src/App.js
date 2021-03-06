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
        <Route exact path="/" element={<Home />} />
        <Route path="/:companySymbol" element={<Company />} />
      </Routes>
    </div>
  </Router>
);

export default App;
