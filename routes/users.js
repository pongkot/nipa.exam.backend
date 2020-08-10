var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
const fs = require('fs')
const userService = require('../service/user.service')

/* GET users listing. */
router
    .get('/', (req, res) => {
        const result = userService.listUsers()
        res.set('Content-Type', 'application/json');
        result.then(r => {
            res.send(r)
        })
    })
    .get('/export', (req, res) => {
        const result = userService.listUsers()
        res.set('Content-Type', 'text/csv');
        result.then(r => {
            const csv = userService.userDataToCsv(r)
            res.attachment('users.csv').send(csv);
        })
    })
    .post('/', upload.single('csv'), (req, res) => {
        const uploadFilePath = req.file.path
        const buffer = fs.readFileSync(uploadFilePath)
        const userData = userService.csvToUserData(buffer)
        userService.createNewUser(userData)
        res.send(200)
    });

module.exports = router;
