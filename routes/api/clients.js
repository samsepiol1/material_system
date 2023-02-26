var express = require('express');
var router = express.Router();

const knexConfig = require('../../knexfile');
const knex = require('knex')(knexConfig);

const requireJWT = require('../../middlewares/requireJWT');

router.get('/', async (req, res) => {
  const clients = await knex.table('clients').select(['id', 'name', 'email']);
  res.json({
    clients
  });
});

module.exports = router;