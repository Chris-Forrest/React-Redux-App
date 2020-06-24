/*************imports from actions **********************************************************************/
import { FETCHING_BREWERIES_START, FETCHING_BREWERIES_SUCCESS, FETCHING_BREWERIES_FAILURE} from '../actions';

/***********************made initial state ********************************************/
const initialState = {
    isFetching : false,
    breweries:[],
    error:""
}
/****************app reducer  ******************************************************/

export const appReducer = ( state = initialState, action) => {
    switch(action.type){
        case FETCHING_BREWERIES_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case FETCHING_BREWERIES_SUCCESS:
            return {
                ...state,
                breweries: action.payload,
                isFetching: false
            }
        case FETCHING_BREWERIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error:"error retrieving breweries"
            }
        default:
            return state;
    }
}