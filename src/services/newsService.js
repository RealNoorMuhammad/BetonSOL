// News scraping service for crypto and global news
class NewsService {
  constructor() {
    this.baseUrl = 'https://api.allorigins.win/get?url=';
    this.cache = new Map();
    this.cacheTimeout = 5 * 60 * 1000; // 5 minutes cache
  }

  // Proxy function to avoid CORS issues
  async fetchWithProxy(url) {
    try {
      const response = await fetch(`${this.baseUrl}${encodeURIComponent(url)}`);
      const data = await response.json();
      return data.contents;
    } catch (error) {
      console.error('Proxy fetch error:', error);
      throw error;
    }
  }

  // Parse HTML content safely
  parseHTML(html) {
    const parser = new DOMParser();
    return parser.parseFromString(html, 'text/html');
  }

  // Scrape CNBC Crypto World news
  async scrapeCNBCCryptoNews() {
    const cacheKey = 'cnbc_crypto_news';
    const cached = this.getCachedData(cacheKey);
    if (cached) return cached;

    try {
      const html = await this.fetchWithProxy('https://www.cnbc.com/cryptoworld/');
      const doc = this.parseHTML(html);
      const newsItems = [];

      // Extract news articles from CNBC Crypto World
      const articleElements = doc.querySelectorAll('article, .Card, .ArticleCard, .TeaserCard');
      
      articleElements.forEach((element, index) => {
        if (index >= 20) return; // Limit to 20 articles

        try {
          const titleElement = element.querySelector('h2, h3, .Card-title, .ArticleCard-title, .TeaserCard-title, a[data-module="ArticleCard"]');
          const linkElement = element.querySelector('a[href*="/cryptoworld/"], a[href*="/crypto/"]');
          const imageElement = element.querySelector('img');
          const timeElement = element.querySelector('time, .Card-time, .ArticleCard-time');
          const summaryElement = element.querySelector('p, .Card-summary, .ArticleCard-summary');

          if (titleElement && linkElement) {
            const title = titleElement.textContent?.trim();
            const link = linkElement.href?.startsWith('http') ? linkElement.href : `https://www.cnbc.com${linkElement.href}`;
            const image = imageElement?.src || imageElement?.getAttribute('data-src') || '';
            const time = timeElement?.textContent?.trim() || new Date().toLocaleDateString();
            const summary = summaryElement?.textContent?.trim() || '';

            if (title && title.length > 10) {
              newsItems.push({
                id: `cnbc_${Date.now()}_${index}`,
                title,
                summary,
                link,
                image: image.startsWith('http') ? image : `https://www.cnbc.com${image}`,
                source: 'CNBC Crypto World',
                time,
                category: 'crypto',
                timestamp: new Date().toISOString()
              });
            }
          }
        } catch (error) {
          console.warn('Error parsing CNBC article:', error);
        }
      });

      // If no articles found with the above selectors, try alternative approach
      if (newsItems.length === 0) {
        const links = doc.querySelectorAll('a[href*="/cryptoworld/"], a[href*="/crypto/"]');
        links.forEach((link, index) => {
          if (index >= 15) return;
          
          const title = link.textContent?.trim();
          const href = link.href?.startsWith('http') ? link.href : `https://www.cnbc.com${link.href}`;
          
          if (title && title.length > 10 && !title.includes('CNBC') && !title.includes('Menu')) {
            newsItems.push({
              id: `cnbc_alt_${Date.now()}_${index}`,
              title,
              summary: '',
              link: href,
              image: '',
              source: 'CNBC Crypto World',
              time: new Date().toLocaleDateString(),
              category: 'crypto',
              timestamp: new Date().toISOString()
            });
          }
        });
      }

      this.setCachedData(cacheKey, newsItems);
      return newsItems;
    } catch (error) {
      console.error('Error scraping CNBC Crypto news:', error);
      return this.getFallbackCNBCNews();
    }
  }

