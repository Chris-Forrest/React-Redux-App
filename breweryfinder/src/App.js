import React from 'react';
import './App.css';
import Breweries from './components/Breweries'

function App() {
  return (
    <div className="App">
     <h1>Brewery Finder</h1>
     <h4>powered by Open Brewer DB</h4>
     <Breweries />
    </div>
  );
}

export default App;
