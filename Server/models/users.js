import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true,
  },
  handle: String,
})

export default mongoose.model('User', userSchema)
