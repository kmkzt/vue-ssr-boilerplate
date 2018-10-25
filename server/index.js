const Vue = require('vue')
const server = require('express')()
const { createRenderer } = require('vue-server-renderer')
const { readFileSync } = require('fs')
const { app } = require(__dirname + '/app/server.js')

console.log(app)
server.get('*', (req, res) => {
  const renderer = createRenderer({
    template: readFileSync(__dirname + '/index.template.html', 'utf-8')
  })
  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.send(html)
  })
})

server.listen(8080)
