import '../styles/LegalPages.css'
import skillsyncLogo from '../assets/BGLogo.jpg'

function PrivacyPolicy({ onNavigate = () => {} }) {
  return (
    <div className="legal-container">
      {/* Navigation */}
      <nav className="legal-navbar">
        <div className="legal-nav-content">
          <div className="legal-nav-logo" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
            <img src={skillsyncLogo} alt="SkillSync Logo" className="legal-nav-logo-img" />
            <span>SkillSync</span>
          </div>
          <div className="legal-nav-buttons">
            <button className="legal-nav-btn" onClick={() => onNavigate('home')}>← Back to Home</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="legal-hero">
        <div className="legal-hero-content">
          <h1>Privacy Policy</h1>
          <p>Your privacy is important to us. Learn how we collect, use, and protect your data.</p>
          <p className="legal-last-updated">Last updated: February 28, 2026</p>
        </div>
      </section>

      {/* Content */}
      <div className="legal-content">
        <section className="legal-section">
          <h2>1. Introduction</h2>
          <p>
            SkillSync ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise process personal information in connection with our website and the services we provide.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Information We Collect</h2>
          
          <h3>2.1 Information You Provide Directly</h3>
          <ul className="legal-list">
            <li><strong>Profile Information:</strong> Name, email address, phone number, profile picture, bio, and location</li>
            <li><strong>Skills Data:</strong> Skills you can teach, skills you want to learn, expertise level, and experience</li>
            <li><strong>Availability:</strong> Preferred meeting times, days, and location preferences</li>
            <li><strong>Communication:</strong> Messages, feedback, reviews, and testimonials</li>
            <li><strong>Verification:</strong> Identity verification documents and badge applications</li>
          </ul>

          <h3>2.2 Information Collected Automatically</h3>
          <ul className="legal-list">
            <li><strong>Usage Data:</strong> Pages visited, time spent, clicks, searches, and feature interactions</li>
            <li><strong>Device Information:</strong> Device type, browser type, operating system, and IP address</li>
            <li><strong>Location Data:</strong> Approximate location for café matching purposes (with your permission)</li>
            <li><strong>Cookies & Tracking:</strong> Your preferences and login sessions</li>
          </ul>

          <h3>2.3 Information from Third Parties</h3>
          <ul className="legal-list">
            <li>Information from café partners about session details</li>
            <li>User endorsements and verification from other community members</li>
            <li>Analytics from third-party services</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul className="legal-list">
            <li><strong>Service Delivery:</strong> Matching you with compatible learning partners and scheduling sessions</li>
            <li><strong>AI Matching Algorithm:</strong> Analyzing skills, interests, and availability for personalized recommendations</li>
            <li><strong>Communication:</strong> Sending notifications, confirmations, and community updates</li>
            <li><strong>Safety & Security:</strong> Verifying identities, preventing fraud, and maintaining platform safety</li>
            <li><strong>Improvement:</strong> Analyzing usage patterns to improve features and user experience</li>
            <li><strong>Compliance:</strong> Meeting legal obligations and enforcing our Terms of Service</li>
            <li><strong>Marketing:</strong> Sending promotional content (you can opt-out anytime)</li>
            <li><strong>Analytics:</strong> Understanding how our platform is used</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. How We Share Your Information</h2>
          
          <h3>4.1 Information Shared with Other Users</h3>
          <p>
            Your profile is visible to other community members. The information shared includes:
          </p>
          <ul className="legal-list">
            <li>Public profile name and avatar</li>
            <li>Skills you can teach and skills you want to learn</li>
            <li>Endorsements and badges</li>
            <li>General location (city/area, not exact address)</li>
          </ul>

          <h3>4.2 Partner Café Information</h3>
          <p>
            We share limited information with partner cafés to facilitate your learning sessions:
          </p>
          <ul className="legal-list">
            <li>Your name and contact information (for session confirmation)</li>
            <li>Session time and expected attendees</li>
            <li>Special requirements or accessibility needs</li>
          </ul>

          <h3>4.3 Third-Party Services</h3>
          <p>
            We may share information with service providers who perform services on our behalf:
          </p>
          <ul className="legal-list">
            <li>Email and communication services</li>
            <li>Analytics platforms</li>
            <li>Payment processors</li>
            <li>Cloud storage providers</li>
          </ul>

          <h3>4.4 Legal Requirements</h3>
          <p>
            We may disclose your information when required by law or to protect our rights, privacy, safety, or property.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Data Security</h2>
          <p>
            We implement comprehensive security measures to protect your information:
          </p>
          <ul className="legal-list">
            <li>SSL/TLS encryption for data in transit</li>
            <li>Password hashing and secure authentication</li>
            <li>Regular security audits and updates</li>
            <li>Limited employee access to personal data</li>
            <li>Secure API endpoints</li>
          </ul>
          <p className="legal-note">
            <strong>Note:</strong> While we strive to protect your information, no security system is completely secure. We cannot guarantee absolute security of your data.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Your Rights & Choices</h2>
          <p>
            You have the following rights regarding your personal information:
          </p>
          <ul className="legal-list">
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Correction:</strong> Update or correct inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
            <li><strong>Portability:</strong> Download your data in a portable format</li>
            <li><strong>Opt-out:</strong> Stop receiving promotional communications</li>
            <li><strong>Restrict Processing:</strong> Limit how we use your data</li>
          </ul>
          <p>
            To exercise these rights, please contact us at <strong>skillsync.company@gmail.com</strong> with your request.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Retention of Information</h2>
          <p>
            We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. Information may be retained longer for:
          </p>
          <ul className="legal-list">
            <li>Fulfilling legal obligations</li>
            <li>Resolving disputes</li>
            <li>Enforcing agreements</li>
            <li>Analytics and safeguarding</li>
          </ul>
          <p>
            Upon account deletion, we remove most personal data within 30 days, though some information may be retained in anonymized form for analytics.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Cookies & Tracking Technologies</h2>
          <p>
            We use cookies and similar technologies to:
          </p>
          <ul className="legal-list">
            <li>Keep you logged in</li>
            <li>Remember your preferences</li>
            <li>Analyze usage patterns</li>
            <li>Enhance your experience</li>
          </ul>
          <p>
            Most browsers allow you to control cookies through settings. Disabling cookies may affect your ability to use certain features.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites and services. We are not responsible for their privacy practices. Please review their privacy policies before sharing any information.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Children's Privacy</h2>
          <p>
            SkillSync is not intended for children under 18 years of age. We do not knowingly collect information from minors. If we become aware that we have collected information from a child, we will delete it immediately.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. International Data Transfers</h2>
          <p>
            Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws that differ from your home country. By using SkillSync, you consent to such transfers.
          </p>
        </section>

        <section className="legal-section">
          <h2>12. Marketing Communications</h2>
          <p>
            We may send you promotional emails, announcements, and updates about new features. You can opt-out of marketing communications anytime by:
          </p>
          <ul className="legal-list">
            <li>Clicking "Unsubscribe" in any email</li>
            <li>Updating your notification preferences in your account</li>
            <li>Contacting us at skillsync.company@gmail.com</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>13. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or your personal information, please contact us:
          </p>
          <div className="legal-contact-box">
            <p><strong>Email:</strong> skillsync.company@gmail.com</p>
            <p><strong>Instagram:</strong> @skillsync.bh</p>
            <p><strong>TikTok:</strong> @skillsync.bh</p>
          </div>
        </section>

        <section className="legal-section">
          <h2>14. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Significant changes will be communicated via email or prominent notice on our website. Your continued use of SkillSync indicates your acceptance of the updated Privacy Policy.
          </p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy
