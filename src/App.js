import React, { useRef, useState, useMemo, useCallback, useReducer, createContext } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import { produce } from 'immer';
/**
 * useState를 사용해서 까다로운 객체를 사용할 때 불변성 관리가 힘들 때 사용하면 좋다.
 * produce에 파라미터를 함수 하나만 넣게 되면 updater를 반환한다.
 */
window.produce = produce;

function countActiveUser(users) {
  console.log('활성화 사용자 수를 세는 중...');
  return users.filter((user) => user.active).length;
}

function reducer(state, action) {

  switch (action.type) {
    
    case 'CREATE_USER': {
      return {
        ...state,
        users: state.users.concat(action.user)
      }
    }
    case 'TOGGLE_USER': {
      // return {
      //   ...state,
      //   users: state.users.map((user) => user.id === action.id 
      //   ? {...user, active: !user.active}
      //   : user)
      // }
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      })
    }
    case 'REMOVE_USER': {
      // return {
      //   ...state,
      //   users: state.users.filter((user) => user.id !== action.id)
      // }
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index, 1);
      })
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

export const UserDispatch = createContext(null);

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { users } = state;
  const count = useMemo(() => countActiveUser(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList 
      users={users} />
      <div>활성 사용자 수: {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
