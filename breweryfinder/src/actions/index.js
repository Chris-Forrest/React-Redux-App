import axios from 'axios';

export const FETCHING_BREWERIES_START = "FETCHING_BREWERIES_START";
export const FETCHING_BREWERIES_SUCCESS = "FETCHING_BREWERIES_SUCCESS";
export const FETCHING_BREWERIES_FAILURE = "FETCHING_BREWERIES_FAILURE";


export const getBreweries = () => dispatch => {
    dispatch({ type: FETCHING_BREWERIES_START });
    axios
     .get("https://api.openbrewerydb.org/breweries?by_state=pennsylvania")
     .then( res => {
         dispatch({ type: FETCHING_BREWERIES_SUCCESS, payload: res.data})
         console.log('data from the axios call ',res.data)
     })
     .catch( err => ('error in actions', err))
}