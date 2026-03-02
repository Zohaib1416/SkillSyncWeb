import '../styles/About.css'
import skillsyncLogo from '../assets/BGLogo.jpg'
import { useState } from 'react'
import Footer from './Footer'

function About({ onNavigate = () => {} }) {
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
      id: 'problem',
      title: 'The Problem',
      label: 'The Problem',
      content: (
        <>
          <h2>Learning That's Social, Practical, and Accessible</h2>
          <p className="about-section-subtitle">
            Why the traditional education model is failing to meet the agile needs of today's learners and communities.
          </p>
          <div className="about-problems-grid">
            <div className="problem-card">
              <div className="problem-icon">💰</div>
              <h3>High Cost Barriers</h3>
              <p>Formal courses and degrees often come with prohibitive price tags, limiting access to quality upskilling for many aspiring learners.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">🎓</div>
              <h3>Isolation</h3>
              <p>Self-paced videos lack the community, accountability, and real-time feedback needed for true mastery and motivation.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">💎</div>
              <h3>Hidden Expertise</h3>
              <p>Valuable skills exist within teams and local communities but lack a trusted, organized channel to be discovered and shared.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">📚</div>
              <h3>Siloed Growth</h3>
              <p>One-size-fits-all curriculums fail to address the specific, cross-functional needs of modern diverse teams and individuals.</p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'what-is',
      title: 'What is SkillSync?',
      content: (
        <>
          <h2>What is SkillSync?</h2>
          <p className="about-section-subtitle">
            An AI-powered skill-sharing platform where people:
          </p>
          <div className="about-features-grid">
            <div className="feature-card">
              <div className="feature-icon">👤</div>
              <h3>Create Profiles</h3>
              <p>Build your digital identity showcasing your expertise and learning goals.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📢</div>
              <h3>Teach Skills</h3>
              <p>List the skills you can share with others in your community.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3>Learn Skills</h3>
              <p>Discover new competencies you want to acquire from peers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3>Set Availability</h3>
              <p>Add your preferred location, days, and times for sessions.</p>
            </div>
          </div>
          <div className="about-highlight-box">
            <div className="highlight-icon">⚙️</div>
            <h3>Smart AI Matching</h3>
            <p>Our AI automatically matches users and schedules in-person meetups at nearby cafés or online sessions based on compatibility.</p>
          </div>
        </>
      ),
    },
    {
      id: 'how-works',
      title: 'How SkillSync Works',
      content: (
        <>
          <h2>How SkillSync Works</h2>
          <p className="about-section-subtitle">
            A seamless journey from creating your profile to mastering new skills, powered by smart connections
          </p>
          <div className="about-steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <div className="step-icon">👤</div>
              <h3>Create Profile</h3>
              <p>Set up your digital learner identity. List skills you can teach and skills you want to learn.</p>
              <div className="step-features">
                <span className="feature-tag">Goals</span>
                <span className="feature-tag">Level</span>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-icon">⚙️</div>
              <h3>Smart Match</h3>
              <p>Our algorithm finds your perfect peer based on mutual interests, experience gaps, and time zones.</p>
              <div className="step-features">
                <span className="feature-tag">AI Pairing</span>
                <span className="feature-tag">Interests</span>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-icon">💬</div>
              <h3>Connect & Sync</h3>
              <p>Chat instantly to break the ice. Schedule 1:1 sessions or small workshops with integrated calendar sync.</p>
              <div className="step-features">
                <span className="feature-tag">Chat</span>
                <span className="feature-tag">Video</span>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">04</div>
              <div className="step-icon">🔄</div>
              <h3>Swap & Grow</h3>
              <p>Learn, teach, and repeat. Track your progress, earn endorsements, and build your reputation score.</p>
              <div className="step-features">
                <span className="feature-tag">Feedback</span>
                <span className="feature-tag">Badges</span>
              </div>
            </div>
          </div>
          <div className="about-security-note">
            🛡️ Secure verification and community guidelines apply to all profiles
          </div>
        </>
      ),
    },
    {
      id: 'key-features',
      title: 'Key Features',
      content: (
        <>
          <h2>Key Features</h2>
          <p className="about-section-subtitle">
            Everything you need to discover, connect, and grow within your local skill-sharing community.
          </p>
          <div className="about-features-showcase">
            <div className="feature-showcase-card">
              <div className="feature-showcase-icon">🤖</div>
              <h3>AI Skill Matching</h3>
              <p>Intelligent algorithms analyze your goals and expertise to suggest the most compatible learning partners in your vicinity.</p>
              <div className="feature-bar"></div>
            </div>
            <div className="feature-showcase-card">
              <div className="feature-showcase-icon">📍</div>
              <h3>Location-Based Suggestions</h3>
              <p>Find the perfect neutral ground. We recommend quiet, partner-cafés optimized for learning discussions.</p>
              <div className="feature-bar"></div>
            </div>
            <div className="feature-showcase-card">
              <div className="feature-showcase-icon">⏰</div>
              <h3>Smart Scheduling</h3>
              <p>Forget the back-and-forth. Our system syncs calendars to find overlapping free time for seamless meetups.</p>
              <div className="feature-bar"></div>
            </div>
            <div className="feature-showcase-card">
              <div className="feature-showcase-icon">👥</div>
              <h3>In-Person Peer Learning</h3>
              <p>Experience the impact of face-to-face interaction. Learn faster with real-time feedback and human connection.</p>
              <div className="feature-bar"></div>
            </div>
            <div className="feature-showcase-card">
              <div className="feature-showcase-icon">🔒</div>
              <h3>Safe Environment</h3>
              <p>Verified profiles, community reviews, and safe public meeting spots ensure a secure learning experience for everyone.</p>
              <div className="feature-bar"></div>
            </div>
            <div className="feature-showcase-card">
              <div className="feature-showcase-icon">🔔</div>
              <h3>Smart Notifications</h3>
              <p>Never miss a session. Get timely reminders, match alerts, and follow-up prompts to keep your learning on track.</p>
              <div className="feature-bar"></div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'who-uses',
      title: 'Who can use SkillSync?',
      content: (
        <>
          <h2>Who can use SkillSync?</h2>
          <p className="about-section-subtitle">
            A diverse ecosystem of learners and mentors connecting across every stage of life
          </p>
          <div className="about-users-grid">
            <div className="user-card">
              <div className="user-icon">🎓</div>
              <h3>Students & Youth</h3>
              <p>Seeking practical skills to supplement academic theory and peer guidance for career direction.</p>
              <div className="user-label">Growth</div>
            </div>
            <div className="user-card">
              <div className="user-icon">💼</div>
              <h3>Job Seekers & Freelancers</h3>
              <p>Building portfolios, upskilling for new gigs, and networking for employment opportunities.</p>
              <div className="user-label">Career</div>
            </div>
            <div className="user-card">
              <div className="user-icon">👔</div>
              <h3>Professionals & Mentors</h3>
              <p>Sharing expertise to give back, while expanding professional networks and soft skills.</p>
              <div className="user-label">Network</div>
            </div>
            <div className="user-card">
              <div className="user-icon">🎨</div>
              <h3>Hobbyists & Creatives</h3>
              <p>Exploring passions outside work, from photography to pottery, in a casual setting.</p>
              <div className="user-label">Passion</div>
            </div>
            <div className="user-card">
              <div className="user-icon">📖</div>
              <h3>Lifelong Learners</h3>
              <p>Curious minds of all ages dedicated to continuous self-improvement and discovery.</p>
              <div className="user-label">Discovery</div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'why-cafes',
      title: 'Why Cafés?',
      content: (
        <>
          <h2>Why Cafés?</h2>
          <p className="about-section-subtitle">The Perfect Learning Environment</p>
          <div className="about-cafes-grid">
            <div className="cafe-card">
              <div className="cafe-icon">☕</div>
              <h3>Comfortable Spaces</h3>
              <p>Relaxed, neutral environments that lower anxiety and foster natural conversation, unlike sterile classrooms or offices.</p>
              <div className="cafe-bar"></div>
            </div>
            <div className="cafe-card">
              <div className="cafe-icon">🏪</div>
              <h3>Support Local</h3>
              <p>Directly contribute to the local economy by turning off-peak quiet hours into productive learning sessions for the community.</p>
              <div className="cafe-bar"></div>
            </div>
            <div className="cafe-card">
              <div className="cafe-icon">💬</div>
              <h3>Face-to-Face Interaction</h3>
              <p>Meaningful human connection that builds trust, allows for nuanced non-verbal communication, and deeper understanding.</p>
              <div className="cafe-bar"></div>
            </div>
            <div className="cafe-card">
              <div className="cafe-icon">👥</div>
              <h3>Reduces Isolation</h3>
              <p>Combat the loneliness of remote work and self-study by physically connecting with neighbors and peers in your area.</p>
              <div className="cafe-bar"></div>
            </div>
          </div>
        </>
      ),
    },
  ]

  return (
    <div className="about-container">
      {/* Navigation */}
      <nav className="about-navbar">
        <div className="about-nav-content">
          <div className="about-nav-logo" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
            <img src={skillsyncLogo} alt="SkillSync Logo" className="about-nav-logo-img" />
            <span>SkillSync</span>
          </div>
          <div className="nav-buttons">
            <button className="nav-btn" onClick={() => onNavigate('vision')}>Vision</button>
            <button className="nav-btn" onClick={() => onNavigate('team')}>Team</button>
            <button className="nav-btn" onClick={() => onNavigate('contact')}>Contact</button>
            <button className="nav-btn" onClick={() => onNavigate('faqs')}>FAQs</button>
            <button className="about-nav-home-btn" onClick={() => onNavigate('home')}>← Back to Home</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About SkillSync</h1>
          <p>Transforming how the world learns and shares skills</p>
        </div>
      </section>

      {/* Grid Sections */}
      <section className="about-accordion-container">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="about-accordion-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
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

      {/* Modal Overlay */}
      {expandedSectionId && (
        <div className="about-modal-overlay" onClick={() => setExpandedSectionId(null)}>
          <div className="about-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="about-modal-close"
              onClick={() => setExpandedSectionId(null)}
            >
              ✕
            </button>
            <div className="about-modal-body">
              {sections.find((s) => s.id === expandedSectionId)?.content}
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

      {/* Call to Action Section */}
      <section className="about-cta">
        <h2>Ready to Start Learning?</h2>
        <p>Join a growing community of learners and mentors transforming skill-sharing</p>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  )
}

export default About
