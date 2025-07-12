const express = require("express")
const router = express.Router()

router.use(logger)

router.get("/", (req, res) => {
    res.send("user list")
})

router.get("/new", (req, res) => {
    res.render("users/new")
})

router.post("/", (req, res) => {
    const isValid = false
    if(isValid){
        users.push({firstName: req.body.firstName})
        res.redirect('/users/${users.length - 1}')
    }else{
        console.log("Error")
        res.render('users/new', {firstName: req.body.firstName})
    }

    res.send("Hi")
})

router
.route("/:userId")
.get((req, res) => {
    console.log(req.user)
    res.send(`get user with id ${req.params.userId}`)
})
.put((req, res) => {
    res.send(`get user with id ${req.params.userId}`)
})
.delete((req, res) => {
    res.send(`get user with id ${req.params.userId}`)
})

const users = [{name : "Kyle"}, {name: "Sally"}]
router.param("userId", (req, res, next, userId) => {
    req.user = users[userId]
    next()
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}


module.exports = router