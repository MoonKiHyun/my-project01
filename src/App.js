import React, { useRef, useState, useMemo, useCallback, useReducer } from "react";
import Counter from "./Counter";
import InputSample from "./InputSample";
import Timer from "./Timer";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import useInputs from "./useInputs";

function countActiveUser(users) {
  console.log('활성화 사용자 수를 세는 중...');
  return users.filter((user) => user.active).length;
}

function reducer(state, action) {

  switch (action.type) {
    
    case 'CREATE_USER': {
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      }
    }
    case 'TOGGLE_USER': {
      return {
        ...state,
        users: state.users.map((user) => user.id === action.id 
        ? {...user, active: !user.active}
        : user)
      }
    }
    case 'REMOVE_USER': {
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id)
      }
    }
    default:
      throw new Error('Unhandled Action');
  }
}

const initialState = {
  users: [
    {
        id: 1,
        username: "문기현",
        email: "ansrlgus2tp@naver.com",
        active: true
    },
    {
        id: 2,
        username: "윤형탁",
        email: "dbsgudxkr@naver.com",
        active: false
    },
    {
        id: 3,
        username: "김정원",
        email: "rlawjddnjs@naver.com",
        active: false
    }
  ]
}

function App() {
  
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const [ form, onChange, reset ] = useInputs({
    username:'',
    email: '',
  });
  const { username, email } = form;
  const { users } = state;
  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    })
    nextId.current += 1;
    reset();
  }, [username, email, reset]);

  const onToggle = useCallback((id) => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, [])

const count = useMemo(() => countActiveUser(users), [users]);

  return (
    <>
      <CreateUser 
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
      />
      <UserList 
      users={users} 
      onToggle={onToggle} 
      onRemove={onRemove}
      />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
