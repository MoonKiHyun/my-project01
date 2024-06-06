import React, { useContext } from "react";
import { UserDispatch } from "./App";

const User =  React.memo(function User({ user }) {
    const {id, username, email, active} = user;
    const dispatch = useContext(UserDispatch);

    return (
        <div>
            <b style={{color: active ? 'green' : 'black', cursor: 'pointer'}} onClick={() => dispatch({type: 'TOGGLE_USER', id})}>{username}</b>
            <span>({email})</span>
            <button onClick={() => dispatch({type: 'REMOVE_USER', id})}>삭제</button>
        </div>
    )
});

function UserList({ users }) {
    return (
        <div>
        {users.map(user => (<User user={user} key={user.id} />))}
        </div>
    )
}
// nextProps.users === prevProps.users 라면 리렌더링을 하지 않는다.
// 주의점: 나머지 props(onRemove, onToggle)가 정말 고정적이라 비교하지 않아도 되는 것인지 확인을 하자
export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users);