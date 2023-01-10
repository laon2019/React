import React from 'react';

const User = ({userData}) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
}

const UserList = () => {
    const users = [
      {email: 'user1@gamil.com', name: '유재성'},
      {email: 'user2@gamil.com', name: '유재성2'},
      {email: 'user3@gamil.com', name: '유재성3'},
      {email: 'user4@gamil.com', name: '유재성4'}
    ];
    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User userData={user} />)}
            </tbody>
        </table>
    )
}
export default UserList;