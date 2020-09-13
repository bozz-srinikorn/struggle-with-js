const http = require('http')
const path = require('path')
const fs = require('fs')
const moment = require('moment')
const { calculateVat, sayHello} = require('./utils')


function getPage(page) {
    const filePath = path.join(__dirname, page)
    return fs.readFileSync(filePath)
}


function handleFiles(req, res) {
    const fileType = path.extname(req.url) || '.html'

    if (fileType == '.html') {
        res.setHeader('Content-Type', 'text/html')
        res.writeHead(200)

        if (req.url == '/') {
            res.write(getPage('index.html'))
        } else {
            res.write(getPage(`${req.url}.html`))
        }
        res.end()
    } else if (fileType == '.css') {
        res.setHeader('Content-Type', 'text/css')
        res.writeHead(200)
        res.write(getPage(req.url))
        res.end()

    } else {
        res.writeHead(404)
        res.end()
    }

}

function getData(url) {
    let data;
    if (url == '/api/v1/users') {
        data = [{ name: "bozz" }, { skill: "noob" }]
    } else if (url == '/api/v1/posts') {
        data = [{
            title: "Bozz",
            date: moment().startOf('day').fromNow()
        }]
    }
    return data
}

function handleAPI(req, res) {
    let data = getData(req.url);
    if (data) {
        res.setHeader('Content-Type','application/json')
        res.write(JSON.stringify(data))
    } else {
        res.writeHead(404)
    }
}

http
    .createServer((req, res) => {
        if (req.url.startsWith('/api')) {
            handleAPI(req, res)
        } else {
            handleFiles(req, res)
        }
    })
    .listen(3000)