import React, { useCallback, useState, useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE': {
            return {
                ...state,
                [action.name]: action.value
            }};
        case 'RESET':
            return Object.keys(state).reduce((acc, current) => {
                acc[current] = ''; 
                return acc;
            }, {});
        default:
            return state;
    }
}

function useInputs(initialForm) {
    
    // // form: 상태, setForm: 상태를 업데이트, initialForm: 초기값
    // const [form, setForm] = useState(initialForm);

    // // 이벤트 인자를 받아 해당 DOM 노드를 저장
    // const onChange = useCallback((e) => {
    //     const { name, value } = e.target;
        
    //     // form의 값을 input에 입력된 값으로 업데이트
    //     setForm(form => ({...form, [name]: value}));
    // }, [])

    // // form을 initialForm값으로 업데이트
    // const reset = useCallback(()=> setForm(initialForm), [initialForm]);

    // return [form, onChange, reset];

    const [ form, dispatch ] = useReducer(reducer, initialForm);

    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        dispatch({
            type: 'CHANGE',
            name,
            value
        });
    }, []);

    const reset = useCallback(() => {
        dispatch({
            type: 'RESET',
            initialForm
        });
    }, [initialForm]);

    return [form, onChange, reset];
}

export default useInputs;