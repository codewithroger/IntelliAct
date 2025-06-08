import './App.css';
import HomePage from './Component/HomePage';
import Navigation from './Component/Navigation';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Products from './Component/Production';
import CareersForm from './Component/CareersForm';
import Soluation from "./Component/Soluation";
import LeadershipSection from './Component/LeadershipSection';
import Contact from './Component/Contact';
import CompanyProfile from './Component/CompanyProfile';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/solutions" element={<Soluation />} />
        <Route path="/careers" element={<CareersForm />} />
        <Route path="/company" element={<CompanyProfile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/leadership" element={<LeadershipSection />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
