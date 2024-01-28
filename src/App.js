
import HomePage from './Components/HomePage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file
import { ReactComponent as Logobanner } from './img/NSC-Banner-logo.svg';
const App = () => {
  const [showShine, setShowShine] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    setShowShine(true);
    const timeoutId = setTimeout(() => {
      setShowShine(false);
    }, 2000);

    return () => clearTimeout(delayTimeout);
  }, []);

  return (
    <div className='app'>
      {loading ? (

        <div className="loading-indicator text-white ">
          <div className={`shine ${showShine ? 'shine-animation' : ''}`}>

            <Logobanner/>
          </div>
        </div>
      ) : (
        // Main content
        <div className='app'>
          <Navbar />
          <HomePage />

        </div>
      )}
    </div>
  );
}

export default App;
