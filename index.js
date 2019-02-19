let express = require('express')
let app = express()
let port = 8899

app.use('/', express.static('./'))

app.listen(port, function () {
  console.log('服务启于' + port)
})

let app1 = express()

app1.use('/', express.static('./'))

app1.listen(8800, function () {
  console.log('服务启于' + 8800)
})
