const initialState = {
    result: 0,
    calc_string: "",
    value1: 0,
    operator: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, result: state.result + 1};
        case 'DECREMENT':
            return {...state, result: state.result - 1};
        case 'OPERATOR':
            return {...state, operator: action.operator, value1: parseInt(state.calc_string), calc_string: ""};
        case 'CALC':
            return {...state, calc_string: calculateResult(state.value1, parseInt(state.calc_string), state.operator)};
        case 'SHOW_NUMBER':
            return {...state, calc_string: state.calc_string + action.number};
        case 'DELETE_NUMBER':
            return {...state, calc_string: state.calc_string.slice(0,-1)};
        default:
            return state;
    }
};

const calculateResult = (value1, value2, operator) => {
    let result = 0;
    if (operator==="+") {
        result = value1 + value2;
    } else if(operator==="-") {
        result = value1 - value2;
    } else if(operator==="/") {
        result = value1 / value2;
    } else if(operator==="*") {
        result = value1 * value2;
    }

    return result;
}

export default reducer;