import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div>
      <h1>Sign and/or Log In!</h1>
      <form>
        <input type="text" />
        <input type="password" />
        <button>Signin</button>
      </form>
      <span>
        {'Not a twuutererererer? '}
        <Link to="/auth/signin">{'Go to da Signup '}</Link>
        if you would.
      </span>
    </div>
  )
}