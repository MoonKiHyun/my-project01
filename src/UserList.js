import React, { useEffect, memo } from "react";

const User =  React.memo(function User({ user, onRemove, onToggle }) {
    const {id, username, email, active} = user;

    useEffect(() => {

        return () => {

        }
    }, [])

    return (
        <div>
            <b style={{color: active ? 'green' : 'black', cursor: 'pointer'}} onClick={() => onToggle(id)}>{username}</b>
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
});

function UserList({ users, onRemove, onToggle }) {


    return (
        <div>
        {users.map(user => (<User 
                            user={user} 
                            key={user.id} 
                            onRemove={onRemove}
                            onToggle={onToggle}
                            />))}
        </div>
    )
}
// nextProps.users === prevProps.users 라면 리렌더링을 하지 않는다.
// 주의점: 나머지 props(onRemove, onToggle)가 정말 고정적이라 비교하지 않아도 되는 것인지 확인을 하자
export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users);