var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = {
    users: [
      {
        name: 'Jimmy',
        age: 20
      },
      {
        name: 'Timmy',
        age: 30
      },
      {
        name: 'Billy',
        age: 8
      }
    ]
  };
  res.json(users);
});

module.exports = router;
