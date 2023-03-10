// this will handle all the api requests
import api from './apiConfig.js'

export async function getPosts() {

  const response = await api.get('/post/')
  return response.data
}

export async function createPost(twut, username) {
  const res = await api.post('/post/', {
    username, twut
  })
  return res.data
}