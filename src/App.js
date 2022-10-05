import React, { useEffect, useState } from 'react';
import RaidingSchedule from './components/RaidingSchedule';
import MythicPlus from './components/MythicPlus';
import ActiveRaiders from './components/ActiveRaiders';
import Events from './components/Events';
import Route from './components/Route';
import Header from './components/Header';
import '../src/css/App.css';
import Loader from './components/Loader';

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true) , 500)//Change seconds to make more durable the loading screen
  },[loaded])


  return  <div>
   { !loaded && <Loader />}
      <Header />
      <Route path="/">
        <RaidingSchedule />
      </Route>
      <Route path="/Activity">
        <ActiveRaiders label="Selecciona un color de fondo del menú" />
      </Route>
      <Route path="/Mythicplus">
        <MythicPlus />
      </Route>
      <Route path="/Events">
        <Events />
      </Route>
    </div>  
    
  
};

export default App;
