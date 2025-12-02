import React, { useState, useMemo } from 'react'
import './HowToBet.css'
import { useTheme } from '../contexts/ThemeContext'
import { useTranslation } from '../hooks/useTranslation'
import CryptoMarket from '../components/CryptoMarket'
import { 
  FaTwitter, 
  FaChartLine, 
  FaCoins, 
  FaShoppingCart, 
  FaTrophy,
  FaCheckCircle,
  FaArrowRight,
  FaCheck,
  FaGift,
  FaCrown,
  FaRobot,
  FaShieldAlt,
  FaDatabase,
  FaCogs,
  FaRocket,
  FaUsers,
  FaVoteYea,
  FaEye,
  FaHeart,
  FaBullseye,
  FaLightbulb,
  FaHandshake,
  FaGlobe
} from 'react-icons/fa'

function HowToBet() {
  const { isDarkMode } = useTheme()
  const { t, language } = useTranslation()
  const [activeSection, setActiveSection] = useState('overview')
  const [searchQuery, setSearchQuery] = useState('')

  // Navigation structure with hierarchical organization
  const navigationItems = useMemo(() => [
    { id: 'overview', label: t('docsPage.navigation.overview'), type: 'link', level: 0 },
    { id: 'our-vision', label: t('docsPage.navigation.ourVision'), type: 'link', level: 1, parent: 'overview' },
    { id: 'getting-started-header', label: t('docsPage.navigation.gettingStarted'), type: 'header', level: 0 },
    { id: 'why-choose-betonsol', label: t('docsPage.navigation.whyChooseBetonsol'), type: 'link', level: 1, parent: 'getting-started-header' },
  
    { id: 'webapp', label: t('docsPage.navigation.webapp'), type: 'link', level: 1, parent: 'roadmap-header' },
  
    { id: 'ai-powered-resolution', label: t('docsPage.navigation.aiPoweredResolution'), type: 'link', level: 1, parent: 'roadmap-header' },
    { id: 'live-market-header', label: t('docsPage.navigation.liveMarket'), type: 'header', level: 0 },
    { id: 'crypto-market', label: t('docsPage.navigation.cryptoMarket'), type: 'link', level: 1, parent: 'live-market-header' },
   
    { id: 'tokenomics-header', label: t('docsPage.navigation.tokenomics'), type: 'header', level: 0 },
    { id: 'betonsol-token', label: t('docsPage.navigation.betonsolToken'), type: 'link', level: 1, parent: 'tokenomics-header' },
    { id: 'privacy-header', label: t('docsPage.navigation.privacy'), type: 'header', level: 0 },
    { id: 'final-words', label: t('docsPage.navigation.finalWords'), type: 'link', level: 1, parent: 'privacy-header' },
   
  ], [t])

  // Filter navigation items based on search query
  const filteredNavigationItems = useMemo(() => {
    if (!searchQuery.trim()) return navigationItems
    
    const query = searchQuery.toLowerCase()
    return navigationItems.filter(item => 
      item.label.toLowerCase().includes(query) ||
      (item.parent && navigationItems.find(p => p.id === item.parent)?.label.toLowerCase().includes(query))
    )
  }, [navigationItems, searchQuery])

  // Content sections with placeholder text
  const contentSections = useMemo(() => ({
    'overview': {
      title: t('docsPage.content.overview.title'),
      subtitle: t('docsPage.content.overview.subtitle'),
      goal: t('docsPage.content.overview.goal'),
      howItWorks: t('docsPage.content.overview.howItWorks'),
      liveBets: t('docsPage.content.overview.liveBets'),
      rewards: t('docsPage.content.overview.rewards'),
      twitterIntegration: t('docsPage.content.overview.twitterIntegration'),
      summary: t('docsPage.content.overview.summary'),
      isRichContent: true
    },
    'our-vision': {
      title: t('docsPage.content.ourVision.title'),
      subtitle: t('docsPage.content.ourVision.subtitle'),
      introduction: t('docsPage.content.ourVision.introduction'),
      communityEmpowerment: t('docsPage.content.ourVision.communityEmpowerment'),
      blockchainTransparency: t('docsPage.content.ourVision.blockchainTransparency'),
      aiIntegrity: t('docsPage.content.ourVision.aiIntegrity'),
      socialIntegration: t('docsPage.content.ourVision.socialIntegration'),
      ultimateGoal: t('docsPage.content.ourVision.ultimateGoal'),
      conclusion: t('docsPage.content.ourVision.conclusion'),
      isRichContent: true
    },
    'why-choose-betonsol': {
      title: t('docsPage.content.whyChooseBetonsol.title'),
      subtitle: t('docsPage.content.whyChooseBetonsol.subtitle'),
      introduction: t('docsPage.content.whyChooseBetonsol.introduction'),
      sections: t('docsPage.content.whyChooseBetonsol.sections'),
      mission: t('docsPage.content.whyChooseBetonsol.mission'),
      conclusion: t('docsPage.content.whyChooseBetonsol.conclusion'),
      isRichContent: true
    },
    'webapp': {
      title: t('docsPage.content.webapp.title'),
      subtitle: t('docsPage.content.webapp.subtitle'),
      introduction: t('docsPage.content.webapp.introduction'),
      dashboardOverview: t('docsPage.content.webapp.dashboardOverview'),
      creatingBet: t('docsPage.content.webapp.creatingBet'),
      liveBetsPage: t('docsPage.content.webapp.liveBetsPage'),
      walletConnection: t('docsPage.content.webapp.walletConnection'),
      aiModeration: t('docsPage.content.webapp.aiModeration'),
      rewardsSystem: t('docsPage.content.webapp.rewardsSystem'),
      mobileDarkMode: t('docsPage.content.webapp.mobileDarkMode'),
      upcomingFeatures: t('docsPage.content.webapp.upcomingFeatures'),
      summary: t('docsPage.content.webapp.summary'),
      isRichContent: true
    },
    'twitter-dashboard': {
      title: t('docsPage.content.twitterDashboard.title'),
      subtitle: t('docsPage.content.twitterDashboard.subtitle'),
      introduction: t('docsPage.content.twitterDashboard.introduction'),
      features: t('docsPage.content.twitterDashboard.features'),
      pointsSystem: t('docsPage.content.twitterDashboard.pointsSystem'),
      inAppPurchases: t('docsPage.content.twitterDashboard.inAppPurchases'),
      communityRankings: t('docsPage.content.twitterDashboard.communityRankings'),
      conclusion: t('docsPage.content.twitterDashboard.conclusion'),
      isRichContent: true
    },
    'ai-powered-resolution': {
      title: t('docsPage.content.aiPoweredResolution.title'),
      subtitle: t('docsPage.content.aiPoweredResolution.subtitle'),
      introduction: t('docsPage.content.aiPoweredResolution.introduction'),
      howItWorks: t('docsPage.content.aiPoweredResolution.howItWorks'),
      whyItMatters: t('docsPage.content.aiPoweredResolution.whyItMatters'),
      isRichContent: true
    },
    'crypto-market': {
      title: t('docsPage.content.cryptoMarket.title'),
      component: 'CryptoMarket'
    },
    'global-market': {
      title: t('docsPage.content.globalMarket.title'),
      content: t('docsPage.content.globalMarket.content')
    },
    'betonsol-token': {
      title: t('docsPage.content.betonsolToken.title'),
      subtitle: t('docsPage.content.betonsolToken.subtitle'),
      introduction: t('docsPage.content.betonsolToken.introduction'),
      description: t('docsPage.content.betonsolToken.description'),
      whatToExpect: t('docsPage.content.betonsolToken.whatToExpect'),
      summary: t('docsPage.content.betonsolToken.summary'),
      isRichContent: true
    },
    'final-words': {
      title: t('docsPage.content.finalWords.title'),
      subtitle: t('docsPage.content.finalWords.subtitle'),
      mission: t('docsPage.content.finalWords.mission'),
      focus: t('docsPage.content.finalWords.focus'),
      vision: t('docsPage.content.finalWords.vision'),
      gratitude: t('docsPage.content.finalWords.gratitude'),
      conclusion: t('docsPage.content.finalWords.conclusion'),
      isRichContent: true
    },
    'privacy': {
      title: t('docsPage.content.privacy.title'),
      content: t('docsPage.content.privacy.content')
    }
  }), [t])

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleNavigationClick = (itemId) => {
    if (navigationItems.find(item => item.id === itemId)?.type === 'link') {
      setActiveSection(itemId)
    }
  }

  // Function to get appropriate icon for AI resolution steps
  const getStepIcon = (stepText, index) => {
    const text = stepText.toLowerCase()
    
    if (text.includes('resolved') || text.includes('marked')) {
      return <FaCheck className="field-icon resolved-icon" />
    } else if (text.includes('rewarded') || text.includes('winners')) {
      return <FaGift className="field-icon reward-icon" />
    } else if (text.includes('creator') || text.includes('bonus')) {
      return <FaCrown className="field-icon creator-icon" />
    } else if (text.includes('data') || text.includes('aggregation')) {
      return <FaDatabase className="field-icon data-icon" />
    } else if (text.includes('validation') || text.includes('engine')) {
      return <FaShieldAlt className="field-icon validation-icon" />
    } else if (text.includes('fraud') || text.includes('spam')) {
      return <FaRobot className="field-icon fraud-icon" />
    } else if (text.includes('automation') || text.includes('system')) {
      return <FaCogs className="field-icon automation-icon" />
    } else {
      return <FaCheckCircle className="field-icon" />
    }
  }

  const currentContent = contentSections[activeSection] || contentSections['overview']

  return (
    <div className={`docs-page ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Main content area */}
      <main className="docs-content">
        <div className="content-container">
          <h1 className="docs-title">{t('docsPage.title')}</h1>
          <div className="content-section">
            <h2 className="section-title">{currentContent.title}</h2>
            <div className="section-content">
              {currentContent.isRichContent ? (
                <div className={`rich-content ${activeSection === 'why-choose-betonsol' ? 'why-choose-section' : ''} ${activeSection === 'webapp' ? 'webapp-section' : ''} ${activeSection === 'twitter-dashboard' ? 'twitter-dashboard-section' : ''} ${activeSection === 'betonsol-token' ? 'betonsol-token-section' : ''} ${activeSection === 'final-words' ? 'final-words-section' : ''}`}>
              

                 

                  {/* Our Vision specific content */}
                  {activeSection === 'our-vision' ? (
                    <>
                      {/* Community Empowerment */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.communityEmpowerment.title}</h3>
                        <p className="subsection-description">{currentContent.communityEmpowerment.description}</p>
                        <p className="subsection-description">{currentContent.communityEmpowerment.conclusion}</p>
                      </div>

                      {/* Blockchain Transparency */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.blockchainTransparency.title}</h3>
                        <p className="subsection-description">{currentContent.blockchainTransparency.description}</p>
                        <p className="subsection-description">{currentContent.blockchainTransparency.implementation}</p>
                      </div>

                      {/* AI Integrity */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.aiIntegrity.title}</h3>
                        <p className="subsection-description">{currentContent.aiIntegrity.description}</p>
                        <p className="subsection-description">{currentContent.aiIntegrity.future}</p>
                      </div>

                      {/* Social Integration */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.socialIntegration.title}</h3>
                        <p className="subsection-description">{currentContent.socialIntegration.description}</p>
                        <p className="subsection-description">{currentContent.socialIntegration.vision}</p>
                      </div>

                      {/* Ultimate Goal */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.ultimateGoal.title}</h3>
                        <p className="subsection-description">{currentContent.ultimateGoal.description}</p>
                      </div>

                      {/* Conclusion */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.conclusion.title}</h3>
                        <p className="subsection-description">{currentContent.conclusion.description}</p>
                        <p className="conclusion-text">{currentContent.conclusion.final}</p>
                      </div>
                    </>
                  ) : activeSection === 'why-choose-betonsol' ? (
                    <>
                      {/* Why Choose BetonSOL specific content */}
                      <div className="content-block">
                        <p className="subtitle-text">{currentContent.subtitle}</p>
                      </div>

                      <div className="content-block">
                        <p className="goal-text">{currentContent.introduction}</p>
                      </div>

                      {/* Sections */}
                      {currentContent.sections.map((section, index) => (
                        <div key={index} className="content-block">
                          <h3 className="subsection-title">{section.title}</h3>
                          <p className="subsection-description">{section.description}</p>
                          {section.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="subsection-description">{detail}</p>
                          ))}
                        </div>
                      ))}

                      {/* Mission */}
                      <div className="content-block">
                        <h3 className="subsection-title">Our Mission</h3>
                        <p className="subsection-description">{currentContent.mission}</p>
                      </div>

                      {/* Conclusion */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.conclusion.title}</h3>
                        <p className="conclusion-text">{currentContent.conclusion.description}</p>
                      </div>
                    </>
                  ) : activeSection === 'twitter-dashboard' ? (
                    <>
                      {/* Twitter Dashboard specific content */}
                      <div className="content-block">
                        <p className="subtitle-text">{currentContent.subtitle}</p>
                      </div>

                      <div className="content-block">
                        <p className="goal-text">{currentContent.introduction}</p>
                      </div>

                      {/* Features */}
                      {currentContent.features.map((feature, index) => (
                        <div key={index} className="content-block">
                          <h3 className="subsection-title">
                            {index === 0 && <FaTwitter className="section-icon" />}
                            {index === 1 && <FaChartLine className="section-icon" />}
                            {feature.title}
                          </h3>
                          <p className="subsection-description">{feature.description}</p>
                          {feature.details && (
                            <div className="fields-list">
                              {feature.details.map((detail, detailIndex) => (
                                <div key={detailIndex} className="field-item">
                                  <FaCheckCircle className="field-icon" />
                                  <strong>{detail}</strong>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}

                      {/* Points System */}
                      <div className="content-block">
                        <h3 className="subsection-title">
                          <FaCoins className="section-icon" />
                          {currentContent.pointsSystem.title}
                        </h3>
                        <p className="subsection-description">{currentContent.pointsSystem.description}</p>
                        <p className="subsection-subtitle">Every user will earn points based on:</p>
                        
                        <div className="fields-list">
                          {currentContent.pointsSystem.points.map((point, index) => (
                            <div key={index} className="field-item">
                              <FaArrowRight className="field-icon" />
                              <strong>{point}</strong>
                            </div>
                          ))}
                        </div>

                        <p className="subsection-description">{currentContent.pointsSystem.conclusion}</p>
                      </div>

                      {/* In-App Purchases & Withdrawals */}
                      <div className="content-block">
                        <h3 className="subsection-title">
                          <FaShoppingCart className="section-icon" />
                          {currentContent.inAppPurchases.title}
                        </h3>
                        <p className="subsection-description">{currentContent.inAppPurchases.description}</p>
                        <p className="subsection-subtitle">Use your points inside the BetonSOL ecosystem to:</p>
                        
                        <div className="fields-list">
                          {currentContent.inAppPurchases.uses.map((use, index) => (
                            <div key={index} className="field-item">
                              <FaCheckCircle className="field-icon" />
                              <strong>{use}</strong>
                            </div>
                          ))}
                        </div>

                        <p className="subsection-description">{currentContent.inAppPurchases.conclusion}</p>
                      </div>

                      {/* Community Rankings */}
                      <div className="content-block">
                        <h3 className="subsection-title">
                          <FaTrophy className="section-icon" />
                          {currentContent.communityRankings.title}
                        </h3>
                        <p className="subsection-description">{currentContent.communityRankings.description}</p>
                      </div>

                      {/* Conclusion */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.conclusion.title}</h3>
                        <p className="subsection-description">{currentContent.conclusion.description}</p>
                        <p className="conclusion-text">{currentContent.conclusion.final}</p>
                      </div>
                    </>
                  ) : activeSection === 'ai-powered-resolution' ? (
                    <div className="ai-powered-resolution">
                      {/* AI-Powered Resolution specific content */}
                      <div className="content-block">
                        <p className="subtitle-text">{currentContent.subtitle}</p>
                      </div>

                      <div className="content-block">
                        <p className="goal-text">{currentContent.introduction}</p>
                      </div>

                      {/* How It Works */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.howItWorks.title}</h3>
                        
                        {currentContent.howItWorks.steps.map((step, index) => (
                          <div key={index} className="content-block">
                            <h4 className="step-title">{step.title}</h4>
                            <p className="subsection-description">{step.description}</p>
                            {step.details && (
                              <p className="subsection-description">{step.details}</p>
                            )}
                            {step.steps && (
                              <div className="fields-list">
                                {step.steps.map((subStep, subIndex) => (
                                  <div key={subIndex} className="field-item">
                                    {getStepIcon(subStep, subIndex)}
                                    <strong>{subStep}</strong>
                                  </div>
                                ))}
                              </div>
                            )}
                            {step.conclusion && (
                              <p className="subsection-description">{step.conclusion}</p>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Why It Matters */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.whyItMatters.title}</h3>
                        <p className="subsection-description">{currentContent.whyItMatters.description}</p>
                        <p className="conclusion-text">{currentContent.whyItMatters.conclusion}</p>
                      </div>
                    </div>
                  ) : activeSection === 'webapp' ? (
                    <>
                      {/* Webapp specific content */}
                      <div className="content-block">
                        <p className="subtitle-text">{currentContent.subtitle}</p>
                      </div>

                      <div className="content-block">
                        <p className="goal-text">{currentContent.introduction}</p>
                      </div>

                      {/* Dashboard Overview */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.dashboardOverview.title}</h3>
                        <p className="subsection-description">{currentContent.dashboardOverview.description}</p>
                        <p className="subsection-subtitle">It provides quick access to:</p>
                        
                        <div className="fields-list">
                          {currentContent.dashboardOverview.features.map((feature, index) => (
                            <div key={index} className="field-item">
                              <strong>{feature}</strong>
                            </div>
                          ))}
                        </div>

                        <p className="subsection-description">{currentContent.dashboardOverview.conclusion}</p>
                      </div>

                      {/* Creating a BET */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.creatingBet.title}</h3>
                        <p className="subsection-description">{currentContent.creatingBet.description}</p>
                        
                        <div className="fields-list">
                          {currentContent.creatingBet.steps.map((step, index) => (
                            <div key={index} className="field-item">
                              <strong>{step}</strong>
                            </div>
                          ))}
                        </div>

                        <p className="subsection-description">{currentContent.creatingBet.conclusion}</p>
                      </div>

                      {/* Live BETs Page */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.liveBetsPage.title}</h3>
                        <p className="subsection-description">{currentContent.liveBetsPage.description}</p>
                        <p className="subsection-subtitle">Each BET card shows:</p>
                        
                        <div className="fields-list">
                          {currentContent.liveBetsPage.features.map((feature, index) => (
                            <div key={index} className="field-item">
                              <strong>{feature}</strong>
                            </div>
                          ))}
                        </div>

                        <p className="subsection-description">{currentContent.liveBetsPage.conclusion}</p>
                      </div>

                      {/* Wallet Connection */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.walletConnection.title}</h3>
                        <p className="subsection-description">{currentContent.walletConnection.description}</p>
                        
                        <div className="fields-list">
                          {currentContent.walletConnection.features.map((feature, index) => (
                            <div key={index} className="field-item">
                              <strong>{feature}</strong>
                            </div>
                          ))}
                        </div>

                        <p className="subsection-description">{currentContent.walletConnection.conclusion}</p>
                      </div>

                      {/* AI Moderation */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.aiModeration.title}</h3>
                        <p className="subsection-description">{currentContent.aiModeration.description}</p>
                        
                        <div className="fields-list">
                          {currentContent.aiModeration.features.map((feature, index) => (
                            <div key={index} className="field-item">
                              <strong>{feature}</strong>
                            </div>
                          ))}
                        </div>

                        <p className="subsection-description">{currentContent.aiModeration.conclusion}</p>
                      </div>

                      {/* Rewards System */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.rewardsSystem.title}</h3>
                        <p className="subsection-description">{currentContent.rewardsSystem.description}</p>
                        
                        <div className="fields-list">
                          {currentContent.rewardsSystem.features.map((feature, index) => (
                            <div key={index} className="field-item">
                              <strong>{feature}</strong>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Mobile and Dark Mode */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.mobileDarkMode.title}</h3>
                        <p className="subsection-description">{currentContent.mobileDarkMode.description}</p>
                        <p className="subsection-description">{currentContent.mobileDarkMode.conclusion}</p>
                      </div>

                      {/* Upcoming Features */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.upcomingFeatures.title}</h3>
                        <p className="subsection-description">{currentContent.upcomingFeatures.description}</p>
                        <p className="subsection-subtitle">Some upcoming updates include:</p>
                        
                        <div className="fields-list">
                          {currentContent.upcomingFeatures.features.map((feature, index) => (
                            <div key={index} className="field-item">
                              <strong>{feature}</strong>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Summary */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.summary.title}</h3>
                        <p className="subsection-description">{currentContent.summary.description}</p>
                        <p className="conclusion-text">{currentContent.summary.conclusion}</p>
                      </div>
                    </>
                  ) : activeSection === 'betonsol-token' ? (
                    <>
                      {/* BetonSOL Token specific content */}
                      <div className="content-block">
                        <p className="subsection-description">{currentContent.description}</p>
                      </div>

                      {/* What to Expect */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.whatToExpect.title}</h3>
                        
                        {currentContent.whatToExpect.sections.map((section, index) => (
                          <div key={index} className="content-block">
                            <h4 className="step-title">
                              {index === 0 && <FaRocket className="section-icon" />}
                              {index === 1 && <FaGift className="section-icon" />}
                              {index === 2 && <FaUsers className="section-icon" />}
                              {index === 3 && <FaEye className="section-icon" />}
                              {section.title}
                            </h4>
                            <p className="subsection-description">{section.description}</p>
                            {section.features && (
                              <div className="fields-list">
                                {section.features.map((feature, featureIndex) => (
                                  <div key={featureIndex} className="field-item">
                                    <FaCheckCircle className="field-icon" />
                                    <strong>{feature}</strong>
                                  </div>
                                ))}
                              </div>
                            )}
                            {section.conclusion && (
                              <p className="subsection-description">{section.conclusion}</p>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Summary */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.summary.title}</h3>
                        <p className="subsection-description">{currentContent.summary.description}</p>
                        <p className="conclusion-text">{currentContent.summary.conclusion}</p>
                      </div>
                    </>
                  ) : activeSection === 'final-words' ? (
                    <>
                      {/* Final Words specific content */}
                      <div className="content-block">
                        <div className="section-header">
                          <FaHeart className="section-icon" />
                          <p className="subtitle-text">{currentContent.subtitle}</p>
                        </div>
                      </div>

                      {/* Mission */}
                      <div className="content-block">
                        <div className="section-header">
                          <FaLightbulb className="section-icon" />
                          <p className="subsection-description">{currentContent.mission}</p>
                        </div>
                      </div>

                      {/* Focus */}
                      <div className="content-block">
                        <h3 className="subsection-title">
                          <FaBullseye className="section-icon" />
                          {currentContent.focus.title}
                        </h3>
                        <div className="fields-list">
                          {currentContent.focus.points.map((point, index) => (
                            <div key={index} className="field-item">
                              <FaCheckCircle className="field-icon" />
                              <strong>{point}</strong>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Vision */}
                      <div className="content-block">
                        <div className="section-header">
                          <FaGlobe className="section-icon" />
                          <p className="subsection-description">{currentContent.vision}</p>
                        </div>
                      </div>

                      {/* Gratitude */}
                      <div className="content-block">
                        <div className="section-header">
                          <FaHandshake className="section-icon" />
                          <p className="subsection-description">{currentContent.gratitude}</p>
                        </div>
                      </div>

                      {/* Conclusion */}
                      <div className="content-block">
                        <div className="conclusion-section">
                          <FaRocket className="conclusion-icon" />
                          <p className="conclusion-text">{currentContent.conclusion}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* How It Works */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.howItWorks.title}</h3>
                        <p className="subsection-description">{currentContent.howItWorks.description}</p>
                        <p className="subsection-subtitle">{currentContent.howItWorks.whenCreating}</p>
                        
                        <div className="fields-list">
                          <div className="field-item">
                            <strong>{currentContent.howItWorks.fields.title}</strong>
                          </div>
                          <div className="field-item">
                            <strong>{currentContent.howItWorks.fields.description}</strong>
                          </div>
                          <div className="field-item">
                            <strong>{currentContent.howItWorks.fields.bnbAddress}</strong>
                          </div>
                          <div className="field-item">
                            <strong>{currentContent.howItWorks.fields.betType}</strong>
                          </div>
                          <div className="field-item">
                            <strong>{currentContent.howItWorks.fields.startDate}</strong>
                          </div>
                          <div className="field-item">
                            <strong>{currentContent.howItWorks.fields.endDate}</strong>
                          </div>
                        </div>

                        <p className="subsection-description">{currentContent.howItWorks.processing}</p>
                        <p className="subsection-description">{currentContent.howItWorks.moderation}</p>
                      </div>
                    </>
                  )}

                  {/* Overview specific content */}
                  {activeSection === 'overview' && (
                    <>
                      {/* Live BETs */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.liveBets.title}</h3>
                        <p className="subsection-description">{currentContent.liveBets.description}</p>
                        <p className="subsection-description">{currentContent.liveBets.participation}</p>
                        <p className="subsection-description">{currentContent.liveBets.environment}</p>
                      </div>

                      {/* Rewards */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.rewards.title}</h3>
                        <p className="subsection-description">{currentContent.rewards.description}</p>
                        <p className="subsection-description">{currentContent.rewards.payout}</p>
                      </div>

                      {/* Twitter Integration */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.twitterIntegration.title}</h3>
                        <p className="subsection-description">{currentContent.twitterIntegration.description}</p>
                        <p className="subsection-description">{currentContent.twitterIntegration.instruction}</p>
                        
                        <div className="format-box">
                          <div className="format-item">
                            <strong>{currentContent.twitterIntegration.format.title}</strong>
                          </div>
                          <div className="format-item">
                            <strong>{currentContent.twitterIntegration.format.description}</strong>
                          </div>
                          <div className="format-item">
                            <strong>{currentContent.twitterIntegration.format.bnbAddress}</strong>
                          </div>
                          <div className="format-item">
                            <strong>{currentContent.twitterIntegration.format.startDate}</strong>
                          </div>
                          <div className="format-item">
                            <strong>{currentContent.twitterIntegration.format.endDate}</strong>
                          </div>
                        </div>

                        <p className="subsection-description">{currentContent.twitterIntegration.verification}</p>
                        
                        <div className="example-box">
                          <strong>{language === 'zh' ? '示例：' : 'Example:'}</strong>
                          <code className="example-code">{currentContent.twitterIntegration.example}</code>
                        </div>
                      </div>

                      {/* Summary */}
                      <div className="content-block">
                        <h3 className="subsection-title">{currentContent.summary.title}</h3>
                        <p className="subsection-description">{currentContent.summary.description}</p>
                        <p className="conclusion-text">{currentContent.summary.conclusion}</p>
                      </div>
                    </>
                  )}
                </div>
              ) : currentContent.component === 'CryptoMarket' ? (
                <CryptoMarket />
              ) : (
                <>
                  <p>{currentContent.content}</p>
                  <p className="placeholder-note">
                    <em>{language === 'zh' ? '这是占位符内容。此部分的实际内容将在稍后提供。' : 'This is placeholder content. The actual content for this section will be provided later.'}</em>
                  </p>
                </>
              )}
            </div>
              </div>
            </div>
      </main>

      {/* Right sidebar navigation */}
      <aside className="docs-sidebar">
        <div className="sidebar-content">
          {/* Search input */}
          <div className="search-container">
                  <input
                    type="text"
              placeholder={t('docsPage.searchPlaceholder')}
              value={searchQuery}
                    onChange={handleSearchChange}
              className="search-input"
                  />
                </div>

          {/* Navigation items */}
          <nav className="navigation">
            {filteredNavigationItems.map((item) => {
              const isHeader = item.type === 'header'
              const isActive = activeSection === item.id
              const isClickable = item.type === 'link'
              
                        return (
                          <div 
                  key={item.id}
                  className={`nav-item ${isHeader ? 'nav-header' : 'nav-link'} ${isActive ? 'active' : ''} ${isClickable ? 'clickable' : ''}`}
                  style={{ paddingLeft: `${item.level * 16 + 8}px` }}
                  onClick={() => isClickable && handleNavigationClick(item.id)}
                >
                  {item.label}
                          </div>
                        )
                      })}
          </nav>
                  </div>
      </aside>
    </div>
  )
}

export default HowToBet