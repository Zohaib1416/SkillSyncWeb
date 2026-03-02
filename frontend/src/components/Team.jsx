import '../styles/About.css'
import '../styles/Team.css'
import skillsyncLogo from '../assets/BGLogo.jpg'
import groupPhoto from '../assets/GroupPhoto.jpeg'
import s1 from '../assets/S1.jpeg'
import s2 from '../assets/S2.jpeg'
import s3 from '../assets/S3.jpeg'
import s4 from '../assets/S4.jpeg'
import s5 from '../assets/S5.jpeg'
import s6 from '../assets/S6.jpeg'
import s7 from '../assets/S7.jpeg'
import s8 from '../assets/S8.jpeg'
import s9 from '../assets/S9.jpeg'
import s10 from '../assets/S10.jpeg'
import s11 from '../assets/S11.jpeg'
import s12 from '../assets/S12.jpeg'
import { useState, useEffect } from 'react'
import Footer from './Footer'

function Team({ onNavigate = () => {} }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [showDetailedView, setShowDetailedView] = useState(false)
  const [detailedPhotoIndex, setDetailedPhotoIndex] = useState(0)

  const teamMembers = [
    { name: 'Raamish Saeed', role: 'Chief Executive Officer', image: s1 },
    { name: 'Muhammad Zohaib', role: 'Chief Operating Officer', image: s2 },
    { name: 'Daniya Saiyed', role: 'Chief Financial Officer', image: s3 },
    { name: 'Tehzeeb Shabash', role: 'Product and Service Development', image: s4 },
    { name: 'Sara Abdulaziz', role: 'Human Resources', image: s5 },
    { name: 'Bayan Sadiq', role: 'Human Resources', image: s6 },
    { name: 'Najwa Riyadh', role: 'Finance Director', image: s7 },
    { name: 'Aaleeza Sajjad', role: 'Finance', image: s8 },
    { name: 'Zainub Firoz', role: 'Marketing Director', image: s9 },
    { name: 'Reem Muhammad', role: 'Marketing', image: s10 },
    { name: 'Judy Ramez', role: 'Sales Director', image: s11 },
    { name: 'Zahra Farooq', role: 'Sales', image: s12 },
  ]

  // Auto-rotate photos in the stack (every 2 seconds)
  useEffect(() => {
    if (!showDetailedView) {
      const interval = setInterval(() => {
        setCurrentPhotoIndex((prev) => (prev + 1) % teamMembers.length)
      }, 2000)

      return () => clearInterval(interval)
    }
  }, [showDetailedView, teamMembers.length])

  const openDetailedView = () => {
    setDetailedPhotoIndex(currentPhotoIndex)
    setShowDetailedView(true)
  }

  const closeDetailedView = () => {
    setShowDetailedView(false)
  }

  const nextPhoto = () => {
    setDetailedPhotoIndex((prev) => (prev + 1) % teamMembers.length)
  }

  const previousPhoto = () => {
    setDetailedPhotoIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  return (
    <div className="about-container team-container">
      <nav className="about-navbar">
        <div className="about-nav-content">
          <div className="about-nav-logo" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
            <img src={skillsyncLogo} alt="SkillSync Logo" className="about-nav-logo-img" />
            <span>SkillSync</span>
          </div>
          <div className="nav-buttons">
            <button className="nav-btn" onClick={() => onNavigate('about')}>About</button>
            <button className="nav-btn" onClick={() => onNavigate('vision')}>Vision</button>
            <button className="nav-btn" onClick={() => onNavigate('contact')}>Contact</button>
            <button className="nav-btn" onClick={() => onNavigate('faqs')}>FAQs</button>
            <button className="about-nav-home-btn" onClick={() => onNavigate('home')}>← Back to Home</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {!showDetailedView && (
        <div className="team-main-content">
          <section className="about-hero">
            <div className="about-hero-content">
              <h1>Meet Our Team</h1>
              <p>The passionate individuals driving SkillSync forward</p>
            </div>
          </section>

          {/* Group Photo Display */}
          <div className="team-group-display">
            <h2 className="team-section-title">The Team Behind the Vision</h2>
            <img src={groupPhoto} alt="SkillSync Team" className="team-group-display-image" />
          </div>

          {/* Photo Stack */}
          <div className="team-stack-container">
            <div className="team-stack" onClick={openDetailedView}>
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`team-stack-card ${index === currentPhotoIndex ? 'active' : ''} ${
                    index === (currentPhotoIndex - 1 + teamMembers.length) % teamMembers.length ? 'previous' : ''
                  }`}
                  style={{
                    zIndex: index === currentPhotoIndex ? 10 : 1,
                    opacity: index === currentPhotoIndex ? 1 : 0,
                  }}
                >
                  <img src={member.image} alt={member.name} className="team-stack-image" />
                </div>
              ))}
              <div className="team-stack-hint">Click to view details</div>
            </div>
          </div>
        </div>
      )}

      {/* Detailed View Modal */}
      {showDetailedView && (
        <div className="team-detailed-overlay" onClick={closeDetailedView}>
          <div className="team-detailed-content" onClick={(e) => e.stopPropagation()}>
            <button className="team-nav-btn team-nav-prev" onClick={previousPhoto}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="team-detailed-card">
              <img
                src={teamMembers[detailedPhotoIndex].image}
                alt={teamMembers[detailedPhotoIndex].name}
                className="team-detailed-image"
              />
            </div>

            <button className="team-nav-btn team-nav-next" onClick={nextPhoto}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="team-detailed-counter">
              {detailedPhotoIndex + 1} / {teamMembers.length}
            </div>
          </div>
        </div>
      )}

      {!showDetailedView && (
        <section className="about-cta">
          <h2>Join Our Mission</h2>
          <p>We're always looking for passionate individuals to grow with us</p>
        </section>
      )}

      {/* Footer */}
      {!showDetailedView && <Footer onNavigate={onNavigate} />}
    </div>
  )
}

export default Team
