var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var mysql = require('mysql2');
var models = require('../models');

var connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'Season789!',
  database: 'finalproject'
});

connection.connect(function(err) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Yay! You are connected!');
})

const query = `SELECT * from finalproject.user`;

connection.query(query, (err, results) => {
  if (err) throw err;
  console.log(results);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function(req, res, next) {
  models.user.findAll({}).then(usersFound => {
    res.render('users', {
      users: usersFound
});
  });
});

router.get('/users', function(req, res, next){
  models.user.findAll({}).then(usersFound => {
    res.render('users', {
      users: usersFound
    });
  });
});

router.get('/specificUser', function(req, res, next){
  models.user.findOne({
    where: {user_id:1}
  })
  .then(user => {
    res.render('specifiUsers', {
      user: userFound
    });
  });
});

router.get('/user/:id', function( req, res, next){
  let userId =- parseInt(req.params.id);
  models.users.findOne({
    where: { 
      user_id:userId
    }
  })
  .then(user => {
    res.render('specificUser', {
      user: user
    });
  });
});

router.post('/user', function(req, res, next) {
  models.user.findOrCreate({
    where: {
      first_name: req.body.first_name,
      last_name: req.body.last_name
    }
  })
  .spread(function(result, created){
  if (created) {
    res.redirect('/users');
 } else {
   res.send("This user already ExtensionScriptApis.");
 }
  });
});

module.exports = router;
