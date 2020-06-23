import React from 'react';


const Brewery = ({ brewery }) => {

    return (
        <div className='brewery'>
            <h3>Brewery :{brewery.name}</h3>
            <h4>Brewery Type :{brewery.brewery_type}</h4>
            <h4>Address :{brewery.street} </h4>
            <h4>City :{brewery.city} </h4>
            <h4>State :{brewery.state} </h4>
            <h4>Phone Number : {brewery.phone} </h4>
            <a href={brewery.website_url}>webisite :{brewery.website_url} </a>
        </div>
    )
}

export default Brewery;