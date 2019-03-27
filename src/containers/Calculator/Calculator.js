import React, {Component} from "react";
import './Calculator.css';
import {connect} from "react-redux";




class Calculator extends Component {
    render() {
        const {result, calc_string, calculateResult, showNumber, removeNumber, operatorClick} = this.props;
        return (
            <div className="calculator">

                <input type="text" className="calculator-screen" value={calc_string} disabled/>

                <div className="calculator-keys">

                    <button type="button" className="operator" value="+" onClick={() => operatorClick("+")}>+</button>
                    <button type="button" className="operator" value="-" onClick={() => operatorClick("-")}>-</button>
                    <button type="button" className="operator" value="*" onClick={() => operatorClick("*")}>&times;</button>
                    <button type="button" className="operator" value="/" onClick={() => operatorClick("/")}>&divide;</button>

                    <button type="button" value="7" onClick={() => showNumber(7)}>7</button>
                    <button type="button" value="8" onClick={() => showNumber(8)}>8</button>
                    <button type="button" value="9" onClick={() => showNumber(9)}>9</button>

                    <button type="button" className="equal-sign" value="=" onClick={calculateResult}>=</button>


                    <button type="button" value="4" onClick={() => showNumber(4)}>4</button>
                    <button type="button" value="5" onClick={() => showNumber(5)}>5</button>
                    <button type="button" value="6" onClick={() => showNumber(6)}>6</button>

                    <button type="button" className="all-clear" value="all-clear" onClick={removeNumber}>AC</button>


                    <button type="button" value="1" onClick={() => showNumber(1)}>1</button>
                    <button type="button" value="2" onClick={() => showNumber(2)}>2</button>
                    <button type="button" value="3" onClick={() => showNumber(3)}>3</button>


                    <button type="button" value="0" onClick={() => showNumber(0)}>0</button>


                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        result: state.result,
        calc_string: state.calc_string,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        increaseCounter: () => dispatch({type: 'INCREMENT'}),
        decreaseCounter: () => dispatch({type: 'DECREMENT'}),
        showNumber:(number) => dispatch({type: 'ENTER_NUMBER', number}),
        removeNumber:() => dispatch({type: 'DELETE_NUMBER'}),
        operatorClick: (operator) => dispatch({type: 'OPERATOR', operator}),
        calculateResult: () => dispatch({type: 'CALC'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
