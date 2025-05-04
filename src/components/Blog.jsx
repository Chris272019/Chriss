import { Outlet } from "react-router-dom"
import "./Blog.css"

function Blog() {
  return (
    <div className="blog-container">
      <Outlet />
    </div>
  )
}

export default Blog 