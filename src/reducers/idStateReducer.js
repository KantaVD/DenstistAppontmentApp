import * as actions from "../actions/actiontypes"

const incrementIdReducer = (state = 1, action) => {
    switch(action.type) {
        case actions.SET_ID_STATE:
            return state = action.payload;
        default :
            return state;    
    };
};

export default incrementIdReducer;