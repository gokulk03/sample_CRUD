const express = require('express');
const router = express.Router();
const UserService = require('../services/user.service.js');
const userService = new UserService();
const app = express();
app.use(express.json());

router.get('/', (req, res) => {
    userService.getUsers(req)
        .then(users => res.json(users))
        .catch(err => res.status(400).json({ error: err.message }));
}); 

router.get('/:id', (req, res) => {
    userService.getUserById(req)
        .then(user => res.json(user))
        .catch(err => res.status(400).json({ error: err.message }));
});

router.post('/', (req, res) => {
    userService.createUser(req.body.first_name, req.body.last_name)
        .then(newUser => res.json(newUser))
        .catch(err => res.status(400).json({ error: err.message }));
}); 

router.put('/:id', (req, res) => {
    userService.editUser(req.params.id, req.body.first_name, req.body.last_name)
        .then(editedUser => res.json(editedUser))
        .catch(err => res.status(400).json({ error: err.message }));
}); 

module.exports = router;
