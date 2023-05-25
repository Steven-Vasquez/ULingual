const express = require('express');
const db = require('./database');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=> {
    console.log("DB is properly connnected.");
})


