import { GET_JOBS } from "../actions/types"

const INITIAL_STATE = {
  listOfJobs: [],
};

const jobReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_JOBS: 
            return {...state, listOfJobs: action.payload};
        default:
            return state;
    }
}

export default jobReducer;