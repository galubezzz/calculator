const initialState = {
    counter: 10
};

const subCounter = (state, action) => {
    return {...state, counter: state.counter - action.amount}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter + 1};
        case 'DECREMENT':
            return {...state, counter: state.counter - 1};
        case 'ADD_COUNTER':
            return {...state, counter: state.counter + action.amount};
        case 'SUB_COUNTER':
            return subCounter(state, action);
        default:
            return state;
    }
};

export default reducer;