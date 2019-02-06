const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const publicPath = path.join(__dirname, '..', 'public')
const port = process.env.PORT

app.use(express.static(publicPath))

app.get('/music/:id', audioStream)

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port || 3000)
console.log('app started on port ', port || 3000)


function audioStream (req, res) {
    const filePath = path.join(__dirname, '..', 'music', req.params.id)

    fs.exists(filePath, (exists) => {

        if (exists) {
            const stat = fs.statSync(filePath)
            const total = stat.size
            if (req.headers.range) {
                const range = req.headers.range
                const parts = range.replace(/bytes=/, "").split("-")
                const partialStart = parts[0]
                const partialEnd = parts[1]

                const start = parseInt(partialStart, 10)
                const end = partialEnd ? parseInt(partialEnd, 10) : total - 1
                const chunkSize = (end - start) + 1
                const readStream = fs.createReadStream(filePath, { start: start, end: end })
                res.writeHead(206, {
                    'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
                    'Accept-Ranges': 'bytes', 'Content-Length': chunkSize,
                    'Content-Type': 'audio/m4a'
                })
                readStream.pipe(res)
            } else {
                res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'audio/m4a' })
                fs.createReadStream(filePath).pipe(res)
            }
        }
        else {
            res.status(404)
                .send("Its a 404 :(")
                .end()
        }
    })
}