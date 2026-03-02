import { useEffect, useState } from 'react'
import skillsyncLogo from '../assets/logo.png'
import '../styles/Splash.css'

function Splash({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(onComplete, 800) // Wait for fade out animation (0.8s)
    }, 3000) // Show splash for 3 seconds

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className={`splash-container ${fadeOut ? 'fade-out' : ''}`}>
      <div className="splash-content">
        <div className="logo-container">
          <img src={skillsyncLogo} alt="SkillSync Logo" className="logo-image" />
        </div>

        <h1 className="splash-title">SKILLSYNC</h1>
        <p className="splash-subtitle">CONNECT. LEARN. EXCHANGE.</p>

        {/* Animated dots */}
        <div className="loading-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  )
}

export default Splash
