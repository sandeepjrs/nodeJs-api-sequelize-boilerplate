var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
  models.User.create({
    username: req.body.username
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:user_id/destroy', function(req, res) {
  models.User.destroy({
    where: {
      id: req.params.user_id
    }
  }).then(function() {
    res.redirect('/');
  });
});

router.post('/:user_id/tasks/create', function (req, res) {
  models.Task.create({
    title: req.body.title,
    UserId: req.params.user_id
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:user_id/tasks/:task_id/destroy', function (req, res) {
  models.Task.destroy({
    where: {
      id: req.params.task_id
    }
  }).then(function() {
    res.redirect('/');
  });
});


router.get('/x', function(req, res){
  models.User.findAll({
    include: [models.Task]

  }).then((users)=>{
    res.send(users)
  })
  console.log("trying to call all")

   
});


router.get('/y', function (req, res) {
  models.Task.findAll({
    include: [{ all: true, nested: true }]

  }).then((users) => {
    res.send(users)
  })
  console.log("trying to call all")


});

router.get('/t', function (req, res) {
  models.User.findAll({
    include: [{ model: models.Task, include: [{ model: models.SubTask, include: [{ model: models.MiniTask}]}]}]

  }).then((users) => {
    res.send(users)
  })
  console.log("trying to call all")


});


module.exports = router;