  // Fallback CNBC news data
  getFallbackCNBCNews() {
    return [
      {
        id: 'cnbc_fallback_1',
        title: 'Bitcoin rebounds to $111,000 level as Wall Street rallies',
        summary: 'Bitcoin climbed back above $111,000 as broader markets showed strength, with crypto investors watching for continued momentum.',
        link: 'https://www.cnbc.com/cryptoworld/',
        image: 'https://image.cnbcfm.com/api/v1/image/107327208-1703091600000-GettyImages-1868400001.jpg',
        source: 'CNBC Crypto World',
        time: '2 hours ago',
        category: 'crypto',
        timestamp: new Date().toISOString()
      },
      {
        id: 'cnbc_fallback_2',
        title: 'Bitcoin falls more than 8% in a week as crypto pullback continues',
        summary: 'The cryptocurrency market experienced significant volatility with Bitcoin leading the decline amid broader market uncertainty.',
        link: 'https://www.cnbc.com/cryptoworld/',
        image: 'https://image.cnbcfm.com/api/v1/image/107327208-1703091600000-GettyImages-1868400001.jpg',
        source: 'CNBC Crypto World',
        time: '1 day ago',
        category: 'crypto',
        timestamp: new Date().toISOString()
      },
      {
        id: 'cnbc_fallback_3',
        title: 'Why there could be a digital asset treasury bubble',
        summary: 'Analysis suggests potential risks in digital asset treasury management as corporate adoption accelerates.',
        link: 'https://www.cnbc.com/cryptoworld/',
        image: 'https://image.cnbcfm.com/api/v1/image/107327208-1703091600000-GettyImages-1868400001.jpg',
        source: 'CNBC Crypto World',
        time: '2 days ago',
        category: 'crypto',
        timestamp: new Date().toISOString()
      }
    ];
  }

  // Scrape CoinTelegraph news
  async scrapeCoinTelegraphNews() {
    const cacheKey = 'cointelegraph_news';
    const cached = this.getCachedData(cacheKey);
    if (cached) return cached;

    try {
      const html = await this.fetchWithProxy('https://cointelegraph.com/');
      const doc = this.parseHTML(html);
      const newsItems = [];

      // Extract articles from CoinTelegraph
      const articleElements = doc.querySelectorAll('article, .post-card, .post-card-inline');
      
      articleElements.forEach((element, index) => {
        if (index >= 15) return;

        try {
          const titleElement = element.querySelector('h2, h3, .post-card-inline__title, .post-card__title');
          const linkElement = element.querySelector('a');
          const imageElement = element.querySelector('img');
          const timeElement = element.querySelector('time, .post-card-inline__date, .post-card__date');
          const summaryElement = element.querySelector('p, .post-card-inline__text, .post-card__text');

          if (titleElement && linkElement) {
            const title = titleElement.textContent?.trim();
            const link = linkElement.href?.startsWith('http') ? linkElement.href : `https://cointelegraph.com${linkElement.href}`;
            const image = imageElement?.src || imageElement?.getAttribute('data-src') || '';
            const time = timeElement?.textContent?.trim() || new Date().toLocaleDateString();
            const summary = summaryElement?.textContent?.trim() || '';

            if (title && title.length > 10) {
              newsItems.push({
                id: `cointelegraph_${Date.now()}_${index}`,
                title,
                summary,
                link,
                image: image.startsWith('http') ? image : `https://cointelegraph.com${image}`,
                source: 'CoinTelegraph',
                time,
                category: 'crypto',
                timestamp: new Date().toISOString()
              });
            }
          }
        } catch (error) {
          console.warn('Error parsing CoinTelegraph article:', error);
        }
      });

      this.setCachedData(cacheKey, newsItems);
      return newsItems;
    } catch (error) {
      console.error('Error scraping CoinTelegraph news:', error);
      return this.getFallbackCoinTelegraphNews();
    }
  }

  // Fallback CoinTelegraph news data
  getFallbackCoinTelegraphNews() {
    return [
      {
        id: 'cointelegraph_fallback_1',
        title: 'Bitcoin ETF inflows hit record high as institutional adoption grows',
        summary: 'Major Bitcoin ETFs see unprecedented inflows as institutional investors increase their crypto allocations.',
        link: 'https://cointelegraph.com/',
        image: 'https://cointelegraph.com/images/bitcoin-etf.jpg',
        source: 'CoinTelegraph',
        time: '3 hours ago',
        category: 'crypto',
        timestamp: new Date().toISOString()
      },
      {
        id: 'cointelegraph_fallback_2',
        title: 'Ethereum network upgrade brings improved scalability',
        summary: 'Latest Ethereum upgrade introduces significant improvements to transaction throughput and gas efficiency.',
        link: 'https://cointelegraph.com/',
        image: 'https://cointelegraph.com/images/ethereum-upgrade.jpg',
        source: 'CoinTelegraph',
        time: '6 hours ago',
        category: 'crypto',
        timestamp: new Date().toISOString()
      }
    ];
  }

