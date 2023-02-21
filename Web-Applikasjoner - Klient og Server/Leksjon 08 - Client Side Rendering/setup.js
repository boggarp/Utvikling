const fs = require('fs')
const path = require('path')
const express = require('express')
const hbs = require('hbs')

//Starter opp express, og skrur på public-mappen
const app = express()
const publicDirectoryPath = path.join(__dirname, "/public")
app.use(express.static(publicDirectoryPath))

//Bruker urlencoded-middleware, for å la oss få tilgang til request.body i post-forms
app.use(express.urlencoded({ extended: true }));

const sqlite3 = require('better-sqlite3')
const db = sqlite3('database.db', {verbose:console.log})

exports.app = app
exports.db = db