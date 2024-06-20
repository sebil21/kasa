import '../styles/_tags.scss'

function Tag({ tags }) {
  return (
    <div className="tag-container">
      {tags.map((tag, index) => (
        <p key={index} className="tag-name">
          {tag}
        </p>
      ))}
    </div>
  )
}

export default Tag