  // Scrape general crypto news from multiple sources
  async scrapeGeneralCryptoNews() {
    const cacheKey = 'general_crypto_news';
    const cached = this.getCachedData(cacheKey);
    if (cached) return cached;

    try {
      const html = await this.fetchWithProxy('https://coinmarketcap.com/news/');
      const doc = this.parseHTML(html);
      const newsItems = [];

      const articleElements = doc.querySelectorAll('article, .news-card, .cmc-news-card');
      
      articleElements.forEach((element, index) => {
        if (index >= 10) return;

        try {
          const titleElement = element.querySelector('h2, h3, .news-card-title, .cmc-news-card-title');
          const linkElement = element.querySelector('a');
          const imageElement = element.querySelector('img');
          const timeElement = element.querySelector('time, .news-card-date, .cmc-news-card-date');

          if (titleElement && linkElement) {
            const title = titleElement.textContent?.trim();
            const link = linkElement.href?.startsWith('http') ? linkElement.href : `https://coinmarketcap.com${linkElement.href}`;
            const image = imageElement?.src || imageElement?.getAttribute('data-src') || '';
            const time = timeElement?.textContent?.trim() || new Date().toLocaleDateString();

            if (title && title.length > 10) {
              newsItems.push({
                id: `cmc_${Date.now()}_${index}`,
                title,
                summary: '',
                link,
                image: image.startsWith('http') ? image : `https://coinmarketcap.com${image}`,
                source: 'CoinMarketCap',
                time,
                category: 'crypto',
                timestamp: new Date().toISOString()
              });
            }
          }
        } catch (error) {
          console.warn('Error parsing CMC article:', error);
        }
      });

      this.setCachedData(cacheKey, newsItems);
      return newsItems;
    } catch (error) {
      console.error('Error scraping general crypto news:', error);
      return this.getFallbackGeneralNews();
    }
  }

  // Fallback general crypto news
  getFallbackGeneralNews() {
    return [
      {
        id: 'general_fallback_1',
        title: 'BNB Chain announces major ecosystem expansion',
        summary: 'BNB Chain reveals new partnerships and developments that could significantly impact the ecosystem.',
        link: 'https://coinmarketcap.com/news/',
        image: 'https://coinmarketcap.com/images/bnb-chain.jpg',
        source: 'CoinMarketCap',
        time: '4 hours ago',
        category: 'crypto',
        timestamp: new Date().toISOString()
      },
      {
        id: 'general_fallback_2',
        title: 'DeFi protocols see record TVL growth',
        summary: 'Total Value Locked in decentralized finance protocols reaches new all-time highs.',
        link: 'https://coinmarketcap.com/news/',
        image: 'https://coinmarketcap.com/images/defi-tvl.jpg',
        source: 'CoinMarketCap',
        time: '8 hours ago',
        category: 'crypto',
        timestamp: new Date().toISOString()
      }
    ];
  }

  // Get all news from multiple sources
  async getAllNews() {
    try {
      const [cnbcNews, cointelegraphNews, generalNews] = await Promise.allSettled([
        this.scrapeCNBCCryptoNews(),
        this.scrapeCoinTelegraphNews(),
        this.scrapeGeneralCryptoNews()
      ]);

      const allNews = [];
      
      if (cnbcNews.status === 'fulfilled') {
        allNews.push(...cnbcNews.value);
      }
      
      if (cointelegraphNews.status === 'fulfilled') {
        allNews.push(...cointelegraphNews.value);
      }
      
      if (generalNews.status === 'fulfilled') {
        allNews.push(...generalNews.value);
      }

      // Sort by timestamp (newest first)
      return allNews.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    } catch (error) {
      console.error('Error fetching all news:', error);
      return this.getFallbackAllNews();
    }
  }

  // Fallback combined news
  getFallbackAllNews() {
    return [
      ...this.getFallbackCNBCNews(),
      ...this.getFallbackCoinTelegraphNews(),
      ...this.getFallbackGeneralNews()
    ];
  }

  // Cache management
  getCachedData(key) {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data;
    }
    return null;
  }

  setCachedData(key, data) {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  // Clear cache
  clearCache() {
    this.cache.clear();
  }

  // Get news by category
  async getNewsByCategory(category) {
    const allNews = await this.getAllNews();
    return allNews.filter(news => news.category === category);
  }

  // Search news
  async searchNews(query) {
    const allNews = await this.getAllNews();
    const lowercaseQuery = query.toLowerCase();
    
    return allNews.filter(news => 
      news.title.toLowerCase().includes(lowercaseQuery) ||
      news.summary.toLowerCase().includes(lowercaseQuery) ||
      news.source.toLowerCase().includes(lowercaseQuery)
    );
  }
}

// Create singleton instance
const newsService = new NewsService();

export default newsService;
