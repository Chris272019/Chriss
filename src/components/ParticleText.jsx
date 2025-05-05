"use client"

import { useRef, useEffect, useState } from "react"
import "./ParticleText.css"

export default function ParticleText() {
  const canvasRef = useRef(null)
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const isTouchingRef = useRef(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      setIsMobile(canvas.offsetWidth < 768); // Set mobile breakpoint
    }

    updateCanvasSize()

    let particles = []
    let textImageData = null

    function createTextImage() {
      if (!ctx || !canvas) return 0

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "white"
      ctx.save()

      // Calculate text size and position
      const fontSize = isMobile
        ? Math.max(48, Math.floor(canvas.width * 0.13))
        : Math.max(72, Math.floor(canvas.width * 0.18));
      const lineHeight = fontSize * 1.2

      ctx.font = `900 ${fontSize}px sans-serif`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      // Draw "Chris" on first line
      ctx.fillText("Chris", canvas.width / 2, canvas.height / 2 - lineHeight / 2)
      // Draw "Backend Developer" on second line
      ctx.font = `700 ${fontSize * 0.8}px sans-serif`
      ctx.fillText("Backend Developer", canvas.width / 2, canvas.height / 2 + lineHeight / 2)

      ctx.restore()

      textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      return fontSize / 48 // Scale factor
    }

    function createParticle(scale, fontSize = 72) {
      if (!ctx || !canvas || !textImageData) return null

      const data = textImageData.data

      for (let attempt = 0; attempt < 100; attempt++) {
        const x = Math.floor(Math.random() * canvas.width)
        const y = Math.floor(Math.random() * canvas.height)

        if (data[(y * canvas.width + x) * 4 + 3] > 128) {
          // Determine if the particle is from "Chris" or "Backend Developer"
          // based on its vertical position relative to canvas center
          const isChris = y < canvas.height / 2

          // Particle size scales with fontSize for responsiveness
          const minSize = fontSize * 0.012;
          const maxSize = fontSize * 0.025;
          return {
            x: x,
            y: y,
            baseX: x,
            baseY: y,
            size: Math.random() * (maxSize - minSize) + minSize,
            color: "white",
            scatteredColor: isChris ? "#4169E1" : "#32CD32", // Royal Blue for Chris, Lime Green for Backend Developer
            isChris: isChris,
            life: Math.random() * 100 + 50,
          }
        }
      }

      return null
    }

    function createInitialParticles(scale, fontSize) {
      const baseParticleCount = 15000 // Much higher density for clarity
      const particleCount = Math.floor(baseParticleCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080)))
      for (let i = 0; i < particleCount; i++) {
        const particle = createParticle(scale, fontSize)
        if (particle) particles.push(particle)
      }
    }

    let animationFrameId

    function animate(scale) {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "transparent"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const { x: mouseX, y: mouseY } = mousePositionRef.current
      const maxDistance = 140
      // Use the mouse position directly for the repel effect and circle
      const effectX = mouseX;
      const effectY = mouseY;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const dx = effectX - p.x
        const dy = effectY - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance && (isTouchingRef.current || !("ontouchstart" in window))) {
          const force = (maxDistance - distance) / maxDistance
          const angle = Math.atan2(dy, dx)
          const moveX = Math.cos(angle) * force * 60
          const moveY = Math.sin(angle) * force * 60
          p.x = p.baseX - moveX
          p.y = p.baseY - moveY

          ctx.fillStyle = p.scatteredColor
        } else {
          p.x += (p.baseX - p.x) * 0.1
          p.y += (p.baseY - p.y) * 0.1
          ctx.fillStyle = "white"
        }

        ctx.fillRect(p.x, p.y, p.size, p.size)

        p.life--
        if (p.life <= 0) {
          const newParticle = createParticle(scale)
          if (newParticle) {
            particles[i] = newParticle
          } else {
            particles.splice(i, 1)
            i--
          }
        }
      }

      const baseParticleCount = 7000
      const targetParticleCount = Math.floor(
        baseParticleCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080)),
      )
      while (particles.length < targetParticleCount) {
        const newParticle = createParticle(scale)
        if (newParticle) particles.push(newParticle)
      }

      animationFrameId = requestAnimationFrame(() => animate(scale))
    }

    const scale = createTextImage()
    // Pass fontSize to createInitialParticles for responsive particle size
    const fontSize = isMobile
      ? Math.max(48, Math.floor(canvas.width * 0.13))
      : Math.max(72, Math.floor(canvas.width * 0.18));
    createInitialParticles(scale, fontSize)
    animate(scale)

    const handleResize = () => {
      updateCanvasSize()
      const newScale = createTextImage()
      // Pass fontSize to createInitialParticles for responsive particle size
      const fontSize = isMobile
        ? Math.max(48, Math.floor(canvas.width * 0.13))
        : Math.max(72, Math.floor(canvas.width * 0.18));
      particles = []
      createInitialParticles(newScale, fontSize)
    }

    const handleMove = (x, y) => {
      mousePositionRef.current = { x, y }
    }

    const handleMouseMove = (e) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      handleMove(x, y);
    }

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        e.preventDefault()
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;
        handleMove(x, y);
      }
    }

    const handleTouchStart = () => {
      isTouchingRef.current = true
    }

    const handleTouchEnd = () => {
      isTouchingRef.current = false
      mousePositionRef.current = { x: 0, y: 0 }
    }

    const handleMouseLeave = () => {
      if (!("ontouchstart" in window)) {
        mousePositionRef.current = { x: 0, y: 0 }
      }
    }

    window.addEventListener("resize", handleResize)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false })
    canvas.addEventListener("mouseleave", handleMouseLeave)
    canvas.addEventListener("touchstart", handleTouchStart)
    canvas.addEventListener("touchend", handleTouchEnd)

    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("touchmove", handleTouchMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      canvas.removeEventListener("touchstart", handleTouchStart)
      canvas.removeEventListener("touchend", handleTouchEnd)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile])

  return (
    <div className="particle-text-container">
      <canvas
        ref={canvasRef}
        className="particle-canvas"
        aria-label="Interactive particle effect with Chris Backend Developer text"
      />
    </div>
  )
} 