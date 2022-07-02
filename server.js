const express = require('express')
const path = require('path')
const port = process.env.PORT || 5000

const app = express()
const publicPath = path.join(__dirname, 'build')
const nasaPath = path.join(__dirname, 'nasa')
const gridPath = path.join(__dirname, 'gridFormat')
const p5Path = path.join(__dirname, 'p5')

app.use("/projects/1", express.static(nasaPath))
// app.use("/projects/2", express.static(gridPath))
app.use("/projects/3", express.static(p5Path))
app.use(express.static(publicPath))

app.get("/projects/1", (req, res) => {
    res.sendFile(path.join(gridPath, "nasa.html"))
})
// app.get("/projects/2", (req, res) => {
//     res.sendFile(path.join(gridPath, ".html"))
// })
app.get("/projects/3", (req, res) => {
    res.sendFile(path.join(p5Path, "p5.html"))
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