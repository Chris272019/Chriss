import { Link } from "react-router-dom"
import "./Blog.css"

function Blog() {
  return (
    <div className="blog">
      <div className="nav-container">
        <div className="back-button">
          <Link to="/">← Back</Link>
        </div>
        <nav className="blog-nav">
          <Link to="/blog/day1">Day 1</Link>
          <Link to="/blog/day2">Day 2</Link>
          <Link to="/blog/day3">Day 3</Link>
          <Link to="/blog/day4">Day 4</Link>
          <Link to="/blog/day5">Day 5</Link>
          <Link to="/blog/day6">Day 6</Link>
          <Link to="/blog/day7">Day 7</Link>
        </nav>
      </div>
      <div className="blog-content">
        <p>Welcome to the blog! Select a day to view its content.</p>
      </div>
    </div>
  )
}

export default Blog 