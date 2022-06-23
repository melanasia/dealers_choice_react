import React from 'react';

export default function Pets({pets}) {
    return (
      <ul>
        {pets.map(pet => {
          return (
            <li key={ pet.id }>
              { pet.name }
            </li>
          )
        })}
      </ul>
  );
}