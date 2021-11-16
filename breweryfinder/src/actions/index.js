import axios from 'axios';

export const FETCHING_BREWERIES_START = "FETCHING_BREWERIES_START";
export const FETCHING_BREWERIES_SUCCESS = "FETCHING_BREWERIES_SUCCESS";
export const FETCHING_BREWERIES_FAILURE = "FETCHING_BREWERIES_FAILURE";
export const FETCHING_BYZIPCODE_START = " FETCHING_BYZIPCODE_START";
export const FETCHING_BYZIPCODE_SUCCESS = "FETCHING_BYZIPCODE_SUCCESS";
export const FETCHING_BYZIPCODE_FAILURE = "FETCHING_BYZIPCODE_FAILURE";


export const getBreweries = () => dispatch => {
    dispatch({ type: FETCHING_BREWERIES_START });
    axios
     .get("https://api.openbrewerydb.org/breweries?by_state=pennsylvania")
     .then( res => {
         dispatch({ type: FETCHING_BREWERIES_SUCCESS, payload: res.data})
         console.log('data from fetchingbreweriessuccess call ',res.data)
     })
     .catch( err => {
         dispatch({type: FETCHING_BREWERIES_FAILURE , payload: err.message})
     });
};

export const zipcodeBrewries = (zipcode) => dispatch => {
    dispatch({ type: FETCHING_BYZIPCODE_START});
    axios
     .get(`https://api.openbrewerydb.org/breweries?by_postal=${zipcode}`)
     .then(res => {
         dispatch({type: FETCHING_BYZIPCODE_SUCCESS, payload: res.data})
         console.log('data from zipcodesuccess call', res.data)
     })
     .catch( err => {
         dispatch({type: FETCHING_BYZIPCODE_FAILURE, payload: err.message})
     });
};