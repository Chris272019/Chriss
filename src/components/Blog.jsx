import { Outlet, useNavigate } from "react-router-dom"
import "./Blog.css"
import SoundButton from "./SoundButton"
import { playRandomSound } from "../utils/soundEffects"

function Blog() {
  const navigate = useNavigate()

  const handleLinkClick = (e) => {
    e.preventDefault()
    playRandomSound()
    navigate('/')
  }

  return (
    <div className="blog-container">
      <div className="nav-back">
        <SoundButton as="a" href="/" className="nav-link" onClick={handleLinkClick}>
          ← Back to Home
        </SoundButton>
      </div>
      <div className="blog-content-wrapper">
        <Outlet />
      </div>
    </div>
  )
}

export default Blog 