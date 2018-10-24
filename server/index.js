const Vue = require('vue')
const server = require('express')()
const { createRenderer } = require('vue-server-renderer')
const { readFileSync } = require('fs')
const { main } = require(__dirname + '/app/client.js')

console.log(main.router)
server.get('*', (req, res) => {
  const app = new Vue(main)
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
