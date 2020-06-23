import React from 'react';
import './App.css';
import Breweries from './components/Breweries';
import './images/image1.png';
import styled from 'styled-components';
import './images/image2.png'

const StyledImage = styled.img `
width:30%;
height:30%;
`
const CraftImage = styled.img `
width:30%;
height:30%
`

function App() {
  return (
    <div className="App">
      <CraftImage src={require('./images/image2.png')} alt="neon sign craft on rooftop" />
      <StyledImage src={ require('./images/image1.png')} alt="neon sign beer on rooftop"/>
     <h1>Brewery Finder</h1>
     <h4>powered by Open Brewer DB</h4>
     <Breweries />
    </div>
  );
}

export default App;
