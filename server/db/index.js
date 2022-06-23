const db = require('./db');
const {Pet, User} = require('./schema');
const seed = require('./seed');

module.exports = {
  db,
  seed,
  models: {
    Pet, User
  },
};
