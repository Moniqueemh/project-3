const db = require('../models');
const router = require('express').Router();
const isAuthenticated = require('../utils/middleware').isAuthenticated;
/**
 * School - Read All
 */
router.get('/school', isAuthenticated, function(req, res) {
    // we can pass in things in the query of a REST call!
    db.School.findAll(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * School - Read One
 */
router.get('/school/:id', isAuthenticated, function(req, res) {
    db.School.findByPk(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * School - Create
 * Notice how we are also taking in the User Id! Important!
 * We need the isAuthenticated middleware in the route to have a user in the request
 */
router.post('/school', isAuthenticated, function(req, res) {
    db.School.create({
        ...req.body
    })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * School - Update
 */
router.put('/school/:id', isAuthenticated, function(req, res) {
    db.School.update(req.body, { where: { id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * School - Delete
 */
router.delete('/school/:id', isAuthenticated, function(req, res) {
    db.School.destroy({ where: { id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// Defining methods for the booksController
module.exports = router;
