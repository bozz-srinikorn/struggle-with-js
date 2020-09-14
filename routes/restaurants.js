const express = require('express')
const router = express.Router()
const restaurants = require('../data')

router.get('/', (req, res) => {
    res.json(restaurants)
})

router.get('/:id', (req, res) => {
    let resaurantId = Number.parseInt(req.params.id, 10)
    let restaurant = restaurants.find((restaurant)=> resaurantId == restaurant.id)
    res.json(restaurant)
})

router.post('/', (req, res) => {
    let newRestaurant = {
        ...req.body
    }
    restaurants.push(req.body)
    res.json(newRestaurant)
})

router.put('/:id', (req, res) => {
    let resaurantId = Number.parseInt(req.params.id, 10)
    let restaurantIndex = restaurants.findIndex((restaurant)=> resaurantId == restaurant.id)

    let updateRestaurant = {
        id: resaurantId,
        ...req.body
    }
        
    restaurants[restaurantIndex] = updateRestaurant
    res.json(updateRestaurant)
})

router.delete('/:id', (req, res) => {
    let resaurantId = Number.parseInt(req.params.id, 10)
    let restaurantIndex = restaurants.findIndex((restaurant)=> resaurantId == restaurant.id)
    restaurants.splice(restaurantIndex, 1)
    res.sendStatus(204)
})


module.exports = router