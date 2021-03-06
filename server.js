const express = require('express')
const path = require('path')
const port = process.env.PORT || 5000

const app = express()
const publicPath = path.join(__dirname, 'build')
const p5Path = path.join(__dirname, 'p5')
const d3Path = path.join(__dirname, 'd3')

app.use("/projects/3", express.static(p5Path))
app.use("/projects/4", express.static(d3Path))
app.use(express.static(publicPath))


app.get("/projects/3", (req, res) => {
    res.sendFile(path.join(p5Path, "p5.html"))
})
app.get("/projects/4", (req, res) => {
    res.sendFile(path.join(d3Path, "d3.html"))
})
app.get("/*", (req, res)=>{
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, (err)=>{
    if (err) {
        console.log(err)
        process.exit(1)
    }
    console.log(`Server Running. Listening on port ${port}`)
})