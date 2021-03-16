const express = require('express')
const axios = require('axios')

const app = express()
const port = process.env.PORT || 3080

app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  res.header('Cross-Origin-Resource-Policy', 'cross-origin')

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE')
    return res.status(200).json({})
  }
  // console.log('req:::', req.headers)
  // console.log('res:::', res)
  next()
})

app.post('/', (req, res) => {
  res.send('App works!!!')
})

app.post('/api/execute', (req, res) => {
  const url = 'https://api.jdoodle.com/v1/execute'
  try {
    axios
      .post(url, req.body, {
        headers: {
          'content-type': 'application/json'
        }
      })
      .then((response) => {
        res.send(response.data)
      })
      .catch((e) => {
        throw new Error(e)
      })
    // res.set('Content-Type', 'image/png')
  } catch (e) {
    res.status(404).send(e)
  }
})

// app.post('/', (req, res, next) => {
//   // Handle the post for this route
// })

app.listen(port, () => {
  console.log(`CORS-enabled web server listening on port ${port}`)
})
