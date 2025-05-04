import { Outlet, Link } from "react-router-dom"
import "./Blog.css"

function Blog() {
  return (
    <div className="blog-container">
      <nav className="blog-navbar">
        <div className="nav-back">
          <Link to="/" className="nav-link">← Back to Home</Link>
        </div>
        <div className="nav-days">
          <Link to="/blog" className="nav-link">Home</Link>
          <Link to="/blog/day1" className="nav-link">Day 1</Link>
          <Link to="/blog/day2" className="nav-link">Day 2</Link>
          <Link to="/blog/day3" className="nav-link">Day 3</Link>
          <Link to="/blog/day4" className="nav-link">Day 4</Link>
          <Link to="/blog/day5" className="nav-link">Day 5</Link>
          <Link to="/blog/day6" className="nav-link">Day 6</Link>
          <Link to="/blog/day7" className="nav-link">Day 7</Link>
        </div>
      </nav>
      <div className="blog-content-wrapper">
        <Outlet />
      </div>
    </div>
  )
}

export default Blog 