import skillsyncLogo from '../assets/BGLogo.jpg'
import imageOne from '../assets/P1.png'
import imageTwo from '../assets/P2.png'
import imageThree from '../assets/P3.png'
import imageFour from '../assets/P4.png'
import { useEffect, useState } from 'react'
import '../styles/Home.css'
import Footer from './Footer'

function Home({ onNavigate = () => {} }) {
  const showcaseImages = [imageOne, imageTwo, imageThree, imageFour]
  const totalImages = showcaseImages.length
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    if (!isGalleryOpen) {
      return undefined
    }

    const interval = setInterval(() => {
      setActiveImageIndex((currentIndex) => (currentIndex + 1) % totalImages)
    }, 2000)

    return () => clearInterval(interval)
  }, [isGalleryOpen, totalImages])

  const openGallery = () => {
    setActiveImageIndex(0)
    setIsGalleryOpen(true)
  }

  const closeGallery = () => setIsGalleryOpen(false)
  const previousImageIndex = (activeImageIndex - 1 + totalImages) % totalImages
  const nextImageIndex = (activeImageIndex + 1) % totalImages

  return (
    <div className="home-container">
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
          <button className="nav-btn" onClick={() => onNavigate('faqs')}>FAQs</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to SkillSync</h1>
          <p>Connect. Learn. Exchange.</p>
          <p className="hero-description">
            Discover a platform where skills meet opportunity. Connect with learners and experts,
            share your knowledge, and grow together.
          </p>
        </div>

        <div
          className="hero-showcase"
          onClick={openGallery}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => (event.key === 'Enter' || event.key === ' ') && openGallery()}
        >
          <img src={showcaseImages[0]} alt="SkillSync app screen 1" className="showcase-photo photo-one" />
          <img src={showcaseImages[1]} alt="SkillSync app screen 2" className="showcase-photo photo-two" />
          <img src={showcaseImages[2]} alt="SkillSync app screen 3" className="showcase-photo photo-three" />
          <img src={showcaseImages[3]} alt="SkillSync app screen 4" className="showcase-photo photo-four" />
        </div>
      </section>

      {isGalleryOpen && (
        <div className="gallery-overlay" onClick={closeGallery}>
          <div className="gallery-stage" onClick={(event) => event.stopPropagation()}>
            <img
              src={showcaseImages[previousImageIndex]}
              alt={`SkillSync showcase ${previousImageIndex + 1}`}
              className="gallery-side-photo gallery-side-left"
            />
            <img
              key={showcaseImages[activeImageIndex]}
              src={showcaseImages[activeImageIndex]}
              alt={`SkillSync showcase ${activeImageIndex + 1}`}
              className="gallery-active-photo"
            />
            <img
              src={showcaseImages[nextImageIndex]}
              alt={`SkillSync showcase ${nextImageIndex + 1}`}
              className="gallery-side-photo gallery-side-right"
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  )
}

export default Home
