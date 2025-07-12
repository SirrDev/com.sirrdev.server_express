const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("user list")
})

router.get("/new", (req, res) => {
    res.send("user new form")
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

module.exports = router