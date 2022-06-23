import React from 'react';
import ReactDOM from 'react-dom';
import Pets from './Components/Pets';
import Users from './Components/Users';
import { fetchPets, fetchUsers } from './api';

function App() {
  const [pets, setPets] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  
  React.useEffect(() => {
    fetchUsers().then(response => setUsers(response.data));
    fetchPets().then(response => setPets(response.data));
  }, []);
  
  return (
    <div>
      <main>
        <section>
          <h2>Users ({users.length})</h2>
          <Users users={users}/>
        </section>
        <section>
          <h2>Pets ({pets.length})</h2>
          <Pets pets={pets}/>
        </section>
      </main>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

