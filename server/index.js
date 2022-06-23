const app = require('./app');
const db = require('./db');
const seed = require('./db/seed');

app.use((err, req, res, next)=> {
  console.log(err.stack);
  res.status(500).send({ error: err.message });
});
const port = process.env.PORT || 3000;

const init = async ()=> {
  if (process.env.SEED) {
    await seed();
  }
  app.listen(port, () => console.log(`listening on port ${port}`));
}

init();
