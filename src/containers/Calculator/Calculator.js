import React, {Component} from "react";
import './Calculator.css';
import {connect} from "react-redux";


class Calculator extends Component {
    render() {
        const {result, calc_string, increaseCounter, decreaseCounter, addCounter, subCounter, showNumber} = this.props;
        return (
            <div className="calculator">

                <input type="text" className="calculator-screen" value={calc_string} disabled/>

                <div className="calculator-keys">

                    <button type="button" className="operator" value="+" onClick={increaseCounter}>+</button>
                    <button type="button" className="operator" value="-" onClick={decreaseCounter}>-</button>
                    <button type="button" className="operator" value="*">&times;</button>
                    <button type="button" className="operator" value="/">&divide;</button>

                    <button type="button" value="7" onClick={() => showNumber(7)}>7</button>
                    <button type="button" value="8">8</button>
                    <button type="button" value="9">9</button>


                    <button type="button" value="4">4</button>
                    <button type="button" value="5">5</button>
                    <button type="button" value="6">6</button>


                    <button type="button" value="1">1</button>
                    <button type="button" value="2">2</button>
                    <button type="button" value="3">3</button>


                    <button type="button" value="0">0</button>
                    <button type="button" className="decimal" value=".">.</button>
                    <button type="button" className="all-clear" value="all-clear">AC</button>

                    <button type="button" className="equal-sign" value="=">=</button>

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
        showNumber:(number) => dispatch({type: 'SHOW_NUMBER', number}),
        addValue1: (amount) => dispatch({type: 'ADD_COUNTER', amount}),
        addValue2: (amount) => dispatch({type: 'SUB_COUNTER', amount})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
