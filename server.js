let express = require('express')
let app = express()
let opn = require('opn')
let port = 8899

app.set('jsonp callback name', 'jsonp')

app.use('/', express.static('./'))

app.get('/jsonp', function (req, res) {
  res.jsonp({status: 200, resault: '我是jsonp返回的结果'})
})

app.get('/cors', function (req, res) {
  res.append('Access-Control-Allow-Origin', 'http://www.abc.com:8899')
  res.json({status: 200, resault: '我是CORS返回的结果'})
})

app.listen(port, function () {
  console.log('服务启于' + port)
  opn('http://www.abc.com:' + port)
})
