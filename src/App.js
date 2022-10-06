import React, { useEffect, useState } from 'react';
import RaidingSchedule from './components/RaidingSchedule';
import MythicPlus from './components/MythicPlus';
import ActiveRaiders from './components/ActiveRaiders';
import Events from './components/Events';
import Header from './components/Header';
import '../src/css/App.css';
import Loader from './components/Loader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500); //Change seconds to make more durable the loading screen
  }, [loaded]);

  return (
    <div>
      {!loaded && <Loader />}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<RaidingSchedule />} />
          <Route path="/Activity" element={<ActiveRaiders />} />
          <Route path="/Mythicplus" element={<MythicPlus />} />
          <Route path="/Events" element={<Events />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
