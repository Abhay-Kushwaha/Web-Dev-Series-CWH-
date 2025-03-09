import mongoose from 'mongoose'
import express from 'express'
import { dbUse } from "./models/db.js"

const app = express()
const port = 3000

let conn = await mongoose.connect("mongodb://localhost:27017/Harry")

app.get('/', (req, res) => {
    const ginger = new dbUse({ name: "Aditya", branch:"CSE", age:19});
    ginger.save()
    res.send("Namaste India!")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})