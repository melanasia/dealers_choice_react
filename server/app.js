const express = require('express');
const path = require('path');
const {Pet, User} = require('./db/schema')

const app = express();

app.use(express.json());

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/users', async(req, res, next) => {
  try {
    res.send(await User.findAll());
  }
  catch(ex){
    next(ex);
  }
});

app.get('/api/pets', async(req, res, next) => {
  try {
    res.send(await Pet.findAll());
  }
  catch(ex){
    next(ex);
  }
});

app.get('/api/users/:userId/pets', async(req, res, next) => {
  try {
    res.send(await Pet.findAll({ where: { ownerId: req.params.userId }}));
  }
  catch(ex){
    next(ex);
  }
});

module.exports = app;