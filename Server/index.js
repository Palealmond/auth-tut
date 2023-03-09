import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import postRouter from './routes/posts.js'

const PORT = process.env.PORT || 8080;

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/', postRouter)


app.listen(PORT, () => {
  console.log(`This bitch is running on http://localhost:${PORT}`);
})

