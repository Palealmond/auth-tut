import User from '../models/users.js'

export async function getProfile(req, res) {
  const handle = req.params.handle
  const user = await User.find({ handle })
  return res.json(user)
}