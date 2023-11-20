const express = require('express')
const path = require('path')

const router = express.Router()

router.get("/home" ,(req, res) => {
    res.render("home",{
        title: "Home Page",
        cssFile: "css/home.css",
        nextBtn: "spider-man"
    })
})

router.get("/spider-man" ,(req, res) => {
    res.render("spider-man", {
        title: 'Spider-Man',
        cssFile: "css/spider-man.css",
        nextBtn: "iron-man" 
    })
})

router.get("/iron-man" ,(req, res) => {
    res.render("iron-man", {
        title: 'Iron-Man',
        cssFile: "css/iron-man.css",
        nextBtn: "Dr.Strange" 
    })
})

router.get("/Dr.Strange", (req, res) => {
    res.render("strange", {
        title: 'Dr. Strange',
        cssFile: "css/strange.css",
        nextBtn: "home"
    })
})



module.exports = router 