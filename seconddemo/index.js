const express = require('express')
const logger = require("./middleware/logger")
const app = express()
const port = 3000
const apiV1todosrouter = require("./routers/api/v1/todos")

app.get('/', (req, res) =>
  res.send('Hello World!')
)

app.use("/api/v1/todos", apiV1todosrouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})