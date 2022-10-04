import React, { useEffect, useState } from 'react';
import RaidingSchedule from './components/RaidingSchedule';
import MythicPlus from './components/MythicPlus';
import ActiveRaiders from './components/ActiveRaiders';
import Events from './components/Events';
import Route from './components/Route';
import Header from './components/Header';
import '../src/css/App.css';

const App = () => {

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true) , 300)//Change seconds to make more durable the loading screen
  },[loaded])


  return loaded ? <div>
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
    </div> : <h1>Cargando...</h1>//Replace with your loader
    
  
};

export default App;
