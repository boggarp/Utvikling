const fs = require('fs')
const path = require('path')
const express = require('express')
const multer = require('multer')

//Starter opp express, og skrur på public-mappen
const app = express()
const publicDirectoryPath = path.join(__dirname, "/public")
app.use(express.static(publicDirectoryPath))

//Bruker urlencoded-middleware, for å la oss få tilgang til request.body i post-forms
app.use(express.urlencoded({ extended: true }));

const sqlite3 = require('better-sqlite3')
const db = sqlite3('database.db', {verbose:console.log})

//File upload setup
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

exports.app = app
exports.db = db
exports.upload = upload