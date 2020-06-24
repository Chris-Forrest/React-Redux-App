import React, { useState,useEffect } from 'react';


const SearchForm =()=> {

    const [zipcode, setZipcode] = useState('');

    const handleChanges = e =>{
        setZipcode(e.target.value)
    };

    return(
        <form>
            <label>Search by zip code</label>
            <input 
            type='text'
            name='zipcode'
            onChange={handleChanges}
            value={zipcode}
            />
            <button>Search</button>
        </form>
    )

}
export default SearchForm;