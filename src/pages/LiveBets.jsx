import React, { useState, useEffect } from 'react'
import { getAllBets, addPrediction, subscribeToBets } from '../services/bettingService'
import { testSupabaseConnection, getAllBetsSimple } from '../services/debugService'
import { useTranslation } from '../hooks/useTranslation'
import toast from 'react-hot-toast'
import './LiveBets.css'

function LiveBets() {
  const { t } = useTranslation()
  const [bets, setBets] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [predictionData, setPredictionData] = useState({})
  const [submittingPredictions, setSubmittingPredictions] = useState({})

  const categories = [
    { value: 'all', label: t('liveBets.categories.all') },
    { value: 'real-world', label: t('liveBets.categories.realWorld') },
    { value: 'price-prediction', label: t('liveBets.categories.pricePrediction') },
    { value: 'meme-coin', label: t('liveBets.categories.memeCoin') }
  ]

  const getCategoryLabel = (category) => {
    const cat = categories.find(c => c.value === category)
    return cat ? cat.label : category
  }

  const getCategoryColor = (category) => {
    const colors = {
      'real-world': '#3498db',
      'price-prediction': '#e74c3c',
      'meme-coin': '#f39c12'
    }
    return colors[category] || '#95a5a6'
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getTimeRemaining = (endDate) => {
    const now = new Date()
    const end = new Date(endDate)
    const diff = end - now
    
    if (diff <= 0) return t('liveBets.timeRemaining.ended')
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    
    if (days > 0) {
      return `${days}d ${hours}h left`
    }
    if (hours > 0) {
      return `${hours}h ${minutes}m left`
    }
    return `${minutes}m left`
  }

  const fetchBets = async () => {
    try {
      setLoading(true)
      
      // First test the connection
      const connectionTest = await testSupabaseConnection()
      if (!connectionTest.success) {
        throw new Error(`Supabase connection failed: ${connectionTest.error}`)
      }
      
      // Use the simple version for debugging
      const { data, error } = await getAllBetsSimple()
      
      if (error) {
        throw error
      }
      
      setBets(data || [])
    } catch (error) {
      console.error('Error fetching bets:', error)
      toast.error(t('liveBets.messages.loadError', { error: error.message }))
    } finally {
      setLoading(false)
    }
  }

  const handlePredictionSubmit = async (betId, choice) => {
    const bnbAddress = predictionData[betId]?.bnbAddress
    
    if (!bnbAddress) {
      toast.error(t('liveBets.messages.bnbAddressRequired'))
      return
    }
    
    if (!/^0x[a-fA-F0-9]{40}$/.test(bnbAddress)) {
      toast.error(t('liveBets.messages.bnbAddressInvalid'))
      return
    }
    
    setSubmittingPredictions(prev => ({ ...prev, [betId]: true }))
    
    try {
      const { data, error } = await addPrediction(betId, bnbAddress, choice)
      
      if (error) {
        throw error
      }
      
      toast.success(t('liveBets.messages.predictionSuccess'))
      
      // Clear the BNB address for this bet
      setPredictionData(prev => ({
        ...prev,
        [betId]: { ...prev[betId], bnbAddress: '' }
      }))
      
      // Refresh bets to show updated counts
      await fetchBets()
      
    } catch (error) {
      console.error('Error submitting prediction:', error)
      toast.error(error.message || t('liveBets.messages.predictionError'))
    } finally {
      setSubmittingPredictions(prev => ({ ...prev, [betId]: false }))
    }
  }

  const handleBnbAddressChange = (betId, value) => {
    setPredictionData(prev => ({
      ...prev,
      [betId]: { ...prev[betId], bnbAddress: value }
    }))
  }

  const filteredBets = selectedCategory === 'all' 
    ? bets 
    : bets.filter(bet => bet.category === selectedCategory)

  useEffect(() => {
    fetchBets()
    
    // Subscribe to real-time updates
    const subscription = subscribeToBets(() => {
      fetchBets()
    })
    
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  if (loading) {
    return (
      <div className="live-bets-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>{t('liveBets.messages.loading')}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="live-bets-page">
      <div className="live-bets-container">
        <div className="live-bets-header">
          <h1 className="page-title">{t('liveBets.title')}</h1>
          <p className="page-subtitle">{t('liveBets.subtitle')}</p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.value}
              className={`filter-button ${selectedCategory === category.value ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Bets Grid */}
        {filteredBets.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">{t('liveBets.emptyState.icon')}</div>
            <h3>{t('liveBets.emptyState.title')}</h3>
            <p>
              {selectedCategory === 'all' 
                ? t('liveBets.emptyState.messageAll')
                : t('liveBets.emptyState.messageCategory', { category: getCategoryLabel(selectedCategory).toLowerCase() })
              }
            </p>
          </div>
        ) : (
          <div className="bets-grid">
            {filteredBets.map(bet => (
              <div key={bet.id} className="bet-card">
                <div className="bet-header">
                  <div className="bet-title">{bet.title}</div>
                  <div 
                    className="bet-category"
                    style={{ backgroundColor: getCategoryColor(bet.category) }}
                  >
                    {getCategoryLabel(bet.category)}
                  </div>
                </div>
                
                <div className="bet-description">{bet.description}</div>
                
                <div className="bet-meta">
                  <div className="bet-creator">
                    <span className="meta-label">{t('liveBets.betCard.createdBy')}</span>
                    <span className="bnb-address">
                      {bet.creator_bnb_address.slice(0, 6)}...{bet.creator_bnb_address.slice(-4)}
                    </span>
                  </div>
                  <div className="bet-dates">
                    <div className="bet-date">
                      <span className="meta-label">{t('liveBets.betCard.starts')}</span>
                      <span>{formatDate(bet.start_date)}</span>
                    </div>
                    <div className="bet-date">
                      <span className="meta-label">{t('liveBets.betCard.ends')}</span>
                      <span>{formatDate(bet.end_date)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bet-status">
                  <div className="time-remaining">
                    {getTimeRemaining(bet.end_date)}
                  </div>
                  <div className="prediction-count">
                    {bet.total_predictions} {t('liveBets.betCard.predictions')}
                  </div>
                </div>
                
                <div className="prediction-section">
                  <div className="prediction-stats">
                    <div className="choice-stat">
                      <span className="choice-label">{t('liveBets.betCard.choiceA')}</span>
                      <span className="choice-count">{bet.choiceA_count}</span>
                    </div>
                    <div className="choice-stat">
                      <span className="choice-label">{t('liveBets.betCard.choiceB')}</span>
                      <span className="choice-count">{bet.choiceB_count}</span>
                    </div>
                  </div>
                  
                  <div className="prediction-form">
                    <input
                      type="text"
                      placeholder={t('liveBets.betCard.bnbAddressPlaceholder')}
                      value={predictionData[bet.id]?.bnbAddress || ''}
                      onChange={(e) => handleBnbAddressChange(bet.id, e.target.value)}
                      className="prediction-input"
                    />
                    <div className="prediction-buttons">
                      <button
                        className="choice-button choice-a"
                        onClick={() => handlePredictionSubmit(bet.id, 'A')}
                        disabled={submittingPredictions[bet.id]}
                      >
                        {submittingPredictions[bet.id] ? t('liveBets.betCard.submitting') : t('liveBets.betCard.submitChoiceA')}
                      </button>
                      <button
                        className="choice-button choice-b"
                        onClick={() => handlePredictionSubmit(bet.id, 'B')}
                        disabled={submittingPredictions[bet.id]}
                      >
                        {submittingPredictions[bet.id] ? t('liveBets.betCard.submitting') : t('liveBets.betCard.submitChoiceB')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default LiveBets
