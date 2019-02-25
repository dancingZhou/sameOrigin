let express = require('express')
let app = express()
let port = 8899

app.use('/', express.static('./'))

app.listen(port, function () {
  console.log('服务启于' + port)
})
