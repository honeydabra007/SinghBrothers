import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './component/Nav';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Footer from './component/Footer';
import Contact from './component/Contact';
import Card from './component/Card';
import Edu from './Services/Edu';
import Real from './Services/Real';
import Bank from './Services/Bank';
import Gov from './Services/Gov';
import Law from './Services/Law';
import Do from './component/Do';
import SSO from './Services/Government/SSO';
import NagarNigam from './Services/Government/NagarNigam'
import Jda from './Services/Government/Jda';
import Heritage from './Services/Government/Heritage'
import RajRera from './Services/Government/RajRera'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { SearchResultsList } from "./component/SearchResultsList";
import Medical from './Services/Government/Medical';
import Raj from './Services/Government/Raj';
import HighCourt from './Services/Government/HighCourt';

const App = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <div className="search-bar-container">
            <Nav setResults={setResults} />
            {results && results.length > 0 && <SearchResultsList results={results} />}
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/card" element={<Card />} />
          <Route path="/do" element={<Do />} />
          <Route path="/services" element={<Service />} />
          <Route path="/edu" element={<Edu />} />
          <Route path="/real" element={<Real />} />
          <Route path="/gov" element={<Gov />} />
          <Route path="/bank" element={<Bank />} />
          <Route path="/law" element={<Law />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sso" element={<SSO />} />
          <Route path="/nagarnigam" element={<NagarNigam />} />
          <Route path="/jda" element={<Jda />} />
          <Route path="/heritage" element={<Heritage />} />
          <Route path="/Rajrera" element={<RajRera />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/raj" element={<Raj />} />
          <Route path="/highcourt" element={<HighCourt />} />
         
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;