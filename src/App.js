import './index.css';
import NavBar from "./NavBar";
import Share from './Share';
import DonorRegister from './DonorRegister';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<NavBar />}>

      <Route path="/share" element={<Share />} />

      <Route path="/register" element={<DonorRegister />} />

    </Route>
    </Routes>
    </Router>
  );
}

export default App;
