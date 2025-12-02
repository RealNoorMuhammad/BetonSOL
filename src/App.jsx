import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import LiveBets from './pages/LiveBets';
import TopBettors from './pages/TopBettors';
import BNBOracle from './pages/BNBOracle';

import CreateBet from './pages/CreateBet';
import HowToBet from './pages/HowToBet';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/live-bets" element={<LiveBets />} />
            <Route path="/top-bettors" element={<TopBettors />} />
            <Route path="/bnb-oracle" element={<BNBOracle />} />
            <Route path="/create-bet" element={<CreateBet />} />
            <Route path="/how-to-bet" element={<HowToBet />} />
          </Routes>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
