// reducers.ts
import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT } from './actions';

const counterReducer = (state = 0, action: any) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    counter: counterReducer,
    // Add more reducers here if needed
});

export default rootReducer;
