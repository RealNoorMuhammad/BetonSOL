import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import CryptoMarquee from '../components/CryptoMarquee'
import { useTheme } from '../contexts/ThemeContext'
import { useTranslation } from '../hooks/useTranslation'
import { motion } from 'framer-motion'
import './Home.css'

function Home() {
  const { isDarkMode } = useTheme()
  const { t } = useTranslation()
  
  // Custom title component with color styling
  const AboutTitle = () => {
    const titleText = t('about.title')
    const parts = titleText.split('SOL')
    
    return (
      <h2 className="about-title">
        {parts[0]}
        <span className="bnb-highlight">SOL</span>
        {parts[1]}
      </h2>
    )
  }

  // FAQ Collapsible State
  const [openFAQ, setOpenFAQ] = React.useState(null)

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }
  
  return (
    <div>
      <HeroSection/>
      
      {/* Crypto Prices Marquee */}
      <CryptoMarquee />
      
      {/* About Section */}
      <section className={`about-section ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="about-container">
          <AboutTitle />
          
          {/* Main Content */}
          <div className="about-content-wrapper">
            <div className="about-intro">
              <p className="about-intro-text">{t('about.content')}</p>
            </div>
            
            <div className="about-description">
              <p className="about-description-text">{t('about.description')}</p>
            </div>
            
            {/* Format Section */}
            <div className="about-format-section">
              <h3 className="format-title">{t('about.formatTitle')}</h3>
              <div className="format-list">
                <div className="format-item">
                  <span className="format-value">{t('about.format.title')}</span>
                </div>
                <div className="format-item">
                  <span className="format-value">{t('about.format.description')}</span>
                </div>
                <div className="format-item">
                  <span className="format-value">{t('about.format.bnbAddress')}</span>
                </div>
                <div className="format-item">
                  <span className="format-value">{t('about.format.startDate')}</span>
                </div>
                <div className="format-item">
                  <span className="format-value">{t('about.format.endDate')}</span>
                </div>
              </div>
            </div>

            {/* Example Section */}
            <div className="about-example-section">
              <h3 className="example-title">{t('about.exampleTitle')}</h3>
              <div className="example-content">
                <div className="example-text">
                  {t('about.example')}
                </div>
              </div>
            </div>
            
            <div className="about-submission">
              <p className="about-submission-text">{t('about.submission')}</p>
            </div>
            
            <div className="about-conclusion">
              <p className="about-conclusion-text">{t('about.conclusion')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`features-section ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="features-container">
          <h2 className="features-title">{t('features.title')}</h2>
          <div className="features-grid">
            {t('features.items').map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <div className="icon-circle">
                    <span className="icon-number">{index + 1}</span>
                  </div>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`faq-section ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="faq-container">
          <h2 className="faq-title">{t('faq.title')}</h2>
          <div className="faq-grid">
            {t('faq.items').map((faq, index) => (
              <div key={index} className="faq-item">
                <div 
                  className="faq-question" 
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="faq-question-text">{faq.question}</h3>
                  <div className={`faq-icon ${openFAQ === index ? 'open' : ''}`}>
                    <span className="faq-icon-line"></span>
                    <span className="faq-icon-line"></span>
                  </div>
                </div>
                <div className={`faq-answer ${openFAQ === index ? 'open' : ''}`}>
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={`cta-section ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="cta-container">
          <div className="cta-header">
            <h2 className="cta-title">{t('cta.title')}</h2>
            <h3 className="cta-subtitle">{t('cta.subtitle')}</h3>
          </div>
          
          <div className="cta-actions">
            {t('cta.actions').map((action, index) => (
              <div key={index} className="cta-card">
                <div className="cta-card-inner">
                  <div className="cta-content">
                    <h4 className="cta-action-title">{action.title}</h4>
                    <p className="cta-action-description">{action.description}</p>
                  
                  </div>
                </div>
                <div className="cta-card-glow"></div>
              </div>
            ))}
          </div>
          
          <div className="cta-conclusion">
            <p className="cta-conclusion-text">{t('cta.conclusion')}</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className={`footer-section ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="footer-container">
          <motion.div 
            className="footer-logo"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="footer-brand">
              Beton<span className="footer-gold">SOL</span>
            </h1>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default Home