import React from 'react';
import './App.css';
import Breweries from './components/Breweries';
import './images/image1.png';
import styled from 'styled-components';
import './images/image2.png'
import SearchForm from './components/SearchForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const StyledImage = styled.img `
width:30%;
height:30%;
`
const CraftImage = styled.img `
width:30%;
height:30%
`
const StyledNav = styled.nav`
display: flex;
flex-direction: column;
justify-content: space-around;
`

function App() {
  return (
    <Router>
    <div className="App">
      <CraftImage src={require('./images/image2.png')} alt="neon sign craft on rooftop" />
      <StyledImage src={ require('./images/image1.png')} alt="neon sign beer on rooftop"/>
     <h1 className='h1'>Brewery Finder</h1>
     <h4>powered by Open Brewery DB</h4>
     <StyledNav>
       < a href='search'>Search </a>
       <a href='mvp'>Project mvp </a>
     </StyledNav>
     <Route path="/search" component={SearchForm} />
     <Route path='/mvp' component={Breweries} />
     
    </div>
    </Router>
  );
}

export default App;
