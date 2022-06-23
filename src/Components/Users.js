import React from 'react';

export default function Users({users}) {
    return (
      <ul>
        {users.map(user => {
          return (
            <li key={user.id}>
              {user.name}
            </li>
          )
        })}
      </ul>
  );
}

/**
 * <Users users={[{id: 1, name: 'Hamish'}]} />
 * Users({users: [{id: 1, name: 'Hamish'}]})
 */
