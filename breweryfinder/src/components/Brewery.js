import React from 'react';
import styled from 'styled-components';

const StyledBrewery = styled.div`
border:1px solid rgb(210, 210, 210 );
border-radius: 5px;
box-shadow: 10px 8px 12px -2px rgb(128, 127, 197);
margin: 8px;
padding: 12px;
background-color:#076db5;
width: 50%;
margin-left: 25%;
color: #044008;
`


const Brewery = ({ brewery }) => {

    return (
        <StyledBrewery className='brewery'>
            <h3>Brewery :{brewery.name}</h3>
            <h4>Brewery Type :{brewery.brewery_type}</h4>
            <h4>Address :{brewery.street} </h4>
            <h4>City :{brewery.city} </h4>
            <h4>State :{brewery.state} </h4>
            <h4>Phone Number : {brewery.phone} </h4>
            <a href={brewery.website_url}>webisite :{brewery.website_url} </a>
        </StyledBrewery>
    )
}

export default Brewery;