import '../styles/LegalPages.css'
import skillsyncLogo from '../assets/BGLogo.jpg'

function TermsOfService({ onNavigate = () => {} }) {
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
          <h1>Terms of Service</h1>
          <p>Please read these terms carefully before using SkillSync. By accessing our platform, you agree to be bound by these terms.</p>
          <p className="legal-last-updated">Last updated: February 28, 2026</p>
        </div>
      </section>

      {/* Content */}
      <div className="legal-content">
        <section className="legal-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using SkillSync, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. User Eligibility</h2>
          <ul className="legal-list">
            <li>You must be at least 18 years old to use SkillSync</li>
            <li>You must provide accurate, complete, and current information</li>
            <li>You are responsible for maintaining the confidentiality of your password</li>
            <li>You agree to accept responsibility for all activities under your account</li>
            <li>SkillSync is available in select regions; check eligibility in your location</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. Account Registration</h2>
          <p>
            When creating an account, you agree to:
          </p>
          <ul className="legal-list">
            <li>Provide truthful and complete information</li>
            <li>Keep your password secure and not share it with others</li>
            <li>Immediately notify us of any unauthorized account access</li>
            <li>Verify any skills or credentials you claim to possess</li>
            <li>Submit to identity verification if requested</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. User Responsibilities & Conduct</h2>
          <p>
            You agree NOT to:
          </p>
          <ul className="legal-list">
            <li><strong>Harassment or Abuse:</strong> Harass, intimidate, threaten, or discriminate against other users</li>
            <li><strong>False Information:</strong> Provide fraudulent skills, certifications, or claims</li>
            <li><strong>Illegal Activity:</strong> Engage in any illegal or unlawful activity on the platform</li>
            <li><strong>Spam or Scams:</strong> Send spam, phishing, or scam messages to other users</li>
            <li><strong>Unauthorized Access:</strong> Attempt to gain unauthorized access to the platform</li>
            <li><strong>System Abuse:</strong> Disrupt or interfere with platform infrastructure</li>
            <li><strong>NSFW Content:</strong> Share inappropriate, explicit, or adult content</li>
            <li><strong>Commercial Exploitation:</strong> Use the platform for unauthorized commercial purposes</li>
            <li><strong>Intellectual Property Violation:</strong> Infringe on intellectual property rights</li>
            <li><strong>Impersonation:</strong> Pretend to be someone else or misrepresent your identity</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>5. Skill Verification & Badges</h2>
          <p>
            Skills and endorsements are community-based. We do not guarantee accuracy or legitimacy of claimed skills.
          </p>
          <ul className="legal-list">
            <li>Skills are self-reported and may be endorsed by other users</li>
            <li>Badges indicate community endorsement, not official certification</li>
            <li>False skill claims may result in account suspension or removal</li>
            <li>Users rely on peer reviews; SkillSync is not responsible for skill quality</li>
            <li>You are responsible for accurately representing your expertise</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>6. Session Scheduling & Cancellation</h2>
          <ul className="legal-list">
            <li><strong>Booking:</strong> Sessions must be confirmed by both parties at least 24 hours in advance</li>
            <li><strong>Location:</strong> Sessions must take place in public venues (partner cafés) for safety</li>
            <li><strong>Cancellation:</strong> Cancel sessions at least 24 hours in advance for no penalty</li>
            <li><strong>Late Cancellation:</strong> Cancellations within 24 hours may result in penalties or credit forfeiture</li>
            <li><strong>No-Show:</strong> Failing to show up without cancellation may suspend your account privileges</li>
            <li><strong>Rescheduling:</strong> Both parties must agree to reschedule sessions</li>
            <li><strong>Refunds:</strong> Credits are non-refundable but can be used for future sessions</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>7. Safety & Liability</h2>
          <p className="legal-warning">
            <strong>⚠️ Important:</strong> SkillSync facilitates connections but is NOT responsible for:
          </p>
          <ul className="legal-list">
            <li>The quality, safety, or legality of skills being taught</li>
            <li>The accuracy or truthfulness of information provided by users</li>
            <li>Personal safety during in-person meetings</li>
            <li>Disputes, injuries, or harm that occur during or after sessions</li>
            <li>Loss of data or service interruptions</li>
            <li>Third-party action or café negligence</li>
            <li>Any damages resulting from meeting other users</li>
          </ul>
          <p>
            <strong>Safety Reminder:</strong> Always meet in public venues with other people present. Verify user authenticity before meetings. Report suspicious activity immediately.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Reporting & Enforcement</h2>
          <p>
            If you encounter harmful behavior, fraud, or policy violations:
          </p>
          <ul className="legal-list">
            <li>Report the user or content through the in-app reporting feature</li>
            <li>Provide detailed descriptions of the incident</li>
            <li>Include screenshots or evidence if available</li>
            <li>Email us at skillsync.company@gmail.com</li>
          </ul>
          <p>
            We will investigate reports and may take action including warnings, temporary suspension, or permanent ban.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Prohibited Content & Activities</h2>
          <p>
            The following are prohibited on SkillSync:
          </p>
          <ul className="legal-list">
            <li>Hate speech, discrimination, or offensive language</li>
            <li>Violence, threats, or intimidation</li>
            <li>Sexual harassment or inappropriate content</li>
            <li>Illegal drugs, weapons, or dangerous substances</li>
            <li>Pornographic or adult content</li>
            <li>Misinformation or conspiracy theories</li>
            <li>Solicitation of funds or crypto schemes</li>
            <li>Fundraising without authorization</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>10. Intellectual Property Rights</h2>
          <ul className="legal-list">
            <li><strong>Your Content:</strong> You retain ownership of content you upload</li>
            <li><strong>SkillSync License:</strong> By using SkillSync, you grant us a license to use your profile and content for platform operation and improvement</li>
            <li><strong>Platform IP:</strong> SkillSync content, logos, and features are our intellectual property</li>
            <li><strong>No Unauthorized Use:</strong> You cannot reproduce, distribute, or modify our content without permission</li>
            <li><strong>Third-Party IP:</strong> Do not share copyrighted material without permission</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>11. Limitation of Liability</h2>
          <p className="legal-warning">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, SKILLSYNC AND ITS DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR USE.
          </p>
        </section>

        <section className="legal-section">
          <h2>12. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless SkillSync from any claims, damages, or expenses arising from:
          </p>
          <ul className="legal-list">
            <li>Your violation of these Terms</li>
            <li>Your use of the platform</li>
            <li>Content you provide or post</li>
            <li>Your interactions with other users</li>
            <li>Infringement of intellectual property rights</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>13. Suspension & Termination</h2>
          <p>
            SkillSync may suspend or terminate your account if:
          </p>
          <ul className="legal-list">
            <li>You violate these Terms of Service</li>
            <li>You engage in harmful or illegal conduct</li>
            <li>You provide false or misleading information</li>
            <li>Your account is inactive for extended periods</li>
            <li>We receive multiple complaints about your conduct</li>
            <li>We determine it's necessary for platform safety</li>
          </ul>
          <p>
            Upon termination, your data may be retained as permitted by law, but you will lose access to the platform.
          </p>
        </section>

        <section className="legal-section">
          <h2>14. Disclaimers</h2>
          <p className="legal-warning">
            SKILLSYNC IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <ul className="legal-list">
            <li>No guaranteed matching quality</li>
            <li>No guaranteed session outcomes</li>
            <li>No guarantees about uninterrupted service</li>
            <li>No guarantees the platform will meet your needs</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>15. Third-Party Services</h2>
          <p>
            SkillSync integrates with café partners and third-party services. We are not responsible for their practices, policies, or content. Use such services at your own risk.
          </p>
        </section>

        <section className="legal-section">
          <h2>16. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting. Significant changes will be communicated via email. Your continued use indicates acceptance of updated terms.
          </p>
        </section>

        <section className="legal-section">
          <h2>17. Governing Law</h2>
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of Bahrain, without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="legal-section">
          <h2>18. Dispute Resolution</h2>
          <p>
            Any disputes arising from these Terms shall be resolved through:
          </p>
          <ul className="legal-list">
            <li>Good faith negotiation between parties</li>
            <li>Mediation if negotiation fails</li>
            <li>Arbitration as a final resolution method</li>
          </ul>
          <p>
            You agree to waive your right to a jury trial or class action lawsuit.
          </p>
        </section>

        <section className="legal-section">
          <h2>19. Severability</h2>
          <p>
            If any provision of these Terms is found to be invalid or unenforceable, that provision shall be severed, and the remaining provisions shall remain in effect.
          </p>
        </section>

        <section className="legal-section">
          <h2>20. Entire Agreement</h2>
          <p>
            These Terms of Service, along with our Privacy Policy, constitute the entire agreement between you and SkillSync regarding your use of the platform and supersede all prior agreements and understandings.
          </p>
        </section>

        <section className="legal-section">
          <h2>21. Contact & Support</h2>
          <p>
            For questions or concerns about these Terms of Service:
          </p>
          <div className="legal-contact-box">
            <p><strong>Email:</strong> skillsync.company@gmail.com</p>
            <p><strong>Instagram:</strong> @skillsync.bh</p>
            <p><strong>TikTok:</strong> @skillsync.bh</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TermsOfService
