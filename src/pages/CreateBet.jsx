import React, { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { useTheme } from '../contexts/ThemeContext'
import { createBet } from '../services/bettingService'
import toast from 'react-hot-toast'
import './CreateBet.css'

function CreateBet() {
  const { t } = useTranslation()
  const { isDarkMode } = useTheme()
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    creator_bnb_address: '',
    category: 'real-world',
    start_date: '',
    end_date: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  const categories = [
    { value: 'real-world', label: t('createBet.categories.realWorld') },
    { value: 'price-prediction', label: t('createBet.categories.pricePrediction') },
    { value: 'meme-coin', label: t('createBet.categories.memeCoin') }
  ]

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.title.trim()) {
      newErrors.title = t('createBet.validation.titleRequired')
    }
    
    if (!formData.description.trim()) {
      newErrors.description = t('createBet.validation.descriptionRequired')
    }
    
    if (!formData.creator_bnb_address.trim()) {
      newErrors.creator_bnb_address = t('createBet.validation.bnbAddressRequired')
    } else if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(formData.creator_bnb_address.trim())) {
      newErrors.creator_bnb_address = t('createBet.validation.bnbAddressInvalid')
    }
    
    if (!formData.start_date) {
      newErrors.start_date = t('createBet.validation.startDateRequired')
    }
    
    if (!formData.end_date) {
      newErrors.end_date = t('createBet.validation.endDateRequired')
    }
    
    if (formData.start_date && formData.end_date) {
      const startDate = new Date(formData.start_date)
      const endDate = new Date(formData.end_date)
      
      if (endDate <= startDate) {
        newErrors.end_date = t('createBet.validation.endDateAfterStart')
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error(t('createBet.validation.fixErrors'))
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const betData = {
        ...formData,
        start_date: new Date(formData.start_date).toISOString(),
        end_date: new Date(formData.end_date).toISOString()
      }
      
      const { data, error } = await createBet(betData)
      
      if (error) {
        throw error
      }
      
      toast.success(t('createBet.messages.success'))
      
      // Reset form
      setFormData({
        title: '',
        description: '',
        creator_bnb_address: '',
        category: 'real-world',
        start_date: '',
        end_date: ''
      })
      
    } catch (error) {
      console.error('Error creating bet:', error)
      toast.error(error.message || t('createBet.messages.error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="create-bet-page">
      <div className="create-bet-container">
        <div className="create-bet-header">
          <h1 className="page-title">{t('createBet.title')}</h1>
          <p className="page-subtitle">{t('createBet.subtitle')}</p>
        </div>

        <div className="create-bet-form-container">
          <form onSubmit={handleSubmit} className="create-bet-form">
            <div className="form-group">
              <label htmlFor="title" className="form-label">
                {t('createBet.form.title')} *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className={`form-input ${errors.title ? 'error' : ''}`}
                placeholder={t('createBet.form.titlePlaceholder')}
                maxLength={100}
              />
              {errors.title && <span className="error-message">{errors.title}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="description" className="form-label">
                {t('createBet.form.description')} *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className={`form-textarea ${errors.description ? 'error' : ''}`}
                placeholder={t('createBet.form.descriptionPlaceholder')}
                rows={4}
                maxLength={500}
              />
              {errors.description && <span className="error-message">{errors.description}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="creator_bnb_address" className="form-label">
                Your SOL Address *
              </label>
              <input
                type="text"
                id="creator_bnb_address"
                name="creator_bnb_address"
                value={formData.creator_bnb_address}
                onChange={handleInputChange}
                className={`form-input ${errors.creator_bnb_address ? 'error' : ''}`}
                placeholder="Enter your Solana wallet address"
              />
              {errors.creator_bnb_address && <span className="error-message">{errors.creator_bnb_address}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="category" className="form-label">
                {t('createBet.form.category')} *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="form-select"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="start_date" className="form-label">
                  {t('createBet.form.startDate')} *
                </label>
                <div className="date-input-container">
                  <input
                    type="date"
                    id="start_date"
                    name="start_date"
                    value={formData.start_date}
                    onChange={handleInputChange}
                    className={`form-input date-input ${errors.start_date ? 'error' : ''}`}
                  />
                  <div className="calendar-icon">📅</div>
                </div>
                {errors.start_date && <span className="error-message">{errors.start_date}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="end_date" className="form-label">
                  {t('createBet.form.endDate')} *
                </label>
                <div className="date-input-container">
                  <input
                    type="date"
                    id="end_date"
                    name="end_date"
                    value={formData.end_date}
                    onChange={handleInputChange}
                    className={`form-input date-input ${errors.end_date ? 'error' : ''}`}
                  />
                  <div className="calendar-icon">📅</div>
                </div>
                {errors.end_date && <span className="error-message">{errors.end_date}</span>}
              </div>
            </div>

            <button
              type="submit"
              className={`submit-button ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="loading-spinner"></span>
                  {t('createBet.form.submittingButton')}
                </>
              ) : (
                t('createBet.form.submitButton')
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateBet
