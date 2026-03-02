import '../styles/About.css'
import '../styles/Contact.css'
import skillsyncLogo from '../assets/BGLogo.jpg'
import { useState } from 'react'
import Footer from './Footer'

function Contact({ onNavigate = () => {} }) {
  const [expandedSectionId, setExpandedSectionId] = useState(null)

  const toggleSection = (sectionId) => {
    if (expandedSectionId === sectionId) {
      setExpandedSectionId(null)
    } else {
      setExpandedSectionId(sectionId)
    }
  }

  const sections = [
    {
      id: 'instagram',
      title: 'Instagram',
      icon: '📸',
      content: (
        <>
          <h2>Follow Us on Instagram</h2>
          <p className="about-section-subtitle">
            Stay updated with the latest news, stories, and community highlights
          </p>
          <div className="contact-card-detail">
            <div className="contact-icon-large">📸</div>
            <h3>@skillsync.bh</h3>
            <p>Follow our Instagram profile for daily tips, success stories, and community events.</p>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.instagram.com/skillsync.bh?igsh=MXdmZTdqbzZjbG5wbA=="
              alt="Instagram QR Code"
              className="contact-qr-code"
            />
            <a
              href="https://www.instagram.com/skillsync.bh?igsh=MXdmZTdqbzZjbG5wbA=="
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              Visit Instagram Profile
            </a>
          </div>
        </>
      ),
    },
    {
      id: 'tiktok',
      title: 'TikTok',
      icon: '🎵',
      content: (
        <>
          <h2>Follow Us on TikTok</h2>
          <p className="about-section-subtitle">
            Discover engaging short-form content about skill-sharing and learning
          </p>
          <div className="contact-card-detail">
            <div className="contact-icon-large">🎵</div>
            <h3>@skillsync.bh</h3>
            <p>Watch our TikTok videos showcasing real stories from our community and learning tips.</p>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.tiktok.com/@skillsync.bh?_r=1&_t=ZS-94HVcmQ6jWa"
              alt="TikTok QR Code"
              className="contact-qr-code"
            />
            <a
              href="https://www.tiktok.com/@skillsync.bh?_r=1&_t=ZS-94HVcmQ6jWa"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              Visit TikTok Profile
            </a>
          </div>
        </>
      ),
    },
    {
      id: 'gmail',
      title: 'Email',
      icon: '✉️',
      content: (
        <>
          <h2>Contact Us via Email</h2>
          <p className="about-section-subtitle">
            Reach out to us directly with inquiries, feedback, or partnership opportunities
          </p>
          <div className="contact-card-detail">
            <div className="contact-icon-large">✉️</div>
            <h3>skillsync.company@gmail.com</h3>
            <p>Send us an email for business inquiries, customer support, or any questions about SkillSync.</p>
            <a
              href="mailto:skillsync.company@gmail.com"
              className="contact-btn"
            >
              Send Email
            </a>
          </div>
        </>
      ),
    },
  ]

  return (
    <div className="about-container">
      <nav className="about-navbar">
        <div className="about-nav-content">
          <div className="about-nav-logo" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
            <img src={skillsyncLogo} alt="SkillSync Logo" className="about-nav-logo-img" />
            <span>SkillSync</span>
          </div>
          <div className="nav-buttons">
            <button className="nav-btn" onClick={() => onNavigate('about')}>About</button>
            <button className="nav-btn" onClick={() => onNavigate('vision')}>Vision</button>
            <button className="nav-btn" onClick={() => onNavigate('team')}>Team</button>
            <button className="nav-btn" onClick={() => onNavigate('faqs')}>FAQs</button>
            <button className="about-nav-home-btn" onClick={() => onNavigate('home')}>← Back to Home</button>
          </div>
        </div>
      </nav>

      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Get in Touch</h1>
          <p>Connect with the SkillSync community</p>
        </div>
      </section>

      <section className="about-accordion-container">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="about-accordion-card contact-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="contact-card-icon">{section.icon}</div>
            <h3 className="about-card-heading">{section.title}</h3>
            <button
              className="about-view-more-btn"
              onClick={() => toggleSection(section.id)}
            >
              View More
            </button>
          </div>
        ))}
      </section>

      {expandedSectionId && (
        <div className="about-modal-overlay" onClick={() => setExpandedSectionId(null)}>
          <div className="about-modal-content" onClick={(event) => event.stopPropagation()}>
            <button
              className="about-modal-close"
              onClick={() => setExpandedSectionId(null)}
            >
              ✕
            </button>
            <div className="about-modal-body">
              {sections.find((section) => section.id === expandedSectionId)?.content}
            </div>
            <button
              className="about-modal-close-btn"
              onClick={() => setExpandedSectionId(null)}
            >
              View Less
            </button>
          </div>
        </div>
      )}

      <section className="about-cta">
        <h2>We'd Love to Hear From You</h2>
        <p>Reach out through any of our channels. We're here to help and collaborate.</p>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  )
}

export default Contact
