const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let brand= "Melodyverse"
    res.render("index.ejs", {brand})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})