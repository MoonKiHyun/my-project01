import React, { useState, useReducer } from "react";

function reducer(state,  action) {
    switch (action.type) {
        case 'INCREASE': 
        return state += 1;
        case 'DECREASE': 
        return state -= 1;
        break;
        default:
            throw new Error('Counter 컴포넌트 에러');
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => dispatch({type: 'INCREASE'});

    const onDecrease = () => dispatch({type: 'DECREASE'});

    return (
        <>
        <h1>{state}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        </>
    );
}

export default Counter;