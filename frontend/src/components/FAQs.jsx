import { useState } from 'react'
import skillsyncLogo from '../assets/BGLogo.jpg'
import '../styles/FAQs.css'
import Footer from './Footer'

function FAQs({ onNavigate = () => {} }) {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const faqItems = [
    {
      question: 'What is SkillSync?',
      answer: 'SkillSync is a peer-to-peer learning platform that connects learners and experts through a community-driven marketplace. Our AI-powered matching algorithm helps you find the perfect learning partner based on skills, interests, and availability.'
    },
    {
      question: 'How do I create an account?',
      answer: 'Simply sign up with your email address, create a secure password, and fill out your profile. Add the skills you want to teach and learn, set your availability, and you\'re ready to start connecting with other learners.'
    },
    {
      question: 'How does the matching algorithm work?',
      answer: 'Our intelligent AI analyzes your skills, learning interests, availability, and location to suggest compatible learning partners. The system considers skill levels, mutual interests, and scheduling preferences to create optimal matches.'
    },
    {
      question: 'Is it safe to meet other users?',
      answer: 'Safety is our priority. All sessions take place in public partner cafés with other people present. We recommend verifying user profiles, checking endorsements, and meeting in well-populated venues. Report any suspicious activity immediately.'
    },
    {
      question: 'How are sessions scheduled?',
      answer: 'After matching with a learning partner, both parties can propose meeting times. Sessions must be confirmed at least 24 hours in advance. You can schedule sessions through your dashboard with your preferred partner.'
    },
    {
      question: 'What if I need to cancel a session?',
      answer: 'You can cancel sessions at least 24 hours in advance with no penalties. Late cancellations (within 24 hours) may result in credit forfeiture. No-shows without cancellation may temporarily suspend your account privileges.'
    },
    {
      question: 'What skills can I teach or learn?',
      answer: 'Any skill! From languages and music to coding and business, wellness and nutrition to cooking and art—if you\'re passionate about it, you can teach or learn it on SkillSync. The community decides what skills matter.'
    },
    {
      question: 'How do endorsements and badges work?',
      answer: 'After a session, learning partners can endorse each other\'s skills. Badges represent community endorsement of your expertise. More endorsements increase your credibility and help you attract more learning partners.'
    },
    {
      question: 'Is SkillSync free to use?',
      answer: 'SkillSync is free to join and connect with other learners. Session availability and premium features may vary by region. Check your local availability for pricing and subscription details.'
    },
    {
      question: 'How do I report inappropriate behavior?',
      answer: 'Use the report feature in the app or email us at skillsync.company@gmail.com with details of the incident. Include screenshots if available. We investigate all reports and take appropriate action, including account suspension if necessary.'
    },
    {
      question: 'Can I view my learning history?',
      answer: 'Yes! Your dashboard shows all past sessions, endorsements, and reviews. You can track your progress, see which skills you\'ve developed, and maintain a complete learning portfolio on your profile.'
    },
    {
      question: 'What if I have a dispute with another user?',
      answer: 'Our support team is here to help. Contact us at skillsync.company@gmail.com or use the in-app support chat. We work to resolve disputes fairly and protect both the learner and instructor in any conflict.'
    }
  ]

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="faqs-page-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src={skillsyncLogo} alt="SkillSync Logo" className="nav-logo-img" />
          <span>SkillSync</span>
        </div>

        {/* Navigation Buttons */}
        <div className="nav-buttons">
          <button className="nav-btn" onClick={() => onNavigate('about')}>About</button>
          <button className="nav-btn" onClick={() => onNavigate('vision')}>Vision</button>
          <button className="nav-btn" onClick={() => onNavigate('team')}>Team</button>
          <button className="nav-btn" onClick={() => onNavigate('contact')}>Contact</button>
          <button className="nav-btn active" onClick={() => onNavigate('faqs')}>FAQs</button>
          <button className="about-nav-home-btn" onClick={() => onNavigate('home')}>← Back to Home</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="faqs-hero">
        <div className="faqs-hero-content">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about SkillSync and how to get started</p>
        </div>
      </section>

      {/* FAQs Content */}
      <div className="faqs-main-content">
        <div className="faqs-list">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleExpand(index)}
                aria-expanded={expandedIndex === index}
              >
                <span className="faq-question-text">{item.question}</span>
                <span className={`faq-toggle-icon ${expandedIndex === index ? 'expanded' : ''}`}>
                  +
                </span>
              </button>
              {expandedIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faqs-contact-section">
          <h2>Can't find what you're looking for?</h2>
          <p>We're here to help! Reach out to our team</p>
          <div className="faqs-contact-info">
            <p><strong>Email:</strong> skillsync.company@gmail.com</p>
            <p><strong>Instagram:</strong> @skillsync.bh</p>
            <p><strong>TikTok:</strong> @skillsync.bh</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  )
}

export default FAQs
