import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaClock, FaNewspaper, FaSearch, FaFilter, FaRefresh, FaSpinner } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';
import { useTranslation } from '../../hooks/useTranslation';
import newsService from '../../services/newsService';
import './LiveNews.css';

const LiveNews = () => {
  const { isDarkMode } = useTheme();
  const { t, language } = useTranslation();
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSource, setSelectedSource] = useState('all');
  const [lastUpdated, setLastUpdated] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  // Categories and sources
  const categories = [
    { value: 'all', label: language === 'zh' ? '全部' : 'All' },
    { value: 'crypto', label: language === 'zh' ? '加密货币' : 'Cryptocurrency' },
    { value: 'defi', label: language === 'zh' ? 'DeFi' : 'DeFi' },
    { value: 'nft', label: language === 'zh' ? 'NFT' : 'NFT' },
    { value: 'regulation', label: language === 'zh' ? '监管' : 'Regulation' }
  ];

  const sources = [
    { value: 'all', label: language === 'zh' ? '全部来源' : 'All Sources' },
    { value: 'CNBC Crypto World', label: 'CNBC Crypto World' },
    { value: 'CoinTelegraph', label: 'CoinTelegraph' },
    { value: 'CoinMarketCap', label: 'CoinMarketCap' }
  ];

  // Load news data
  const loadNews = async (showRefreshSpinner = false) => {
    try {
      if (showRefreshSpinner) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }
      setError('');

      const newsData = await newsService.getAllNews();
      setNews(newsData);
      setFilteredNews(newsData);
      setLastUpdated(new Date());
    } catch (err) {
      console.error('Error loading news:', err);
      setError(language === 'zh' ? '加载新闻失败，请稍后重试' : 'Failed to load news. Please try again later.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Initial load
  useEffect(() => {
    loadNews();
  }, []);

  // Auto-refresh every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      loadNews(true);
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(interval);
  }, []);

  // Filter news based on search query, category, and source
  useEffect(() => {
    let filtered = news;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.source.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by source
    if (selectedSource !== 'all') {
      filtered = filtered.filter(item => item.source === selectedSource);
    }

    setFilteredNews(filtered);
  }, [news, searchQuery, selectedCategory, selectedSource]);

  // Handle manual refresh
  const handleRefresh = () => {
    loadNews(true);
  };

  // Handle news item click
  const handleNewsClick = (newsItem) => {
    window.open(newsItem.link, '_blank', 'noopener,noreferrer');
  };

  // Format time
  const formatTime = (timeString) => {
    if (!timeString) return '';
    
    // If it's already a formatted string like "2 hours ago", return as is
    if (timeString.includes('ago') || timeString.includes('小时前') || timeString.includes('天前')) {
      return timeString;
    }
    
    // Otherwise, format the timestamp
    try {
      const date = new Date(timeString);
      const now = new Date();
      const diffMs = now - date;
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      const diffDays = Math.floor(diffHours / 24);

      if (diffHours < 1) {
        return language === 'zh' ? '刚刚' : 'Just now';
      } else if (diffHours < 24) {
        return language === 'zh' ? `${diffHours}小时前` : `${diffHours}h ago`;
      } else if (diffDays < 7) {
        return language === 'zh' ? `${diffDays}天前` : `${diffDays}d ago`;
      } else {
        return date.toLocaleDateString();
      }
    } catch (error) {
      return timeString;
    }
  };

  // Get source icon
  const getSourceIcon = (source) => {
    switch (source) {
      case 'CNBC Crypto World':
        return '📺';
      case 'CoinTelegraph':
        return '📰';
      case 'CoinMarketCap':
        return '📊';
      default:
        return '📄';
    }
  };

  // Get category color
  const getCategoryColor = (category) => {
    switch (category) {
      case 'crypto':
        return '#9945FF';
      case 'defi':
        return '#10b981';
      case 'nft':
        return '#8b5cf6';
      case 'regulation':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className={`live-news-container ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Header */}
      <div className="news-header">
        <div className="news-title-section">
          <h2 className="news-title">
            <FaNewspaper className="news-icon" />
            {language === 'zh' ? '实时新闻' : 'Live News'}
          </h2>
          <p className="news-subtitle">
            {language === 'zh' ? '实时加密货币新闻和市场动态' : 'Real-time cryptocurrency news and market updates'}
          </p>
        </div>
        
        <div className="news-controls">
          <button 
            className={`refresh-btn ${refreshing ? 'refreshing' : ''}`}
            onClick={handleRefresh}
            disabled={refreshing}
          >
            {refreshing ? <FaSpinner className="spinning" /> : <FaRefresh />}
          </button>
          
          {lastUpdated && (
            <div className="last-updated">
              <FaClock />
              <span>
                {language === 'zh' ? '最后更新' : 'Last updated'}: {lastUpdated.toLocaleTimeString()}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="news-filters">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder={language === 'zh' ? '搜索新闻...' : 'Search news...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-container">
          <FaFilter className="filter-icon" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-select"
          >
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-container">
          <select
            value={selectedSource}
            onChange={(e) => setSelectedSource(e.target.value)}
            className="filter-select"
          >
            {sources.map(source => (
              <option key={source.value} value={source.value}>
                {source.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="news-loading">
          <FaSpinner className="spinning" />
          <p>{language === 'zh' ? '加载中...' : 'Loading...'}</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="news-error">
          <p>{error}</p>
          <button onClick={() => loadNews()} className="retry-btn">
            {language === 'zh' ? '重试' : 'Retry'}
          </button>
        </div>
      )}

      {/* News Grid */}
      {!loading && !error && (
        <div className="news-grid">
          {filteredNews.length === 0 ? (
            <div className="no-news">
              <FaNewspaper />
              <p>{language === 'zh' ? '暂无新闻' : 'No news found'}</p>
            </div>
          ) : (
            filteredNews.map((newsItem) => (
              <div
                key={newsItem.id}
                className="news-card"
                onClick={() => handleNewsClick(newsItem)}
              >
                {/* News Image */}
                {newsItem.image && (
                  <div className="news-image-container">
                    <img
                      src={newsItem.image}
                      alt={newsItem.title}
                      className="news-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="news-overlay">
                      <FaExternalLinkAlt className="external-link-icon" />
                    </div>
                  </div>
                )}

                {/* News Content */}
                <div className="news-content">
                  {/* Source and Category */}
                  <div className="news-meta">
                    <div className="news-source">
                      <span className="source-icon">{getSourceIcon(newsItem.source)}</span>
                      <span className="source-name">{newsItem.source}</span>
                    </div>
                    <div 
                      className="news-category"
                      style={{ backgroundColor: getCategoryColor(newsItem.category) }}
                    >
                      {newsItem.category}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="news-title-text">{newsItem.title}</h3>

                  {/* Summary */}
                  {newsItem.summary && (
                    <p className="news-summary">{newsItem.summary}</p>
                  )}

                  {/* Time */}
                  <div className="news-time">
                    <FaClock />
                    <span>{formatTime(newsItem.time)}</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="news-card-hover"></div>
              </div>
            ))
          )}
        </div>
      )}

      {/* News Stats */}
      {!loading && !error && filteredNews.length > 0 && (
        <div className="news-stats">
          <p>
            {language === 'zh' ? `显示 ${filteredNews.length} 条新闻` : `Showing ${filteredNews.length} news articles`}
          </p>
        </div>
      )}
    </div>
  );
};

export default LiveNews;
