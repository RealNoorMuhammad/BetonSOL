import React, { useState, useEffect } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { FaTimes, FaArrowUp, FaArrowDown, FaExternalLinkAlt, FaGlobe, FaTwitter, FaReddit, FaGithub } from 'react-icons/fa'
import { useTranslation } from '../../hooks/useTranslation'
import { useTheme } from '../../contexts/ThemeContext'
import './CryptoModal.css'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

const CryptoModal = ({ coin, isOpen, onClose }) => {
  const [chartData, setChartData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [timeframe, setTimeframe] = useState('7d')
  const { t } = useTranslation()
  const { isDarkMode } = useTheme()

  useEffect(() => {
    if (isOpen && coin) {
      fetchChartData()
    }
  }, [isOpen, coin, timeframe])

  const fetchChartData = async () => {
    if (!coin) return
    
    setLoading(true)
    try {
      const days = timeframe === '1d' ? 1 : timeframe === '7d' ? 7 : timeframe === '30d' ? 30 : 90
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=${days}&interval=${days <= 1 ? 'hourly' : 'daily'}`
      )
      const data = await response.json()
      
      const labels = data.prices.map((price, index) => {
        const date = new Date(price[0])
        if (days <= 1) {
          return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        } else {
          return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        }
      })

      const prices = data.prices.map(price => price[1])
      const volumes = data.total_volumes.map(vol => vol[1])

      setChartData({
        labels,
        datasets: [
          {
            label: 'Price (USD)',
            data: prices,
            borderColor: coin.price_change_percentage_24h >= 0 ? '#10b981' : '#ef4444',
            backgroundColor: coin.price_change_percentage_24h >= 0 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: coin.price_change_percentage_24h >= 0 ? '#10b981' : '#ef4444',
            pointHoverBorderColor: '#fff',
            pointHoverBorderWidth: 2,
          }
        ]
      })
    } catch (error) {
      console.error('Error fetching chart data:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatNumber = (num) => {
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`
    return `$${num.toFixed(2)}`
  }

  const formatPercentage = (num) => {
    const isPositive = num >= 0
    return (
      <span className={`percentage ${isPositive ? 'positive' : 'negative'}`}>
        {isPositive ? <FaArrowUp /> : <FaArrowDown />}
        {Math.abs(num).toFixed(2)}%
      </span>
    )
  }

  if (!isOpen || !coin) return null

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: coin.price_change_percentage_24h >= 0 ? '#10b981' : '#ef4444',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return `$${context.parsed.y.toLocaleString()}`
          }
        }
      }
    },
    scales: {
      x: {
        display: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false
        },
        ticks: {
          color: '#9ca3af',
          maxTicksLimit: 8
        }
      },
      y: {
        display: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false
        },
        ticks: {
          color: '#9ca3af',
          callback: function(value) {
            return formatNumber(value)
          }
        }
      }
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart'
    },
    interaction: {
      intersect: false,
      mode: 'index'
    }
  }

  return (
    <div className="crypto-modal-overlay" onClick={onClose}>
      <div className={`crypto-modal ${isDarkMode ? 'dark' : 'light'}`} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="coin-info">
            <img src={coin.image} alt={coin.name} className="coin-image" />
            <div className="coin-details">
              <h2>{coin.name}</h2>
              <span className="coin-symbol">{coin.symbol?.toUpperCase()}</span>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="modal-content">
            <div className="price-section">
              <div className="current-price">
                <span className="price">${coin.current_price?.toLocaleString()}</span>
                {formatPercentage(coin.price_change_percentage_24h)}
              </div>
              <div className="price-stats">
                <div className="stat">
                  <span className="label">{t('crypto.modal.high24h')}</span>
                  <span className="value">${coin.high_24h?.toLocaleString()}</span>
                </div>
                <div className="stat">
                  <span className="label">{t('crypto.modal.low24h')}</span>
                  <span className="value">${coin.low_24h?.toLocaleString()}</span>
                </div>
                <div className="stat">
                  <span className="label">{t('crypto.modal.marketCap')}</span>
                  <span className="value">{formatNumber(coin.market_cap)}</span>
                </div>
                <div className="stat">
                  <span className="label">{t('crypto.modal.volume24h')}</span>
                  <span className="value">{formatNumber(coin.total_volume)}</span>
                </div>
              </div>
            </div>

          <div className="chart-section">
            <div className="chart-header">
              <h3>{t('crypto.modal.priceChart')}</h3>
              <div className="timeframe-selector">
                {['1d', '7d', '30d', '90d'].map((tf) => (
                  <button
                    key={tf}
                    className={`timeframe-btn ${timeframe === tf ? 'active' : ''}`}
                    onClick={() => setTimeframe(tf)}
                  >
                    {t(`crypto.timeframes.${tf}`)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="chart-container">
              {loading ? (
                <div className="chart-loading">
                  <div className="loading-spinner"></div>
                  <p>{t('crypto.modal.loadingChart')}</p>
                </div>
              ) : chartData ? (
                <Line data={chartData} options={chartOptions} />
              ) : (
                <div className="chart-error">
                  <p>{t('crypto.modal.chartError')}</p>
                </div>
              )}
            </div>
          </div>

          <div className="additional-info">
            <div className="info-grid">
              <div className="info-card">
                <h4>{t('crypto.modal.marketData')}</h4>
                <div className="info-item">
                  <span>{t('crypto.modal.marketCapRank')}</span>
                  <span>#{coin.market_cap_rank}</span>
                </div>
                <div className="info-item">
                  <span>{t('crypto.modal.circulatingSupply')}</span>
                  <span>{coin.circulating_supply?.toLocaleString()}</span>
                </div>
                <div className="info-item">
                  <span>{t('crypto.modal.totalSupply')}</span>
                  <span>{coin.total_supply?.toLocaleString() || 'N/A'}</span>
                </div>
                <div className="info-item">
                  <span>{t('crypto.modal.maxSupply')}</span>
                  <span>{coin.max_supply?.toLocaleString() || 'N/A'}</span>
                </div>
              </div>

              <div className="info-card">
                <h4>{t('crypto.modal.priceChanges')}</h4>
                <div className="info-item">
                  <span>1h</span>
                  {formatPercentage(coin.price_change_percentage_1h_in_currency)}
                </div>
                <div className="info-item">
                  <span>24h</span>
                  {formatPercentage(coin.price_change_percentage_24h_in_currency)}
                </div>
                <div className="info-item">
                  <span>7d</span>
                  {formatPercentage(coin.price_change_percentage_7d_in_currency)}
                </div>
                <div className="info-item">
                  <span>30d</span>
                  {formatPercentage(coin.price_change_percentage_30d_in_currency)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CryptoModal
