import React, { useState, useRef } from "react";

function InputSample() {
    const [inputs, setInput] = useState({
        username: '',
        email:'',
    });
    const inputRef = useRef();
    const { username, email } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;

        setInput({
            ...inputs,
            [name]: value
        })
    }

    const onReset = (field) => {
    
        setInput({
            ...inputs,
            [field]: '',
        })
        inputRef.current.focus();
    }

    return (
        <>
        <div>
            <input name="username" 
            placeholder="이름" 
            onChange={onChange} 
            value={username}
            ref={inputRef}
            />
            <button onClick={() => onReset('username')}>초기화</button>
            <div><b>값: </b>{username}</div>
        </div>
        <div>
            <input 
            name="email" 
            placeholder="이메일" 
            onChange={onChange} 
            value={email}
            />
            <button onClick={() => onReset('email')}>초기화</button>
            <div><b>값: </b>{email}</div>
        </div>
        </>
    );
}

export default InputSample;