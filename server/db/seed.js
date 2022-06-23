const db = require('./db');
const {Pet, User} = require('./schema');

const seed = async () => {
  await db.sync({ force: true });
  
  const hamish = await User.create({name: 'Hamish'});
  await Pet.create({name: 'Laiko', species: 'DOG', ownerId: hamish.id});
  await Pet.create({name: 'Belki', species: 'DOG', ownerId: hamish.id});
  
  const melanie = await User.create({name: 'Melanie'});
  Pet.create({name: 'Leo', species: 'CAT', ownerId: melanie.id});
};

module.exports = seed;
