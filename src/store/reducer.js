const initialState = {
    result: null,
    calc_string: "",
    value1: 0,
    operator: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPERATOR':
            return {...state, operator: action.operator, value1: parseInt(state.calc_string), calc_string: ""};
        case 'CALC':
            return {...state, result: calculateResult(state.value1, parseInt(state.calc_string), state.operator)};
        case 'ENTER_NUMBER':
            if (state.result){
                return {...state, calc_string: action.number, result: null}
            } else {
                return {...state, calc_string: state.calc_string + action.number};
            }
        case 'DELETE_NUMBER':
            return {...state, calc_string: deleteSymbol(state.calc_string)};
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
const deleteSymbol = (string) => {
    if (string.length>0){
        return string.slice(0,-1);
    }
    return string;
}

const enterSymbol = (string, result, symbol) =>{
    if (result) {
        return symbol;

    }
}
export default reducer;