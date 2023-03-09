export default function Post({ id, text, handle, username }) {
  return (
    <div key={id}>{text}</div>
  )
}