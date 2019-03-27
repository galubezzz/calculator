const initialState = {
    result: 0,
    calc_string: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, result: state.result + 1};
        case 'DECREMENT':
            return {...state, result: state.result - 1};
        case 'ADD_COUNTER':
            return {...state, result: state.result + action.amount};
        case 'SUB_COUNTER':
            return {...state, result: state.result - action.amount};
        case 'SHOW_NUMBER':
            return {...state, calc_string: state.calc_string + action.number};
        default:
            return state;
    }
};

export default reducer;