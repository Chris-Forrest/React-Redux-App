import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBreweries } from '../actions';
import Brewery  from './Brewery';


const Breweries =({ isFetching, breweries, error, getBreweries}) => {

    useEffect (() => {
        getBreweries();
    },[])

    if(error){
        return <h2>Error Loading Breweries</h2>
    }

    return(
        <div className='breweries'>
           {isFetching ? (<h3>Wait data loading....</h3>):( <div>
                {breweries.map(brewery => {
                    return<Brewery key={brewery.id} brewery={brewery}/>
                })}
            </div>)}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        isFetching: state.isFetching,
        breweries: state.breweries,
        error: state.error
    }
}
export default connect(
    mapStateToProps,
    { getBreweries })
    (Breweries);

