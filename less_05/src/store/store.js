import { configureStore } from '@reduxjs/toolkit';

const initState = {
    background : true
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case 'TOGGLE_THEME':
            return { 
                ...state, 
                background: !state.background 
            };
        default:
            return state;
    }
}

const store = configureStore({
    reducer: reducer,
})

export default store;