import React, { useState, useEffect } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import './CryptoMarquee.css'

const CryptoMarquee = () => {
  const [cryptoData, setCryptoData] = useState([])
  const [loading, setLoading] = useState(true)
  const { isDarkMode } = useTheme()

  useEffect(() => {
    fetchCryptoPrices()
    // Refresh prices every 30 seconds
    const interval = setInterval(fetchCryptoPrices, 30000)
    return () => clearInterval(interval)
  }, [])

  const fetchCryptoPrices = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h,24h'
      )
      const data = await response.json()
      
      if (Array.isArray(data)) {
        setCryptoData(data)
        setLoading(false)
      }
    } catch (error) {
      console.error('Error fetching crypto prices:', error)
      setLoading(false)
    }
  }

  const formatPrice = (price) => {
    if (price < 0.01) {
      return `$${price.toFixed(6)}`
    } else if (price < 1) {
      return `$${price.toFixed(4)}`
    } else if (price < 100) {
      return `$${price.toFixed(2)}`
    } else {
      return `$${price.toLocaleString()}`
    }
  }

  const formatChange = (change) => {
    const isPositive = change >= 0
    return {
      value: `${isPositive ? '+' : ''}${change.toFixed(2)}%`,
      isPositive
    }
  }

  if (loading) {
    return (
      <div className={`crypto-marquee ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="marquee-container">
          <div className="marquee-content">
            <div className="loading-text">Loading crypto prices...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`crypto-marquee ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="marquee-container">
        <div className="marquee-content">
          {cryptoData.map((crypto, index) => {
            const change24h = formatChange(crypto.price_change_percentage_24h)
            return (
              <div key={crypto.id} className="crypto-item">
                <div className="crypto-info">
                  <img 
                    src={crypto.image} 
                    alt={crypto.name}
                    className="crypto-icon"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  <div className="crypto-details">
                    <span className="crypto-symbol">{crypto.symbol.toUpperCase()}</span>
                    <span className="crypto-price">{formatPrice(crypto.current_price)}</span>
                  </div>
                </div>
                <div className={`price-change ${change24h.isPositive ? 'positive' : 'negative'}`}>
                  {change24h.value}
                </div>
              </div>
            )
          })}
          {/* Duplicate the content for seamless loop */}
          {cryptoData.map((crypto, index) => {
            const change24h = formatChange(crypto.price_change_percentage_24h)
            return (
              <div key={`duplicate-${crypto.id}`} className="crypto-item">
                <div className="crypto-info">
                  <img 
                    src={crypto.image} 
                    alt={crypto.name}
                    className="crypto-icon"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  <div className="crypto-details">
                    <span className="crypto-symbol">{crypto.symbol.toUpperCase()}</span>
                    <span className="crypto-price">{formatPrice(crypto.current_price)}</span>
                  </div>
                </div>
                <div className={`price-change ${change24h.isPositive ? 'positive' : 'negative'}`}>
                  {change24h.value}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CryptoMarquee
