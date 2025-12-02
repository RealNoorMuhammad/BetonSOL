import React from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { useTheme } from '../contexts/ThemeContext'
import './TopBettors.css'

function TopBettors() {
  const { t } = useTranslation()

  // Mock data for demonstration
  const platformStats = {

    activePlayers: 3,
    avgWinRate: 0,
    totalBets: 3
  }

  // Mock leaderboard data (empty for now)
  const leaderboardData = []

  return (
    <div className="top-bettors-page">
      {/* Header Section */}
      <div className="top-bettors-header">
        <h1 className="page-title">{t('topBettors.title')}</h1>
        <p className="page-subtitle">{t('topBettors.subtitle')}</p>
      </div>

      {/* Platform Statistics Cards */}
      <div className="platform-stats">
        <div className="stats-grid">
       
          
          <div className="stat-card">
            <div className="stat-value">{platformStats.activePlayers}</div>
            <div className="stat-label">{t('topBettors.platformStats.activePlayers')}</div>
            <div className="stat-description">{t('topBettors.platformStats.activePlayersValue')}</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-value">{platformStats.avgWinRate}%</div>
            <div className="stat-label">{t('topBettors.platformStats.avgWinRate')}</div>
            <div className="stat-description">{t('topBettors.platformStats.avgWinRateValue')}</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-value">{platformStats.totalBets}</div>
            <div className="stat-label">{t('topBettors.platformStats.totalBets')}</div>
            <div className="stat-description">{t('topBettors.platformStats.totalBetsValue')}</div>
          </div>
        </div>
      </div>

      {/* Leaderboard Section */}
      <div className="leaderboard-section">
        <h2 className="leaderboard-title">{t('topBettors.leaderboard.title')}</h2>
        
        {leaderboardData.length === 0 ? (
          <div className="empty-leaderboard">
            <div className="empty-state">
              <div className="empty-icon">🏆</div>
              <h3>{t('topBettors.leaderboard.noRankings')}</h3>
              <p>{t('topBettors.leaderboard.beFirst')}</p>
            </div>
          </div>
        ) : (
          <div className="leaderboard-table">
            <div className="table-header">
              <div className="header-cell">{t('topBettors.leaderboard.rank')}</div>
              <div className="header-cell">{t('topBettors.leaderboard.player')}</div>
              <div className="header-cell">{t('topBettors.leaderboard.totalBets')}</div>
              <div className="header-cell">{t('topBettors.leaderboard.winRate')}</div>
              <div className="header-cell">{t('topBettors.leaderboard.totalWinnings')}</div>
            </div>
            {/* Leaderboard rows would go here when data is available */}
          </div>
        )}
      </div>

      {/* About Section */}
      <div className="about-section">
        <h3 className="about-title">{t('topBettors.about.title')}</h3>
        <p className="about-description">{t('topBettors.about.description')}</p>
      </div>
    </div>
  )
}

export default TopBettors
