import express from 'express'
import morgan from 'morgan'
import postRouter from './routes/posts.js'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/', postRouter)


app.listen(8080, () => {
  console.log("This bitch is running on http://localhost:8080");
})

