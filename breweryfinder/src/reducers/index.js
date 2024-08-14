/*************imports from actions **********************************************************************/
import { FETCHING_BREWERIES_START, FETCHING_BREWERIES_SUCCESS, FETCHING_BREWERIES_FAILURE,
FETCHING_BYZIPCODE_START, FETCHING_BYZIPCODE_SUCCESS, FETCHING_BYZIPCODE_FAILURE} from '../actions';

/***********************made initial state ********************************************/
const initialState = {
    isFetching : false,
    zipcode:'',
    breweries:[],
    error:""
}
/****************app reducer  ******************************************************/

export const appReducer = ( state = initialState, action) => {
    switch(action.type){
        case FETCHING_BYZIPCODE_START:
            return {
                ...state,
                isFetching:true,
                zipcode:action.payload,
                error:""
            }
        case FETCHING_BYZIPCODE_SUCCESS:
            return {
                ...state,
                //zipcode:action.payload,
                breweries:action.payload,
                isFetching:false
            }
        case FETCHING_BYZIPCODE_FAILURE:
            return {
                ...state,
                isFetching:false,
                error:"error fetching inputed breweries"
            }
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