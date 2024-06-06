import React, { useState, useReducer, Component } from "react";

// function reducer(state,  action) {
//     switch (action.type) {
//         case 'INCREASE': 
//         return state += 1;
//         case 'DECREASE': 
//         return state -= 1;
//         break;
//         default:
//             throw new Error('Counter 컴포넌트 에러');
//     }
// }

// function Counter() {
//     const [state, dispatch] = useReducer(reducer, 0);
//     const onIncrease = () => dispatch({type: 'INCREASE'});

//     const onDecrease = () => dispatch({type: 'DECREASE'});

//     return (
//         <>
//         <h1>{state}</h1>
//         <button onClick={onIncrease}>+1</button>
//         <button onClick={onDecrease}>-1</button>
//         </>
//     );
// }

class Counter extends Component {

    // 리액트 컴포넌트에서 메서드가 특정 이벤트에 연결될 때 this와 함수와의 연결이 끊어진다. 자바스크립트의 동작 방식과 관련이 있음.
    // 해결법
    // 1. 화살표 함수 사용 2. 생성자에서 바인딩

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         counter: 0
    //     };
    // }

    // 정식 자바스크립트 문법은 아니며 바벨 플러그인을 통해서 사용할 수 있는 문법
    state = {
        counter: 0,
        fixed: 1,
        updateMe: {
            toggleMe: false,
            dontChangeMe: 1,
        }
    }

    handleIncrease = () => {
        // this.setState에 업데이트하고싶은 값만 넣어주면 해당 값만 업데이트하고 나머지 값은 건드리지 않는다.
        // setState에 함수형 업데이트를 넣을 수도있다.
        // state 안에 들어있는게 객체라면 불변성 유지를 해주어야 한다.
        this.setState((state) => ({
            counter: state.counter +1
        }))
        this.setState((state) => ({
            counter: state.counter +1
        }))
        this.setState((state) => ({
            counter: state.counter +1
        }))
        this.setState((state) => ({
            counter: state.counter +1
        }))
    }
    
    handleDecrease = () => {
        this.setState({
            counter: this.state.counter -= 1
        })
        this.setState({
            counter: this.state.counter -= 1
        })
        this.setState({
            counter: this.state.counter -= 1
        })
        this.setState({
            counter: this.state.counter -= 1
        })
    }

    handleToggle = () => {
        this.setState({
            updateMe: {
                ...this.state.updateMe,
                toggleMe: !this.state.updateMe.toggleMe,
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값: {this.state.fixed}</p>
            </div>
        );
    }
}

export default Counter;