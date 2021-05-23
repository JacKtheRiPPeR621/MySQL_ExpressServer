const route = require('express').Router()  // This route is at '/api' path

const db = require('../db')

route.get('/persons/' , (req , res) => {
    //send all the persons as an array

    db.getAllPersons()
    .then((persons) => res.send(persons))
    .catch((err) => res.send({error: err}))

})

route.post('/persons/' , (req , res) => {
    //Add the new Person(details are in body)

    db.addNewPerson(req.body.name , req.body.age , req.body.city)
    .then(()=> res.redirect('/api/persons/'))
    .catch((err)=> res.send({error: err}))

})

exports = module.exports ={
    route
}