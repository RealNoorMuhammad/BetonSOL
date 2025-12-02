import React, { useState, useEffect, useMemo } from 'react'
import './CryptoMarket.css'
import { useTheme } from '../../contexts/ThemeContext'
import { FaSearch, FaArrowUp, FaArrowDown, FaCoins, FaChartLine, FaDollarSign, FaGlobe } from 'react-icons/fa'

const CryptoMarket = () => {
  const { isDarkMode } = useTheme()
  const [cryptoData, setCryptoData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('market_cap')
  const [sortOrder, setSortOrder] = useState('desc')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(50)

  // Fetch crypto data from CoinGecko API
  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=500&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d'
        )
        
        if (!response.ok) {
          throw new Error('Failed to fetch crypto data')
        }
        
        const data = await response.json()
        setCryptoData(data)
        setError(null)
      } catch (err) {
        setError(err.message)
        console.error('Error fetching crypto data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCryptoData()
    
    // Refresh data every 30 seconds
    const interval = setInterval(fetchCryptoData, 30000)
    return () => clearInterval(interval)
  }, [])

  // Filter and sort crypto data
  const filteredAndSortedData = useMemo(() => {
    let filtered = cryptoData.filter(coin =>
      coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    )

    // Sort data
    filtered.sort((a, b) => {
      let aValue, bValue
      
      switch (sortBy) {
        case 'market_cap':
          aValue = a.market_cap || 0
          bValue = b.market_cap || 0
          break
        case 'price':
          aValue = a.current_price || 0
          bValue = b.current_price || 0
          break
        case 'volume':
          aValue = a.total_volume || 0
          bValue = b.total_volume || 0
          break
        case 'change_24h':
          aValue = a.price_change_percentage_24h || 0
          bValue = b.price_change_percentage_24h || 0
          break
        default:
          aValue = a.market_cap || 0
          bValue = b.market_cap || 0
      }

      if (sortOrder === 'asc') {
        return aValue - bValue
      } else {
        return bValue - aValue
      }
    })

    return filtered
  }, [cryptoData, searchQuery, sortBy, sortOrder])

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = filteredAndSortedData.slice(startIndex, endIndex)

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortOrder('desc')
    }
    setCurrentPage(1)
  }

  const formatNumber = (num) => {
    if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T'
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B'
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M'
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K'
    return num.toFixed(2)
  }

  const formatPrice = (price) => {
    if (price < 0.01) return '$' + price.toFixed(6)
    if (price < 1) return '$' + price.toFixed(4)
    return '$' + price.toFixed(2)
  }

  const getChangeIcon = (change) => {
    if (change > 0) return <FaArrowUp className="change-icon positive" />
    if (change < 0) return <FaArrowDown className="change-icon negative" />
    return null
  }

  const getChangeClass = (change) => {
    if (change > 0) return 'positive'
    if (change < 0) return 'negative'
    return 'neutral'
  }

  if (loading) {
    return (
      <div className={`crypto-market ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="crypto-header">
          <h2 className="crypto-title">
            <FaCoins className="title-icon" />
            Live Crypto Market Data
          </h2>
          <p className="crypto-subtitle">Real-time cryptocurrency prices and market data</p>
        </div>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading cryptocurrency data...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={`crypto-market ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="crypto-header">
          <h2 className="crypto-title">
            <FaCoins className="title-icon" />
            Live Crypto Market Data
          </h2>
          <p className="crypto-subtitle">Real-time cryptocurrency prices and market data</p>
        </div>
        <div className="error-container">
          <p>Error loading crypto data: {error}</p>
          <button onClick={() => window.location.reload()} className="retry-button">
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`crypto-market ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Header */}
      <div className="crypto-header">
        <h2 className="crypto-title">
          <FaCoins className="title-icon" />
          Live Crypto Market Data
        </h2>
        <p className="crypto-subtitle">Real-time cryptocurrency prices and market data</p>
      </div>

      {/* Search and Controls */}
      <div className="crypto-controls">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search cryptocurrencies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="sort-controls">
          <label>Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => handleSort(e.target.value)}
            className="sort-select"
          >
            <option value="market_cap">Market Cap</option>
            <option value="price">Price</option>
            <option value="volume">Volume</option>
            <option value="change_24h">24h Change</option>
          </select>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="crypto-stats">
        <div className="stat-card">
          <FaGlobe className="stat-icon" />
          <div className="stat-content">
            <span className="stat-label">Total Coins</span>
            <span className="stat-value">{filteredAndSortedData.length}</span>
          </div>
        </div>
        <div className="stat-card">
          <FaDollarSign className="stat-icon" />
          <div className="stat-content">
            <span className="stat-label">Total Market Cap</span>
            <span className="stat-value">
              ${formatNumber(filteredAndSortedData.reduce((sum, coin) => sum + (coin.market_cap || 0), 0))}
            </span>
          </div>
        </div>
        <div className="stat-card">
          <FaChartLine className="stat-icon" />
          <div className="stat-content">
            <span className="stat-label">Total Volume</span>
            <span className="stat-value">
              ${formatNumber(filteredAndSortedData.reduce((sum, coin) => sum + (coin.total_volume || 0), 0))}
            </span>
          </div>
        </div>
      </div>

      {/* Crypto Cards Grid */}
      <div className="crypto-cards-grid">
        {currentData.map((coin, index) => (
          <div key={coin.id} className="crypto-card">
            <div className="card-header">
              <div className="coin-info">
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="coin-image"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
                <div className="coin-details">
                  <span className="coin-name">{coin.name}</span>
                  <span className="coin-symbol">{coin.symbol.toUpperCase()}</span>
                </div>
              </div>
              <div className="coin-rank">
                #{startIndex + index + 1}
              </div>
            </div>
            
            <div className="card-content">
              <div className="price-section">
                <div className="current-price">
                  {formatPrice(coin.current_price)}
                </div>
                <div className={`price-change ${getChangeClass(coin.price_change_percentage_24h)}`}>
                  {getChangeIcon(coin.price_change_percentage_24h)}
                  {coin.price_change_percentage_24h?.toFixed(2)}%
                </div>
              </div>
              
              <div className="metrics-section">
                <div className="metric-item">
                  <span className="metric-label">Market Cap</span>
                  <span className="metric-value">
                    ${formatNumber(coin.market_cap)}
                  </span>
                </div>
                <div className="metric-item">
                  <span className="metric-label">Volume</span>
                  <span className="metric-value">
                    ${formatNumber(coin.total_volume)}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="card-footer">
              <div className="price-indicator">
                <div className={`price-trend ${getChangeClass(coin.price_change_percentage_24h)}`}>
                  {coin.price_change_percentage_24h > 0 ? '↗' : coin.price_change_percentage_24h < 0 ? '↘' : '→'}
                </div>
                <span className="trend-text">
                  {coin.price_change_percentage_24h > 0 ? 'Bullish' : coin.price_change_percentage_24h < 0 ? 'Bearish' : 'Neutral'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            Previous
          </button>
          
          <div className="pagination-info">
            Page {currentPage} of {totalPages}
          </div>
          
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            Next
          </button>
        </div>
      )}

      {/* Footer */}
      <div className="crypto-footer">
        <p>Data provided by CoinGecko API • Updates every 30 seconds</p>
      </div>
    </div>
  )
}

export default CryptoMarket
