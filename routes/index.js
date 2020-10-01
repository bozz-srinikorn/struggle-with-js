const express = require('express')

const restaurants = require('../data')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {
        restaurants  
    })
})

router.get('/:name', (req, res) => {
    res.json(`hello ${req.params.name}`)
})


module.exports = router