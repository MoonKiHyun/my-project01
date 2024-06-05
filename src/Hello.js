import React from 'react';

function Hello(props) {
    const {name = "이름 없음", color} = props
    return (
        <div className={name} style={{
            color
        }}>안녕하세요!</div>
    )
}

export default Hello;