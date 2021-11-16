import React, { useState,useEffect,Component } from "react";
import { connect } from "react-redux";
import { zipcodeBrewries } from '../actions';
import { useHistory } from "react-router-dom";



const SearchForm = ( props ) => {

     const [ zipCode, setZipCode] = React.useState({});

    const handleSubmit = e => {
        e.preventDefault();
        zipcodeBrewries(zipCode);
       // history.push('/mvp')
    }

    const handleSelect = e => {
        setZipCode(e.value)
    }
  

    return(
        <form>
            <label >Search by zip code</label>
            <input 
            type='text'
            name='zipcode'
            onChange={handleSelect}
            />
            <button onClick={handleSubmit} >Search</button>
        </form>
    )

}

const mapStateToProps = state => {
    return {
        zipcode: state.zipcode
    }
}
export default connect(
    mapStateToProps,
    {zipcodeBrewries}
)(SearchForm);