import React, { useEffect, useRef } from "react";

function Timer() {
    const intervalRef = useRef();
    
    useEffect(() => {
        // 컴포넌트가 마운트 될 때 해당 함수 실행
        // setInterval : 주어진 콜백 함수를 지정된 시간 간격마다 반복해서 실행, 해당 함수는 고유한 식별자를 반환
        intervalRef.current = setInterval(() => {
            console.log("Timer tick");
        }, 1000);

        console.log("Interval ID:", intervalRef.current);

        return () => {
            // 컴포넌트가 언마운트 될 때 타이머 제거
            clearInterval(intervalRef.current);
        }

    }, []); // 마운트 시 한 번만 실행

    const stopTimer = () => {
        clearInterval(intervalRef.current);
    };

    return (
        <div>
            <button onClick={stopTimer}>Stop Timer</button>
        </div>
    )
}

export default Timer;