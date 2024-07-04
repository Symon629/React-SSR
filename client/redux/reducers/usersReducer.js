import { FETCH_USERS } from "../actions/user";

const initialState = [];

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS:
            return action.payload.data || state;
        default:
            return state;
    }
};

export default usersReducer;