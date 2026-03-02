import '../styles/About.css'
import '../styles/Vision.css'
import skillsyncLogo from '../assets/BGLogo.jpg'
import { useState } from 'react'
import Footer from './Footer'

function Vision({ onNavigate = () => {} }) {
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
			id: 'benefits',
			title: 'Benefits for Learners, Providers & Communities',
			content: (
				<>
					<h2>Benefits for Learners, Providers & Communities</h2>
					<p className="about-section-subtitle">
						Creating a sustainable ecosystem where knowledge flows freely and everyone grows
					</p>
					<div className="about-features-grid">
						<div className="feature-card">
							<div className="feature-icon">🎓</div>
							<h3>For Learners — Accelerate Growth</h3>
							<p>• Personalized learning with direct access to real practitioners.</p>
							<p>• Cost-effective pathways through skill swaps or earned credits.</p>
							<p>• Stronger local networking with mentors and peers.</p>
						</div>
						<div className="feature-card">
							<div className="feature-icon">👥</div>
							<h3>For Providers — Share & Earn</h3>
							<p>• Reputation and badges for teaching impact and endorsements.</p>
							<p>• Flexible mentoring sessions without long course setup.</p>
							<p>• Value exchange through credits, skills, and time-based rewards.</p>
						</div>
						<div className="feature-card">
							<div className="feature-icon">🏢</div>
							<h3>For Organizations — Scale Capabilities</h3>
							<p>• Cross-functional upskilling across teams and departments.</p>
							<p>• Better expert discovery within internal communities.</p>
							<p>• Engagement analytics for measurable learning outcomes.</p>
						</div>
					</div>
				</>
			),
		},
		{
			id: 'impact',
			title: 'The SkillSync Impact',
			content: (
				<>
					<h2>The SkillSync Impact</h2>
					<p className="about-section-subtitle">
						Transforming communities and economies through accessible, peer-to-peer knowledge exchange.
					</p>
					<div className="about-features-showcase">
						<div className="feature-showcase-card">
							<div className="feature-showcase-icon">💸</div>
							<h3>Affordable Education</h3>
							<p>Democratizing access to high-quality learning by removing tuition barriers and enabling skill swapping.</p>
							<div className="feature-bar"></div>
						</div>
						<div className="feature-showcase-card">
							<div className="feature-showcase-icon">🔄</div>
							<h3>Skill Utilization & Exchange</h3>
							<p>Unlocking hidden potential by turning passive personal knowledge into active community assets.</p>
							<div className="feature-bar"></div>
						</div>
						<div className="feature-showcase-card">
							<div className="feature-showcase-icon">🫱‍🫲</div>
							<h3>Community Building</h3>
							<p>Strengthening social fabric through meaningful face-to-face interactions and shared goals.</p>
							<div className="feature-bar"></div>
						</div>
						<div className="feature-showcase-card">
							<div className="feature-showcase-icon">💼</div>
							<h3>Employment & Upskilling</h3>
							<p>Bridging experience gaps and enhancing employability through practical, peer-verified mentorship.</p>
							<div className="feature-bar"></div>
						</div>
						<div className="feature-showcase-card">
							<div className="feature-showcase-icon">🚶</div>
							<h3>Digital Balance</h3>
							<p>Reducing screen fatigue and isolation by moving learning experiences into real-world environments.</p>
							<div className="feature-bar"></div>
						</div>
					</div>
				</>
			),
		},
		{
			id: 'sdg',
			title: 'UN Sustainable Development Goals Alignment',
			content: (
				<>
					<h2>UN Sustainable Development Goals Alignment</h2>
					<p className="about-section-subtitle">
						SkillSync contributes to building a more equitable and sustainable future
					</p>
					<div className="about-problems-grid">
						<div className="problem-card">
							<div className="problem-icon">🎓</div>
							<h3>SDG 4 — Quality Education</h3>
							<p>• Free and peer-based learning accessible to all.</p>
							<p>• Lifelong learning opportunities beyond schools.</p>
							<p>• Practical real-world skills exchange.</p>
						</div>
						<div className="problem-card">
							<div className="problem-icon">💼</div>
							<h3>SDG 8 — Decent Work & Growth</h3>
							<p>• Upskilling and reskilling for the modern economy.</p>
							<p>• Better employability through portfolio building.</p>
							<p>• Freelance and mentorship opportunities.</p>
						</div>
						<div className="problem-card">
							<div className="problem-icon">⚖️</div>
							<h3>SDG 10 — Reduced Inequalities</h3>
							<p>• No-cost learning removes financial barriers.</p>
							<p>• Equal access regardless of background.</p>
							<p>• Bridges skill gaps in underserved communities.</p>
						</div>
						<div className="problem-card">
							<div className="problem-icon">🏙️</div>
							<h3>SDG 11 — Sustainable Cities</h3>
							<p>• Utilizes local cafés as learning hubs.</p>
							<p>• Strengthens community interaction and cohesion.</p>
							<p>• Encourages offline social learning spaces.</p>
						</div>
						<div className="problem-card">
							<div className="problem-icon">🤝</div>
							<h3>SDG 17 — Partnerships for Goals</h3>
							<p>• Users, cafés, and institutions connected in one ecosystem.</p>
							<p>• Collaboration with NGOs and universities.</p>
							<p>• Startups driving innovation together.</p>
						</div>
					</div>
				</>
			),
		},
		{
			id: 'road-ahead',
			title: 'The Road Ahead',
			content: (
				<>
					<h2>The Road Ahead</h2>
					<p className="about-section-subtitle">Scaling Impact, Expanding Reach</p>
					<div className="about-steps-grid">
						<div className="step-card">
							<div className="step-number">Phase 1</div>
							<div className="step-icon">🏛️</div>
							<h3>University & NGO Partnerships</h3>
							<p>Collaborating with educational institutions to integrate peer learning into formal curriculums.</p>
						</div>
						<div className="step-card">
							<div className="step-number">Phase 2</div>
							<div className="step-icon">🌟</div>
							<h3>Skill Certifications</h3>
							<p>Launching verified digital badges and certificates for top mentors, recognized by industry partners.</p>
						</div>
						<div className="step-card">
							<div className="step-number">Phase 3</div>
							<div className="step-icon">🏢</div>
							<h3>Corporate Mentoring</h3>
							<p>Enterprise solutions for internal employee upskilling and cross-departmental talent discovery.</p>
						</div>
						<div className="step-card">
							<div className="step-number">Phase 4</div>
							<div className="step-icon">🌍</div>
							<h3>Global Expansion</h3>
							<p>Scaling to international markets with multilingual support and culturally adaptable experiences.</p>
						</div>
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
						<button className="nav-btn" onClick={() => onNavigate('team')}>Team</button>
						<button className="nav-btn" onClick={() => onNavigate('contact')}>Contact</button>
						<button className="nav-btn" onClick={() => onNavigate('faqs')}>FAQs</button>
						<button className="about-nav-home-btn" onClick={() => onNavigate('home')}>← Back to Home</button>
					</div>
				</div>
			</nav>

			<section className="about-hero">
				<div className="about-hero-content">
					<h1>Vision</h1>
					<p>A roadmap for inclusive, community-powered learning</p>
				</div>
			</section>

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
				<h2>Shaping the Future of Skill Sharing</h2>
				<p>From local impact to global collaboration, SkillSync grows with every connection.</p>
			</section>

			{/* Footer */}
			<Footer onNavigate={onNavigate} />
		</div>
	)
}

export default Vision
