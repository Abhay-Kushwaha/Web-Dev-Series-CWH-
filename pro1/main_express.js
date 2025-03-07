const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public')) // To allow excess to the files in folder "public"

// app.get('blog/:slug', (req, res) => {
//     console.log(req.params);
// })

app.get('/', (req, res) => {
    console.log("Hey its a get Request");
    res.send("Hello GET")
})

app.post('/', (req, res) => {
    console.log("Hey its a post Request");
    res.send("Hello POST")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})