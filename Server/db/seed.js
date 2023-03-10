import 'dotenv/config'
import './connections.js'

import User from '../models/users.js'
import Post from '../models/posts.js'
import mongoose from 'mongoose'

await User.deleteMany()
await Post.deleteMany()
const myself = await User.create({
  username: "Timboslice",
  handle: "Palealmond"
})

await Post.insertMany([{
  text: "Ahh yes beans",
  date: new Date(),
  author: myself.id,
}])
await Post.insertMany([{
  text: "There were eggs that day",
  date: new Date(),
  author: myself.id,
}])
await Post.insertMany([{
  text: "Holy guacamole",
  date: new Date(),
  author: myself.id,
}])

const stephen = await User.create({
  username: "Stephen Decatur",
  handle: 'stvndctr',
})

await Post.create({
  text: 'Damn the torpedoes, full speed ahead',
  author: stephen._id,
  date: '2023-03-09T16:16:08.888Z',
})
const samuel = await User.create({
  username: "Samuel Nichols",
  handle: 'CommandantDaddy',
})

await Post.create({
  text: 'Yo I got this cool ass sword',
  author: samuel._id,
  date: '2023-03-09T16:16:08.888Z',
})




await mongoose.disconnect()