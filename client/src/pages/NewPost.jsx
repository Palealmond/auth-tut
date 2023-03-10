import { useState } from 'react'
import { createPost } from '../api/posts'

export default function NewPost() {
  const [username, setUsername] = useState('')
  const [twut, setTwut] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const data = await createPost(twut, username)
    console.log(data);
  }



  return (
    <div>
      <h1>New Twut</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" value={username}
            onChange={(e) => setUsername(e.target.value)} />
        </div>
        <label>Twut</label>
        <textarea
          value={twut} onChange={(e) => setTwut(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}