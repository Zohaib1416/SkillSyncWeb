import { useState } from 'react'
import Splash from './components/Splash'
import Home from './components/Home'
import About from './components/About'
import Vision from './components/Vision'
import Contact from './components/Contact'
import Team from './components/Team'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import FAQs from './components/FAQs'
import './App.css'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [currentPage, setCurrentPage] = useState('home')

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  return (
    <>
      {showSplash ? (
        <Splash onComplete={handleSplashComplete} />
      ) : currentPage === 'privacy' ? (
        <PrivacyPolicy onNavigate={setCurrentPage} />
      ) : currentPage === 'terms' ? (
        <TermsOfService onNavigate={setCurrentPage} />
      ) : currentPage === 'faqs' ? (
        <FAQs onNavigate={setCurrentPage} />
      ) : currentPage === 'about' ? (
        <About onNavigate={setCurrentPage} />
      ) : currentPage === 'vision' ? (
        <Vision onNavigate={setCurrentPage} />
      ) : currentPage === 'contact' ? (
        <Contact onNavigate={setCurrentPage} />
      ) : currentPage === 'team' ? (
        <Team onNavigate={setCurrentPage} />
      ) : (
        <Home onNavigate={setCurrentPage} />
      )}
    </>
  )
}

export default App
