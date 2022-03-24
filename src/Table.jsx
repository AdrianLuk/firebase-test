import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebaseConfig';

const Table = () => {
  const [users, setUsers] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'users'), (snapshot) =>
        setUsers(
          snapshot.docs
            .map((document) => {
              return { id: document.id, ...document.data() };
            })
            .sort((a, b) => a.born - b.born)
        )
      ),
    []
  );

  return (
    <table style={{ width: '70%', margin: 'auto' }}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Born</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.first}</td>
            <td>{user.last}</td>
            <td>{user.born}</td>
            <td>
              {new Date(user.createdAt).toLocaleString('en-CA', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
              })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
