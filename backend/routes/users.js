const { Router } = require('express');
const { getUsers, createUsers, deleteUsers } = require('../controllers/users.controller');
const router = Router();

router.route('/')
    .get(getUsers)
    .post(createUsers)

router.route('/:id')
    .delete(deleteUsers)
    

module.exports = router;
