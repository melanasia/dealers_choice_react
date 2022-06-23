const axios = require('axios');

const fetchUsers = ()=> {
  return axios.get('/api/users');
}

const fetchPets = () => {
  return axios.get('/api/pets');
}

export {
  fetchUsers,
  fetchPets
}