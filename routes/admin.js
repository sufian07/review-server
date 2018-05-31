var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
    res.render('./pages/index');
});

router.get('/reviews', function(req, res) {
    models.Review.findAll({}).then(function(reviews) {
        res.render('./pages/reviews', {
        title: 'Sequelize: Express Example',
        reviews: reviews
        });
    });
    // res.render('./pages/reviews');
});
router.get('/reviews/add', function(req, res) {
    res.render('./pages/reviews_add');
});
router.get('/reviews/:id/edit', function(req, res) {
    res.render('./pages/reviews_add');
});

router.get('/employee', function(req, res) {
    // console.log(models.user);
    models.User.findAll({}).then(function(users) {
        res.render('./pages/employee', {
        title: 'Sequelize: Express Example',
        users: users
        });
    });
});
router.post('/employee', function(req, res) {
    // console.log(models.user);
    console.log(req);
    models.User.create({firstName:req.body.first_name,lastName:req.body.last_name})
    .then(function(user) {
        res.redirect('/admin/employee');
    });
});
router.post('/employee/:id', function(req, res) {
    // console.log(models.user);
    //console.log(req);
    models.User.findOne({ where: {id: req.params.id} })
    .then(function(user) {
        user.update({firstName:req.body.first_name,lastName:req.body.last_name})
    }).then(function(user) {
        res.redirect('/admin/employee');
    });
});
router.post('/employee/:id/delete', function(req, res) {
    // console.log(models.user);
    //console.log(req);
    models.User.findOne({ where: {id: req.params.id} })
    .then(function(user) {
        user.destroy();
    }).then(function() {
        res.redirect('/admin/employee');
    });
});
router.get('/employee/add', function(req, res) {
    res.render('./pages/employee_add');
});
router.get('/employee/:id/edit', function(req, res) {
    console.log(req.params);
    models.User.findOne({ where: {id: req.params.id} }).then(function(user) {
        console.log(user);
        res.render('./pages/employee_edit', {
        title: 'Sequelize: Express Example',
        user: user
        });
    });
    // res.render('./pages/employee_edit');
});
router.get('/employee/:id/delete', function(req, res) {
    console.log(req.params);
    models.User.findOne({ where: {id: req.params.id} }).then(function(user) {
        console.log(user);
        res.render('./pages/employee_delete', {
        title: 'Sequelize: Express Example',
        user: user
        });
    });
    // res.render('./pages/employee_edit');
});

module.exports = router;