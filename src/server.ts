import express, { response } from 'express'
const app = express()

app.get('/', (req, resp) => {
  return resp.send('Hello')
})

app.listen(3333, () => console.log('🔥 Server started att http://localhost:3333'))