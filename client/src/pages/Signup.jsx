import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <h1>Sign-her Up</h1>
      <form>
        <input type="text" />
        <input type="password" />
        <button>Signup</button>
      </form>
      <span>
        {'Already a twuutererererer? '}
        <Link to="/auth/signin">{'Go to da Signin '}</Link>
        perhaps.
      </span>
    </div>
  )
}