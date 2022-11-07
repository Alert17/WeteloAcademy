const { Router } = require('express');
const UserService = require('../services/user.js');

const router = Router();

router.get('/readAll', async (req, res) => {
    const result = await UserService.getUsers();
    res.status(200).send({ success: true, result });
});

router.get('/readById', async (req, res) => {
    const {id} = req.query
    const result = await UserService.getUser(id);
    res.status(200).send({ success: true, result });
})

router.patch('/update', async (req, res) => {
    const {id, email} = req.query
    const result = await UserService.changeEmail(id, email);
    res.status(200).send({ success: true, result });
})

router.post('/create', async (req, res) => {
    const {id, email} = req.body
    const result = await UserService.create(id, email);
    res.status(200).send({ success: true, result });
})

router.delete('/delete', async (req, res) => {
    const {id} = req.query
    const result = await UserService.delete(id);
    res.status(200).send({ success: true, result });
})

module.exports = router;