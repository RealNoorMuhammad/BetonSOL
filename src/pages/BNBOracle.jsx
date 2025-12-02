import React, { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { useTheme } from '../contexts/ThemeContext'
import './BNBOracle.css'

function BNBOracle() {
  const { t } = useTranslation()
  const { isDarkMode } = useTheme()
  const [screenshotMode, setScreenshotMode] = useState(false)
  const [filters, setFilters] = useState({
    pyth: false,
    failed: false
  })

  const toggleFilter = (filterName) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }))
  }

  const resetFilters = () => {
    setFilters({
      pyth: false,
      failed: false
    })
  }

  return (
    <div className="oracle-page">
      {/* Development Banner */}
      <div className="development-banner">
        <div className="banner-content">
          <div className="banner-icon">🚧</div>
          <div className="banner-text">
            <h3>{t('oracle.developmentBanner.title')}</h3>
            <p>{t('oracle.developmentBanner.message')}</p>
          </div>
          <div className="banner-status">{t('oracle.developmentBanner.status')}</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="oracle-container">
        {/* Header */}
        <div className="oracle-header">
          <h1 className="oracle-title">{t('oracle.title')}</h1>
          <p className="oracle-subtitle">{t('oracle.subtitle')}</p>
        </div>

        {/* Controls */}
        <div className="oracle-controls">
          <div className="control-group">
            <button 
              className={`control-btn ${screenshotMode ? 'active' : ''}`}
              onClick={() => setScreenshotMode(!screenshotMode)}
            >
              📸 {t('oracle.screenshotMode')}
            </button>
          </div>
          
          <div className="filter-group">
            <button 
              className={`filter-btn ${filters.pyth ? 'active' : ''}`}
              onClick={() => toggleFilter('pyth')}
            >
              {t('oracle.pyth')}
            </button>
            <button 
              className={`filter-btn ${filters.failed ? 'active' : ''}`}
              onClick={() => toggleFilter('failed')}
            >
              {t('oracle.failed')}
            </button>
            <button 
              className="filter-btn reset"
              onClick={resetFilters}
            >
              {t('oracle.resetFilters')}
            </button>
          </div>
        </div>

        {/* Oracle Transparency Section */}
        <div className="transparency-section">
          <h2 className="section-title">{t('oracle.transparency.title')}</h2>
          <p className="section-description">{t('oracle.transparency.description')}</p>
        </div>

        {/* Live Feed */}
        <div className="live-feed-section">
          <div className="feed-header">
            <h3>{t('oracle.liveFeed')}</h3>
            <div className="live-indicator">
              <div className="pulse-dot"></div>
              <span>{t('oracle.realTimeUpdates')}</span>
            </div>
          </div>
          
          <div className="feed-content">
            <div className="no-events-message">
              <div className="no-events-icon">⏳</div>
              <p>{t('oracle.noEvents')}</p>
            </div>
          </div>
        </div>

        {/* Oracle Sources */}
        <div className="oracle-sources-section">
          <h3>{t('oracle.oracleSources')}</h3>
          <div className="sources-grid">
            <div className="source-card">
              <div className="source-icon">🔗</div>
              <h4>Chainlink</h4>
              <p>Decentralized price feeds</p>
              <div className="status-indicator online">Online</div>
            </div>
            <div className="source-card">
              <div className="source-icon">📊</div>
              <h4>Pyth Network</h4>
              <p>High-frequency price data</p>
              <div className="status-indicator online">Online</div>
            </div>
            <div className="source-card">
              <div className="source-icon">🏦</div>
              <h4>Binance API</h4>
              <p>Exchange price feeds</p>
              <div className="status-indicator online">Online</div>
            </div>
            <div className="source-card">
              <div className="source-icon">📈</div>
              <h4>CoinGecko</h4>
              <p>Market data aggregation</p>
              <div className="status-indicator online">Online</div>
            </div>
          </div>
        </div>

        {/* Data Integrity */}
        <div className="data-integrity-section">
          <h3>{t('oracle.dataIntegrity')}</h3>
          <div className="integrity-metrics">
            <div className="metric">
              <div className="metric-value">99.9%</div>
              <div className="metric-label">Uptime</div>
            </div>
            <div className="metric">
              <div className="metric-value">0.1s</div>
              <div className="metric-label">Avg Response</div>
            </div>
            <div className="metric">
              <div className="metric-value">4</div>
              <div className="metric-label">Data Sources</div>
            </div>
            <div className="metric">
              <div className="metric-value">100%</div>
              <div className="metric-label">Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BNBOracle
