import express from "express";

const app = express()

app.get('/', (req, res) => {
  return res.json({ nice: true })
})

app.listen(8080, () => {
  console.log("This bitch is running on port 8080");
})

