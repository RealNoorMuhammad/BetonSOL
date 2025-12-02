// English translations
export const en = {
  // Navbar
  navbar: {
    logo: "BetonSOL",
    liveFeed: "Live Bets",
    leaderboard: "Top Bettors", 
    oracle: "SOL Oracle",
    howToBet: "Docs",
    connect: "Create Bet",
    language: "English"
  },
  
  // Hero Section
  hero: {
    liveNow: "Live Betting",
    title: "Bet on SOL",
    titleHighlight: "Predictions",
    subtitle: "Make predictions on SOL price movements and market events.",
    connectTwitter: "Connect Wallet",
    viewLiveBets: "View Live Bets",
    onChainVerified: "SOL blockchain verified",
    freePoints: "Start with 0.01 SOL",
    instantSettlement: "Instant SOL payouts",
    allTimesET: "All times in UTC",
    followTwitter: "Follow",
    followHandle: "@BetonSOL",
    followOnX: "on X",
    contractAddress: "SOL Contract Address",
    contractCopied: "Contract address copied!"
  },
  
  // About Section
  about: {
    title: "What is Bet on SOL?",
    content: "Bet on SOL is a community-driven, decentralized betting arena built on the SOL Chain.",
    description: "On our platform, you can create and share your own bets (predictions) directly on our website or even through our official Twitter account. Simply comment with your bet details in this format:",
    formatTitle: "Format:",
    format: {
      title: "Title: [your prediction title]", 
      description: "Description: [details about your prediction]",
      bnbAddress: "SOL Address: [your wallet address]",
      startDate: "Start Date: [when the bet begins]",
      endDate: "End Date: [when the bet ends]"
    },
    exampleTitle: "Example:",
    example: "@BetonSOL BTC Price , BTC will reach 200k in December , 0x3F8a...A8CC , 21/10/2025 , 30/12/2025",
    submission: "Once submitted, your bet will go live on our website, where the community can view and vote on your prediction in real time.",
    conclusion: "Every bet is secured and verifiable on-chain, guaranteeing full transparency, fairness, and zero house control. Compete for bragging rights, rewards, and join one of the most engaging decentralized communities in the crypto space."
  },

  // Features Section
  features: {
    title: "Features & Highlights",
    items: [
      {
        title: "User-created bets",
        description: "You define the scenario — others engage."
      },
      {
        title: "Live leaderboard / live voting feed",
        description: "Watch predictions move in real time."
      },
      {
        title: "On-chain verification",
        description: "All stakes and outcomes are transparent."
      },
      {
        title: "Start/End timing",
        description: "You choose when your bet opens and closes."
      },
      {
        title: "Direct wallet integration",
        description: "Use your SOL wallet address; no middle-man fund holding."
      },
      {
        title: "Community reputation & rewards",
        description: "Build your name. Win not just rewards but recognition."
      }
    ]
  },

  // FAQ Section
  faq: {
    title: "FAQ",
    items: [
      {
        question: "What do I need to participate?",
        answer: "You'll need a wallet that supports SOL and some SOL tokens to stake. You can also launch bets if you wish."
      },
      {
        question: "How is fairness ensured?",
        answer: "All transactions and bets are recorded on the SOL Chain; the system is built to remove hidden house advantages."
      },
      {
        question: "How do I launch a bet?",
        answer: "Fill in the rate (SOL amount), title, description, your SOL wallet address, start and end dates — then submit. Your bet becomes live for the community."
      },
      {
        question: "What happens if no one participates?",
        answer: "You may choose to cancel (if permitted) or proceed — low participation means fewer votes, so community engagement helps."
      },
      {
        question: "How are payouts handled?",
        answer: "After the end date, we verify the outcome and distribute rewards to winners via blockchain transfers (or linked wallet addresses)."
      },
      {
        question: "Is betting with cryptocurrency legal?",
        answer: "Laws vary by jurisdiction. You should check your local regulations before participating."
      }
    ]
  },

  // Call to Action Section
  cta: {
    title: "Call to Action",
    subtitle: "Ready to play?",
    actions: [
      {
        icon: "🚀",
        title: "Launch a bet now",
        description: "Set the stage for the community.",
        buttonText: "Create Bet",
        buttonLink: "/create-bet"
      },
      {
        icon: "👀",
        title: "Browse live bets",
        description: "Place your vote.",
        buttonText: "View Live Bets",
        buttonLink: "/live-bets"
      }
    ],
    conclusion: "Join the revolution in prediction and betting. With Bet on SOL, you're not just placing odds — you're creating them."
  },

  // Docs
  docs: {
    getting: {
      title: "Getting Started",
      description: "Before you begin, prepare a wallet and a small amount of SOL for gas.",
      cards: [
        { title: "Set up your wallet", body: "Install MetaMask or TrustWallet and create a secure backup." },
        { title: "Fund with SOL", body: "Transfer a small amount of SOL to cover gas and stakes." },
        { title: "Switch to SOL Chain", body: "Use the SOL Smart Chain network in your wallet." },
        { title: "Explore Live Feed", body: "Browse active predictions and market activity in real time." }
      ],
      headings: {
        quickChecklist: "Quick Checklist",
        megaTips: "Pro Tips (1000+ lines demo)",
        faq: "FAQs",
        glossary: "Glossary",
        resources: "Helpful Resources"
      },
      labels: {
        tipPrefix: "Tip",
        faqQPrefix: "Question",
        faqAPrefix: "Answer",
        glossaryTermPrefix: "Term",
        glossaryDefPrefix: "Definition"
      },
      resources: [
        "How to switch to SOL Chain",
        "Understanding gas fees",
        "Creating your first prediction",
        "Security best practices"
      ]
    },
    why: {
      title: "Why choose us ?",
      heroTitle: "Why Choose Bet on SOL",
      intro: [
        "In the world of crypto and memes, confidence and conviction are everything.",
        "Bet on SOL brings both together — blending on-chain transparency with social predictions through seamless Twitter integration.",
        "Now, your opinions don’t just scroll by — they live, breathe, and earn on the blockchain."
      ],
      sections: [
        {
          icon: "bolt",
          title: "Built on SOL Chain",
          body: "Powered by the scalability and ultra-low fees of SOL Chain, Bet on SOL guarantees a fast, affordable, and borderless betting experience. Every prediction, win, and payout is permanently recorded and verifiable on-chain — fair play at crypto speed."
        },
        {
          icon: "twitter",
          title: "Social Betting Reinvented",
          body: "Connect your Twitter account directly and create predictions that instantly appear on the Live Feed. Friends and degens can jump in, take sides, and place their bets — all without leaving the platform. No forms, no friction — tweet-level simplicity with blockchain-level security."
        },
        {
          icon: "globe",
          title: "Transparent & Trustless",
          body: "Every prediction, result, and payout is handled by smart contracts — no middlemen, no manipulation. All bets are visible, verifiable, and tamper-proof, ensuring total trust between players."
        },
        {
          icon: "comments",
          title: "Community-Driven Predictions",
          body: "Bet on SOL is powered by you. Create markets around trending topics, price moves, crypto events, or real-world moments. If it's being talked about, it can be bet on."
        },
        {
          icon: "brain",
          title: "Precision = Profit",
          body: "When your predictions hit, you win directly from the pool. The smarter your calls, the more you earn. Bet on data, vibes, or memes — but always on-chain."
        },
        {
          icon: "crystal",
          title: "Oracle-Powered Accuracy",
          body: "Outcomes are verified using SOL Oracle feeds and AI-powered aggregation from multiple trusted sources for instant, accurate, and unbiased results."
        },
        {
          icon: "shield",
          title: "The Bet on SOL Advantage",
          body: "Full control with Twitter-based predictions, live feeds, and on-chain dashboards that track every win, loss, and market in real time — transparent and community-first."
        },
        {
          icon: "lock",
          title: "Security & Privacy",
          body: "Your wallet and identity stay secure with modern authentication. Encrypted sessions, verified identity without exposing personal data, and a private, tamper‑proof betting experience."
        },
        {
          icon: "rocket",
          title: "Ready to Play?",
          body: "Join Bet on SOL and experience the next evolution of social betting — where your tweets become trades, your predictions go live, and every win is on‑chain."
        }
      ]
    },
    ai: {
      title: "AI-Powered Resolution",
      heroTitle: "AI-Enabled Resolution — Bet on SOL",
      intro: "How Bet on SOL automatically confirms and settles crypto prediction markets — fast, transparent, and tailored for on-chain crypto outcomes.",
      blocks: [
        {
          key: "overview",
          title: "Quick Overview — Why our system matters",
          body: [
            "When a market expires, Bet on SOL runs a crypto-first resolution pipeline that turns real-world price & event signals into verifiable outcomes.",
            "Predictions created via Twitter or the web Live Feed are resolved without manual intervention — winners are determined, payouts recorded on SOL Chain, and the full reasoning is stored for auditability."
          ]
        },
        {
          key: "flow",
          title: "Resolution Flow (rearranged for clarity)",
          steps: [
            { label: "Step A — Market closes", text: "The market hits its expiration and locks for new stakes." },
            { label: "Step B — Data gathering (1–2 min)", text: "We pull live crypto and event data from many independent sources." },
            { label: "Step C — Price & on-chain verification (instant checks)", text: "Price snapshots and on-chain evidence are cross-checked for immediate price bets." },
            { label: "Step D — AI adjudication (2–3 min)", text: "Our AI ingests all evidence, forms a reasoned decision, and prepares a verifiable rationale." },
            { label: "Step E — On-chain settlement", text: "Result, transaction hashes and reasoning are written to the SOL Chain. Winners claim payouts." }
          ]
        },
        {
          key: "layers",
          title: "Layered Verification Architecture (three stacked cards)",
          layers: [
            {
              title: "Layer 1 — Price & On-chain Verification",
              points: [
                "Real-time price samples taken from multiple exchanges and oracles.",
                "On-chain checks: traces, confirmations, and relevant contract state.",
                "Instant outcome for pure price-based predictions."
              ]
            },
            {
              title: "Layer 2 — Event & Market Data Aggregation",
              points: [
                "Crypto-specific feeds: exchange prices, orderbooks, liquidity events.",
                "Protocol & chain data: BscScan / subgraph queries, transaction history.",
                "Supplementary feeds when required: sports scores and trusted news."
              ]
            },
            {
              title: "Layer 3 — AI Analysis & Consensus",
              points: [
                "AI synthesizes signals and weighs source reliability.",
                "Produces a decision + human-readable reasoning log.",
                "Cross-verifies conclusions across multiple APIs."
              ]
            }
          ]
        },
        {
          key: "sources",
          title: "Crypto Data Sources (selected examples)",
          bullets: [
            "CoinGecko, CoinMarketCap, Binance API",
            "Chainlink & other decentralized oracles",
            "Glassnode, Messari (on-chain & market analytics)",
            "BscScan / TheGraph / Covalent (on-chain queries & indexed data)",
            "Exchange orderbook snapshots & historical trade feeds"
          ],
          note: "We combine centralized exchange reads with oracle and on-chain evidence so no single feed can flip a result."
        },
        {
          key: "timeline",
          title: "Timeline (concise)",
          bullets: [
            "Market expiration — betting closes.",
            "Data collection (1–2 minutes) — parallel pulls from exchanges, oracles, and on-chain indexes.",
            "AI analysis (2–3 minutes) — consensus decision and explanation generated.",
            "Resolution & payouts — result recorded on SOL Chain; winners paid."
          ]
        },
        {
          key: "audit",
          title: "Transparency & Auditability (on-chain proof)",
          bullets: [
            "The data sources used (API snapshots + timestamps).",
            "The AI’s decision log (summary reasoning).",
            "The on-chain transaction hash that finalizes the outcome."
          ],
          footer: "Users can verify all of the above on the dashboard or directly on SOL Chain explorers."
        },
        {
          key: "twitter",
          title: "Twitter + Live Feed integration",
          bullets: [
            "Connect Twitter and create a prediction — it appears on the Live Feed instantly.",
            "Accepted bets lock funds in smart contracts and enter the same pipeline.",
            "Twitter-origin markets are resolved identically to web-created markets."
          ]
        },
        {
          key: "why",
          title: "Why this design wins for degens",
          bullets: [
            "Speed: fast data pulls + AI = quick, reliable settlement.",
            "Robustness: multiple sources + on-chain evidence prevent tampering.",
            "Auditability: full chain of custody; every decision is verifiable.",
            "Social-first: effortless Twitter → Live Feed turns chatter into markets."
          ]
        }
      ]
    }
  },

  // Oracle Page
  oracle: {
    title: "SOL Oracle",
    subtitle: "Live feed of bet resolutions with oracle sources",
    developmentBanner: {
      title: "Under Development",
      message: "This feature will be live until November 22, 2025",
      status: "Coming Soon"
    },
    transparency: {
      title: "Oracle Transparency",
      description: "Live feed of bet resolutions with oracle sources"
    },
    screenshotMode: "Screenshot Mode",
    pyth: "Pyth",
    failed: "Failed",
    resetFilters: "Reset Filters",
    noEvents: "No oracle events yet. Waiting for bet resolutions...",
    liveFeed: "Live Feed",
    oracleSources: "Oracle Sources",
    resolutionHistory: "Resolution History",
    dataIntegrity: "Data Integrity",
    realTimeUpdates: "Real-time Updates"
  },

  // Top Bettors Page
  topBettors: {
    title: "Top Bettors",
    subtitle: "Leaderboard and platform statistics",
    platformStats: {
      totalVolume: "Total Volume",
      totalVolumeValue: "Points wagered",
      activePlayers: "Players",
      activePlayersValue: "Active users",
      avgWinRate: "Avg Win Rate",
      avgWinRateValue: "Platform average",
      totalBets: "Total Bets",
      totalBetsValue: "Matched bets"
    },
    leaderboard: {
      title: "Top Bettors",
      noRankings: "No rankings yet",
      beFirst: "Be the first to win some bets!",
      rank: "Rank",
      player: "Player",
      totalBets: "Total Bets",
      winRate: "Win Rate",
      totalWinnings: "Total Winnings"
    },
    about: {
      title: "About Top Bettors",
      description: "The Top Bettors leaderboard showcases the most successful players on our platform. Track your performance, compete with other players, and climb the rankings by making accurate predictions. All statistics are updated in real-time and verified on-chain for complete transparency."
    }
  },

  // Create Bet Page
  createBet: {
    title: "Create New Bet",
    subtitle: "Start a new prediction and let others join in!",
    form: {
      title: "Bet Title",
      titlePlaceholder: "Enter a catchy title for your bet",
      description: "Description",
      descriptionPlaceholder: "Describe what people are betting on...",
      bnbAddress: "Your SOL Address",
      bnbAddressPlaceholder: "0x...",
      category: "Category",
      startDate: "Start Date",
      endDate: "End Date",
      submitButton: "Create Bet",
      submittingButton: "Creating Bet..."
    },
    categories: {
      realWorld: "Real-World Events",
      pricePrediction: "Price Prediction", 
      memeCoin: "Meme Coin Price Prediction"
    },
    validation: {
      titleRequired: "Title is required",
      descriptionRequired: "Description is required",
      bnbAddressRequired: "SOL Address is required",
      bnbAddressInvalid: "Please enter a valid SOL address",
      startDateRequired: "Start date is required",
      endDateRequired: "End date is required",
      endDateAfterStart: "End date must be after start date",
      fixErrors: "Please fix the errors below"
    },
    messages: {
      success: "Bet created successfully!",
      error: "Failed to create bet. Please try again."
    }
  },

  // Live Bets Page
  liveBets: {
    title: "Live Bets",
    subtitle: "Join the prediction game and make your mark!",
    categories: {
      all: "All Bets",
      realWorld: "Real-World Events",
      pricePrediction: "Price Prediction",
      memeCoin: "Meme Coin Price Prediction"
    },
    betCard: {
      createdBy: "Created by:",
      starts: "Starts:",
      ends: "Ends:",
      predictions: "predictions",
      choiceA: "Yes",
      choiceB: "No",
      bnbAddressPlaceholder: "Enter your SOL address (0x...)",
      submitChoiceA: "Yes",
      submitChoiceB: "No",
      submitting: "..."
    },
    emptyState: {
      icon: "🎯",
      title: "No bets found",
      messageAll: "Be the first to create a bet!",
      messageCategory: "No {category} bets yet."
    },
    messages: {
      loading: "Loading bets...",
      loadError: "Failed to load bets: {error}",
      predictionSuccess: "Prediction submitted successfully!",
      predictionError: "Failed to submit prediction",
      bnbAddressRequired: "Please enter your SOL address",
      bnbAddressInvalid: "Please enter a valid SOL address",
      alreadyPredicted: "You have already made a prediction on this bet"
    },
    timeRemaining: {
      ended: "Ended"
    }
  },

  // Crypto Market Section
  crypto: {
    title: "Dynamic Market Pricing (AMM)",
    subtitle: "Live crypto prices with real-time market data and interactive charts",
    search: {
      placeholder: "Search token or symbol...",
      label: "Search"
    },
    loading: "Loading...",
    error: "Failed to load prices. Please try again later.",
    pagination: {
      previous: "Previous",
      next: "Next",
      page: "Page",
      of: "of",
      showing: "Showing",
      results: "results"
    },
    card: {
      marketCap: "Market Cap",
      volume24h: "24h Volume",
      clickToView: "Click to view details",
      rank: "Rank"
    },
    modal: {
      title: "Coin Details",
      priceChart: "Price Chart",
      marketData: "Market Data",
      priceChanges: "Price Changes",
      circulatingSupply: "Circulating Supply",
      totalSupply: "Total Supply",
      maxSupply: "Max Supply",
      marketCapRank: "Market Cap Rank",
      high24h: "24h High",
      low24h: "24h Low",
      loadingChart: "Loading chart data...",
      chartError: "Failed to load chart data",
      currentPrice: "Current Price",
      priceChange24h: "24h Change",
      marketCap: "Market Cap",
      volume24h: "24h Volume",
      supply: "Supply Information",
      priceHistory: "Price History"
    },
    timeframes: {
      "1d": "1 Day",
      "7d": "7 Days", 
      "30d": "30 Days",
      "90d": "90 Days"
    }
  },

  // Security & Transparency Section
  security: {
    title: "Security & Transparency",
    subtitle: "Your funds and data are protected by industry-leading security measures",
    overview: {
      title: "Security Overview",
      description: "Bet on SOL implements multiple layers of security to ensure your funds and personal data remain safe at all times."
    },
    features: {
      smartContracts: {
        title: "Smart Contract Security",
        description: "All betting logic is implemented in audited smart contracts on the SOL Chain",
        points: [
          "Open-source code available for public review",
          "Multiple security audits by leading blockchain security firms",
          "Immutable contract logic prevents manipulation",
          "All transactions are publicly verifiable on-chain"
        ]
      },
      walletSecurity: {
        title: "Wallet Security",
        description: "Your wallet remains completely under your control",
        points: [
          "Non-custodial: We never hold your private keys",
          "Direct wallet integration with MetaMask and WalletConnect",
          "Private keys never leave your device",
          "You maintain full control over your funds"
        ]
      },
      dataProtection: {
        title: "Data Protection",
        description: "Your personal information is protected with enterprise-grade security",
        points: [
          "End-to-end encryption for all data transmission",
          "No personal data stored on our servers",
          "GDPR compliant data handling practices",
          "Regular security assessments and updates"
        ]
      },
      transparency: {
        title: "Full Transparency",
        description: "Every aspect of our platform is designed for maximum transparency",
        points: [
          "All betting outcomes are publicly verifiable",
          "Real-time blockchain transaction tracking",
          "Open-source oracle integration",
          "Community-driven governance model"
        ]
      }
    },
    audits: {
      title: "Security Audits",
      description: "Our smart contracts have been thoroughly audited by industry experts",
      firms: [
        "CertiK - Comprehensive smart contract audit",
        "Quantstamp - Security vulnerability assessment", 
        "ConsenSys Diligence - Code review and testing",
        "OpenZeppelin - Security best practices validation"
      ]
    },
    compliance: {
      title: "Regulatory Compliance",
      description: "We maintain the highest standards of regulatory compliance",
      standards: [
        "AML/KYC procedures for enhanced security",
        "Regular compliance audits and reporting",
        "Transparent fee structure and terms",
        "User protection and dispute resolution mechanisms"
      ]
    }
  },

  // Documentation Page
  docsPage: {
    title: "Documentation",
    searchPlaceholder: "Search documentation...",
    navigation: {
      overview: "Overview",
      ourVision: "Our Vision",
      gettingStarted: "Getting Started",
      whyChooseBetonsol: "Why Choose BetonSOL",
      roadmap: "Roadmap",
      webapp: "Webapp",
      twitterDashboard: "Twitter Dashboard",
      aiPoweredResolution: "AI-Powered Resolution",
      liveMarket: "Live Market",
      cryptoMarket: "Crypto Market",
      globalMarket: "Global Market",
      tokenomics: "Tokenomics",
      betonsolToken: "BetonSOL Token",
      privacy: "Privacy",
      finalWords: "Final Words",
      privacyPolicy: "Privacy Policy"
    },
    content: {
      overview: {
        title: "Overview",
        subtitle: "BetonSOL is a decentralized prediction platform built on the SOL Smart Chain, allowing users to create and participate in real-time predictions called BETS about cryptocurrency prices, meme coins, and global market trends.",
        goal: "The goal of BetonSOL is to make community predictions transparent, fun, and rewarding through blockchain automation and AI moderation.",
        howItWorks: {
          title: "How It Works",
          description: "Users can easily create their own BET directly on the BetonSOL web application.",
          whenCreating: "When creating a BET, users provide:",
          fields: {
            title: "Title – The main prediction statement (e.g., \"BTC will reach $200k in December\").",
            description: "Description – Details or reasoning behind the prediction.",
            bnbAddress: "SOL Address – The creator's wallet address to receive potential rewards.",
            betType: "BET Type – Choose between Real-World Price Prediction or Memecoin Prediction.",
            startDate: "Start Date – When the BET becomes active.",
            endDate: "End Date – When the BET concludes."
          },
          processing: "Once submitted, the BET is processed by our backend system.",
          moderation: "If it passes our AI-powered content moderation and complies with community standards (no spam, scams, or 18+ content), it appears automatically on the Live BETs page."
        },
        liveBets: {
          title: "Live BETs and Participation",
          description: "The Live BETs page displays all approved and active predictions.",
          participation: "Community members can explore ongoing BETs and choose whether they believe a prediction will come true (Option A) or not (Option B).",
          environment: "This creates a transparent, competitive, and social environment where users can test their market instincts and compete for accuracy."
        },
        rewards: {
          title: "Rewards",
          description: "Each BET creator's wallet address is securely stored in the BetonSOL backend.",
          payout: "When a BET's prediction is verified as correct, BetonSOL automatically rewards the creator with 0.1 SOL, sent directly to their registered wallet."
        },
        twitterIntegration: {
          title: "Twitter Integration",
          description: "BetonSOL also allows users to create BETs directly through Twitter (X) using a simple format.",
          instruction: "Just tag @BetonSOL in your comment under our main pinned tweet, and follow this format:",
          format: {
            title: "Title: [your prediction title]",
            description: "Description: [details about your prediction]",
            bnbAddress: "SOL Address: [your wallet address]",
            startDate: "Start Date: [when the bet begins]",
            endDate: "End Date: [when the bet ends]"
          },
          verification: "If the format is valid and the content is appropriate, our AI-powered backend automatically verifies and publishes your BET on the Live BETs page.",
          example: "Example: @BetonSOL BTC Price , BTC will reach 200k in December , 0x3F8a...A8CC , 21/10/2025 , 30/12/2025"
        },
        summary: {
          title: "Summary",
          description: "BetonSOL bridges blockchain, AI, and community engagement to create a transparent, decentralized prediction ecosystem.",
          conclusion: "Whether it's predicting Bitcoin's next all-time high, a meme coin's explosion, or global market moves — BetonSOL gives everyone the tools to bet smart, earn fair, and be part of the future of decentralized predictions."
        }
      },
      ourVision: {
        title: "Our Vision",
        subtitle: "At BetonSOL, our vision is to redefine the way people interact with predictions turning opinions, insights, and intuitions into transparent, verifiable, and rewarding experiences powered by blockchain and AI.",
        introduction: "We believe that everyone should have the freedom to make predictions about what they believe in — whether it's crypto prices, meme trends, or global events — and to be rewarded fairly when they're right. Our platform exists to bridge trust, technology, and transparency, ensuring that every BET is recorded, traceable, and truly community-driven.",
        communityEmpowerment: {
          title: "Empowering Community Predictions",
          description: "The heart of BetonSOL lies in community empowerment. We want to give every user — from crypto enthusiasts to market analysts — a voice that counts. Through BetonSOL, predictions are no longer private guesses or social media debates; they become blockchain-verified events where the truth is settled transparently by time and results.",
          conclusion: "Our vision is to build a global community of thinkers, forecasters, and believers who use data, intuition, and collective intelligence to shape the future of decentralized predictions."
        },
        blockchainTransparency: {
          title: "Transparency Through Blockchain",
          description: "In traditional prediction systems, trust is often centralized — managed by platforms that control the results and payouts. BetonSOL changes that.",
          implementation: "By leveraging the SOL Smart Chain, we ensure that every BET, every wallet, and every transaction is public, verifiable, and immutable. This blockchain transparency builds a foundation of trust, making BetonSOL not just another prediction app, but a community ledger of truth and outcomes."
        },
        aiIntegrity: {
          title: "AI-Powered Integrity",
          description: "Our AI-driven backend safeguards the quality and fairness of the ecosystem. From filtering out spam and harmful content to verifying the structure of Twitter BETs, BetonSOL ensures that only legitimate, well-formed, and safe predictions make it to the Live BETs feed.",
          future: "As we evolve, AI will play an even greater role — automating verification, detecting trends, and creating intelligent insights that help users make smarter BETs."
        },
        socialIntegration: {
          title: "Bridging Social and On-Chain Worlds",
          description: "We envision a future where social interaction meets blockchain integrity. That's why BetonSOL connects directly with Twitter (X) — allowing users to post their BETs publicly, engage socially, and still have every action recorded on-chain.",
          vision: "It's more than prediction; it's social transparency — a fusion of entertainment, insight, and technology."
        },
        ultimateGoal: {
          title: "Our Goal",
          description: "Our ultimate goal is to make BetonSOL a global hub for decentralized predictions — a space where innovation meets participation, and where community trust replaces central authority. We aim to expand BetonSOL into areas beyond crypto, including sports, global events, and entertainment, while keeping the same principle: decentralized truth, verified by results."
        },
        conclusion: {
          title: "In Short",
          description: "We envision a future where predictions aren't just opinions — they're opportunities.",
          final: "BetonSOL is building that future, one BET at a time."
        },
        isRichContent: true
      },
      whyChooseBetonsol: {
        title: "Why Choose BetonSOL",
        subtitle: "In a world filled with noise, speculation, and fake promises, BetonSOL stands out as a transparent, decentralized, and AI-driven prediction ecosystem where community voices truly matter.",
        introduction: "We're not just building another betting platform — we're building a trust network that rewards truth, participation, and innovation.",
        sections: [
          {
            title: "100% Decentralized Foundation",
            description: "Every BET, wallet, and transaction on BetonSOL is recorded on the SOL Smart Chain, ensuring full transparency and immutability.",
            details: [
              "No hidden results, no centralized control — only verifiable, blockchain-backed outcomes.",
              "This guarantees that predictions and payouts are secure, auditable, and tamper-proof."
            ]
          },
          {
            title: "AI-Powered Moderation and Automation",
            description: "BetonSOL uses artificial intelligence to maintain quality, safety, and fairness across the platform.",
            details: [
              "Our AI system automatically detects and filters out spam, 18+ content, or low-quality BETs before they go live.",
              "It also verifies Twitter-submitted BETs, ensuring proper format and authenticity.",
              "The result: a clean, fair, and intelligent prediction ecosystem."
            ]
          },
          {
            title: "Seamless Twitter Integration",
            description: "Unlike traditional platforms, BetonSOL connects directly with social media.",
            details: [
              "Users can create BETs by simply tagging @BetonSOL on Twitter with our custom format.",
              "Once verified by our backend, those BETs appear live on the BetonSOL website.",
              "It's effortless, social, and blockchain-connected — the perfect blend of community engagement and on-chain trust."
            ]
          },
          {
            title: "Transparent and Instant Rewards",
            description: "Accuracy deserves recognition.",
            details: [
              "When a BET turns out to be correct, BetonSOL automatically rewards the BET creator with 0.1 SOL, sent directly to their registered wallet.",
              "No delays, no manual approval — rewards are instant and trustless, powered by smart contract logic."
            ]
          },
          {
            title: "Community-Driven Ecosystem",
            description: "BetonSOL isn't controlled by a single authority.",
            details: [
              "It's powered by people — creators who make predictions, participants who engage, and believers who share insights.",
              "This creates a growing global network of thinkers, traders, and forecasters all contributing to one transparent, collective intelligence system."
            ]
          },
          {
            title: "Real-World and Meme Coin Predictions",
            description: "From serious financial insights to fun meme coin predictions, BetonSOL gives users the freedom to bet on what they believe in.",
            details: [
              "Whether you're predicting Bitcoin's next move, Dogecoin's trend, or even a global event, BetonSOL is your decentralized stage to showcase your foresight."
            ]
          },
          {
            title: "Built for the Future",
            description: "BetonSOL is designed to evolve.",
            details: [
              "We're continuously expanding our features — from AI-powered result verification to deeper Web3 integrations — making sure our users always stay at the front of decentralized innovation."
            ]
          }
        ],
        mission: "Our mission is simple: empower the community, reward accuracy, and redefine prediction markets through technology.",
        conclusion: {
          title: "In Essence",
          description: "Choose BetonSOL because it's not just about betting — it's about building truth, rewarding vision, and trusting the blockchain."
        },
        isRichContent: true
      },
      webapp: {
        title: "Webapp",
        subtitle: "Explore our web application features, user interface, and how to navigate the platform effectively.",
        introduction: "This is placeholder content. The actual content for this section will be provided later.",
        dashboardOverview: {
          title: "Dashboard Overview",
          description: "The BetonSOL dashboard is the starting point for every user.",
          features: [
            "Create BET – Start your own prediction by filling in the form fields (title, description, SOL wallet, BET type, start and end date).",
            "Live BETs – View all currently active and approved BETs across the platform.",
            "My BETs – Track your personal created BETs and monitor their progress or results.",
            "Leaderboard (coming soon) – A ranking system for top predictors based on accuracy and engagement."
          ],
          conclusion: "The design ensures users can see everything in one glance – active BETs, personal stats, and trending predictions."
        },
        creatingBet: {
          title: "Creating a BET",
          description: "Users can create a BET in just a few simple steps:",
          steps: [
            "Click \"Create BET\" on the navigation bar.",
            "Fill in the form with:",
            "Title – Short statement of your prediction.",
            "Description – Supporting details or logic behind your prediction.",
            "SOL Address – Your wallet address for rewards.",
            "BET Type – Choose from Real-World Price Prediction or Memecoin Prediction.",
            "Start Date and End Date – Define the prediction duration.",
            "Click Submit BET."
          ],
          conclusion: "Once submitted, the BET is automatically processed by our backend system. If it passes moderation (non-spam and safe content), it will be published live on the Live BETs page."
        },
        liveBetsPage: {
          title: "Live BETs Page",
          description: "The Live BETs page displays all approved and currently active predictions.",
          features: [
            "BET Title and Description",
            "Creator Wallet (partially hidden for privacy)",
            "BET Type (Price / Meme)",
            "Start and End Date",
            "Options for users to choose:",
            "A – True (Yes, this prediction will come true)",
            "B – False (No, it won't)"
          ],
          conclusion: "Users can browse, search, and interact with predictions directly on-chain. The design ensures a real-time and fair prediction environment."
        },
        walletConnection: {
          title: "Wallet Connection",
          description: "BetonSOL supports SOL Smart Chain wallets such as MetaMask and WalletConnect.",
          features: [
            "Users can connect their wallet in one click using the \"Connect Wallet\" button located in the top-right corner of the app.",
            "The connected wallet is used for:",
            "Submitting new BETs",
            "Receiving rewards",
            "Participating in other users' BETs"
          ],
          conclusion: "All wallet activity remains non-custodial, meaning BetonSOL never stores or controls user funds."
        },
        aiModeration: {
          title: "AI Moderation and Backend Verification",
          description: "Every submitted BET goes through an AI-based verification process that ensures the platform stays safe and clean.",
          features: [
            "The backend automatically checks for:",
            "Proper format and fields",
            "Inappropriate or adult content",
            "Spam or malicious addresses"
          ],
          conclusion: "Only verified BETs are displayed publicly in the Live BETs section. Rejected or flagged BETs stay hidden and are reviewed internally to ensure the integrity of the ecosystem."
        },
        rewardsSystem: {
          title: "Rewards System",
          description: "When a BET's prediction is confirmed as accurate, BetonSOL automatically sends 0.1 SOL to the BET creator's wallet.",
          features: [
            "The system uses the creator wallet data stored in the backend, so payouts are secure, accurate, and handled automatically.",
            "Future updates will include community verification, multi-tier rewards, and staking pools for active participants."
          ]
        },
        mobileDarkMode: {
          title: "Mobile and Dark Mode",
          description: "The BetonSOL WebApp is fully responsive and designed with a dark, modern theme for a smooth user experience.",
          conclusion: "Whether users are on mobile, tablet, or desktop, the interface adapts perfectly for accessibility and visual consistency."
        },
        upcomingFeatures: {
          title: "Upcoming Features",
          description: "We're constantly upgrading the WebApp to improve performance and functionality.",
          features: [
            "Leaderboard & Achievements",
            "AI-Generated Insights for better predictions",
            "SOL Pooling System for community-based BETs",
            "Real-Time Notifications for BET status updates"
          ]
        },
        summary: {
          title: "In Summary",
          description: "The BetonSOL WebApp is where predictions meet blockchain automation.",
          conclusion: "From creating BETs to earning SOL rewards – everything happens here, fast, fair, and fully decentralized."
        },
        isRichContent: true
      },
      twitterDashboard: {
        title: "Twitter Dashboard",
        subtitle: "The Twitter Dashboard is our upcoming social prediction and engagement hub where your X (Twitter) activity meets the BetonSOL ecosystem.",
        introduction: "We're currently developing a system that allows users to connect their X account, manage their social performance, and earn points directly from their engagement.",
        features: [
          {
            title: "1. X Account Integration",
            description: "Users will be able to connect their official X (Twitter) account directly to BetonSOL in one click. This connection will allow us to track key metrics such as posts, engagement, followers, and interactions — transforming your social presence into tangible rewards.",
            details: [
              "One-click X account connection",
              "Real-time metrics tracking",
              "Social presence monetization",
              "Seamless integration with BetonSOL ecosystem"
            ]
          },
          {
            title: "2. Personalized Dashboards",
            description: "Each connected user will have their own Twitter Dashboard, displaying:",
            details: [
              "Tweet performance analytics",
              "Daily and weekly engagement stats",
              "Earned BetonSOL points",
              "Bonus rewards for viral or trending tweets"
            ]
          }
        ],
        pointsSystem: {
          title: "3. Points System",
          description: "Every user will earn points based on:",
          points: [
            "Tweeting with BetonSOL-related hashtags",
            "Predicting viral trends or memes",
            "Interacting with official BetonSOL tweets",
            "Engaging with community posts"
          ],
          conclusion: "Points can be added, stacked, or transferred to your in-app wallet."
        },
        inAppPurchases: {
          title: "4. In-App Purchases & Withdrawals",
          description: "Use your points inside the BetonSOL ecosystem to:",
          uses: [
            "Buy BET tokens",
            "Access exclusive BET tiers",
            "Unlock community rewards or NFT badges"
          ],
          conclusion: "You can also withdraw your earned points as SOL or convert them into in-platform credits — giving your social engagement real blockchain value."
        },
        communityRankings: {
          title: "5. Community Rankings (Coming Soon)",
          description: "A leaderboard will showcase the top influencers and community participants based on their Twitter engagement scores and activity consistency."
        },
        conclusion: {
          title: "In Short",
          description: "The Twitter Dashboard bridges Web3 + SocialFi, giving every tweet the power to earn, predict, and compete.",
          final: "Coming Soon — Your X account will soon be your key to the BetonSOL ecosystem."
        }
      },
      aiPoweredResolution: {
        title: "AI-Powered Resolution",
        subtitle: "At BetonSOL, fairness and accuracy are at the heart of every prediction.",
        introduction: "That's why our platform is powered by an advanced AI Resolution System ensuring every BET is verified transparently, automatically, and without human bias.",
        howItWorks: {
          title: "How It Works",
          steps: [
            {
              title: "1. AI Data Aggregation",
              description: "Once a BET reaches its end date, our AI system scans multiple trusted data sources, news outlets, price feeds, and blockchain oracles to gather the final outcome data.",
              details: "Whether it's a SOL price prediction, memecoin trend, or a real-world event, the system collects all relevant evidence before deciding the result."
            },
            {
              title: "2. Smart Validation Engine",
              description: "The AI compares user-submitted outcomes with real-time verified data.",
              details: "It evaluates consistency, timestamps, and authenticity ensuring the final result is accurate and verifiable. No votes, no manipulation — just pure logic and data-driven truth."
            },
            {
              title: "3. Auto-Resolution & Reward Distribution",
              description: "Once the AI confirms the outcome:",
              steps: [
                "The BET is automatically marked as Resolved",
                "Winners are instantly rewarded in SOL",
                "The creator receives their bonus (0.1 SOL)"
              ],
              conclusion: "All of this happens seamlessly through our on-chain automation system, ensuring transparency for every transaction."
            },
            {
              title: "4. Fraud & Spam Detection",
              description: "Our AI moderation engine also helps detect suspicious or repetitive BETs, flag false data, and prevent manipulation.",
              conclusion: "This keeps BetonSOL fair, safe, and fully decentralized — protecting both users and the ecosystem."
            }
          ]
        },
        whyItMatters: {
          title: "Why It Matters",
          description: "Traditional prediction platforms rely on manual verification or community voting — both prone to bias and delay.",
          conclusion: "BetonSOL's AI-Powered Resolution introduces a new era of trustless automation, where facts, not opinions, determine outcomes. Every decision is data-backed, transparent, and instantly verifiable on-chain.",
          isRichContent: true
        }
      },
      cryptoMarket: {
        title: "Live Crypto Market",
        content: "Access real-time cryptocurrency market data and use it to make informed predictions."
      },
      globalMarket: {
        title: "Global Market",
        content: "Monitor global market trends and economic indicators to enhance your prediction accuracy."
      },
      betonsolToken: {
        title: "BetonSOL Token",
        subtitle: "Coming Soon",
        introduction: "The BetonSOL Token will be the core fuel powering our entire prediction ecosystem.",
        description: "Currently, our team is finalizing a comprehensive tokenomics model that focuses on utility, community rewards, and long-term sustainability.",
        whatToExpect: {
          title: "What to Expect",
          sections: [
            {
              title: "1. Utility-Driven Design",
              description: "The BetonSOL Token will serve as the primary medium of exchange within the platform enabling users to:",
              features: [
                "Create and participate in BETs",
                "Earn staking and accuracy rewards",
                "Access premium AI insights and dashboards",
                "Unlock exclusive features inside the WebApp"
              ]
            },
            {
              title: "2. Rewarding Participation",
              description: "Active users, top predictors, and community contributors will all earn BetonSOL Tokens as part of our reward and loyalty system.",
              conclusion: "The more accurate your predictions and the more you engage, the more you earn."
            },
            {
              title: "3. Governance & Community Control",
              description: "BetonSOL Token holders will play a key role in shaping the future of the ecosystem through DAO-style governance.",
              conclusion: "From voting on new features to managing reward pools, the power will be in the hands of the community."
            },
            {
              title: "4. Transparent Distribution",
              description: "Our tokenomics model will prioritize fair launch principles, ensuring:",
              features: [
                "No hidden allocations",
                "Transparent distribution",
                "Sustainable long-term growth"
              ]
            }
          ]
        },
        summary: {
          title: "In Summary",
          description: "The BetonSOL Token is not just a currency — it's the heartbeat of the BetonSOL platform, connecting users, predictions, and AI-powered automation into one unified ecosystem.",
          conclusion: "Launching Soon – The Future of Prediction Starts with BetonSOL."
        },
        isRichContent: true
      },
      finalWords: {
        title: "Final Words",
        subtitle: "At BetonSOL, our mission is to redefine how people interact with predictions transforming them from simple guesses into a transparent, rewarding, and decentralized experience.",
        mission: "We believe that the future of online prediction lies in community-driven intelligence, AI automation, and blockchain-powered trust. BetonSOL combines all three, creating a platform where every BET has purpose, proof, and potential.",
        focus: {
          title: "As we continue to build, our focus remains clear:",
          points: [
            "Empower users to create and participate in meaningful predictions.",
            "Reward accuracy and engagement through fair, on-chain distribution.",
            "Ensure transparency and safety through AI moderation and automated resolution."
          ]
        },
        vision: "BetonSOL isn't just a prediction platform it's a movement towards smarter, fairer, and more transparent participation in the digital economy.",
        gratitude: "We're grateful for every member of our growing community and excited for what's ahead from token integration to AI upgrades and cross-platform expansions.",
        conclusion: "Together, we're not just predicting the future we're building it.",
        isRichContent: true
      },
      privacy: {
        title: "Privacy Policy",
        subtitle: "Last Updated: October 2025",
        introduction: "At BetonSOL, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard data when you interact with our platform, including our WebApp, Twitter dashboard, and backend systems.",
        sections: [
          {
            title: "1. Information We Collect",
            description: "We collect only the data necessary to provide a secure and functional user experience:",
            subsections: [
              {
                title: "Wallet Information:",
                content: "Your connected SOL wallet address is used for BET creation, participation, and reward distribution. BetonSOL does not store private keys or gain control over your wallet."
              },
              {
                title: "User-Generated Content:",
                content: "BET titles, descriptions, and other content you submit to the platform are stored for moderation and public display."
              },
              {
                title: "Platform Usage Data:",
                content: "We may collect anonymized data such as IP addresses, device types, browser versions, and interaction metrics to help us improve performance and security."
              },
              {
                title: "Social Integration (Twitter):",
                content: "When connecting your Twitter (X) account, BetonSOL may access public profile data and activity relevant to platform functions. We never post on your behalf without permission."
              }
            ]
          },
          {
            title: "2. How We Use Your Information",
            description: "Your data is used strictly to:",
            points: [
              "Enable BET creation, moderation, and resolution.",
              "Facilitate reward distribution and wallet verification.",
              "Detect spam, fraud, or harmful content through AI moderation.",
              "Improve system performance and user experience."
            ],
            note: "We do not sell, rent, or trade your personal data to any third party."
          },
          {
            title: "3. Data Security",
            description: "We employ end-to-end encryption, secure database management, and AI-driven threat detection to protect all stored data. While blockchain transactions are publicly visible, BetonSOL never stores sensitive wallet credentials or user passwords."
          },
          {
            title: "4. AI and Automation Transparency",
            description: "Our AI systems analyze BET data for moderation, spam detection, and result verification. All decisions are logged and reviewed periodically to ensure fairness, accuracy, and compliance with community standards."
          },
          {
            title: "5. Third-Party Integrations",
            description: "BetonSOL may integrate with third-party services such as:",
            points: [
              "Wallet providers (MetaMask, WalletConnect)",
              "Analytics tools (for platform insights)",
              "Twitter API (for BET posting and data linkage)"
            ],
            note: "Each integration follows its own privacy policy. We encourage users to review those separately."
          },
          {
            title: "6. User Rights",
            description: "As a BetonSOL user, you have the right to:",
            points: [
              "Access and review your submitted data.",
              "Request removal of content that violates your privacy.",
              "Disconnect your wallet or Twitter account at any time."
            ],
            note: "To make a privacy request, contact us through our official support email (listed on our website)."
          },
          {
            title: "7. Updates to This Policy",
            description: "We may update this Privacy Policy periodically to reflect new features or regulatory requirements. Any changes will be published here with an updated date. Continued use of BetonSOL after updates constitutes acceptance of the revised policy."
          },
          {
            title: "8. Contact Us",
            description: "If you have questions or concerns regarding this Privacy Policy or your data, please contact us through our official support channels."
          }
        ],
        summary: {
          title: "In Summary",
          description: "Your privacy, security, and trust are our top priorities. At BetonSOL, we collect only what's necessary, use it responsibly, and protect it with the highest standards of care because a transparent platform starts with transparent privacy."
        },
        isRichContent: true
      }
    },
    overview: {
      title: "Overview",
      subtitle: "BetonSOL is a decentralized prediction platform built on the SOL Smart Chain, allowing users to create and participate in real-time predictions called BETS about cryptocurrency prices, meme coins, and global market trends.",
      goal: "The goal of BetonSOL is to make community predictions transparent, fun, and rewarding through blockchain automation and AI moderation.",
      howItWorks: {
        title: "How It Works",
        description: "Users can easily create their own BET directly on the BetonSOL web application.",
        whenCreating: "When creating a BET, users provide:",
        fields: {
          title: "Title – The main prediction statement (e.g., \"BTC will reach $200k in December\").",
          description: "Description – Details or reasoning behind the prediction.",
          bnbAddress: "SOL Address – The creator's wallet address to receive potential rewards.",
          betType: "BET Type – Choose between Real-World Price Prediction or Memecoin Prediction.",
          startDate: "Start Date – When the BET becomes active.",
          endDate: "End Date – When the BET concludes."
        },
        processing: "Once submitted, the BET is processed by our backend system.",
        moderation: "If it passes our AI-powered content moderation and complies with community standards (no spam, scams, or 18+ content), it appears automatically on the Live BETs page."
      },
      liveBets: {
        title: "Live BETs and Participation",
        description: "The Live BETs page displays all approved and active predictions.",
        participation: "Community members can explore ongoing BETs and choose whether they believe a prediction will come true (Option A) or not (Option B).",
        environment: "This creates a transparent, competitive, and social environment where users can test their market instincts and compete for accuracy."
      },
      rewards: {
        title: "Rewards",
        description: "Each BET creator's wallet address is securely stored in the BetonSOL backend.",
        payout: "When a BET's prediction is verified as correct, BetonSOL automatically rewards the creator with 0.1 SOL, sent directly to their registered wallet."
      },
      twitterIntegration: {
        title: "Twitter Integration",
        description: "BetonSOL also allows users to create BETs directly through Twitter (X) using a simple format.",
        instruction: "Just tag @BetonSOL in your comment under our main pinned tweet, and follow this format:",
        format: {
          title: "Title: [your prediction title]",
          description: "Description: [details about your prediction]",
          bnbAddress: "SOL Address: [your wallet address]",
          startDate: "Start Date: [when the bet begins]",
          endDate: "End Date: [when the bet ends]"
        },
        verification: "If the format is valid and the content is appropriate, our AI-powered backend automatically verifies and publishes your BET on the Live BETs page.",
        example: "Example: @BetonSOL BTC Price , BTC will reach 200k in December , 0x3F8a...A8CC , 21/10/2025 , 30/12/2025"
      },
      summary: {
        title: "Summary",
        description: "BetonSOL bridges blockchain, AI, and community engagement to create a transparent, decentralized prediction ecosystem.",
        conclusion: "Whether it's predicting Bitcoin's next all-time high, a meme coin's explosion, or global market moves — BetonSOL gives everyone the tools to bet smart, earn fair, and be part of the future of decentralized predictions."
      }
    }
  },

  // Getting Started Section
  gettingStarted: {
    title: "Getting Started",
    subtitle: "Join the future of decentralized prediction markets on SOL Chain",
    overview: {
      title: "Welcome to Bet on SOL",
      description: "Get ready to experience the most innovative prediction market platform built on SOL Chain. Create bets, participate in live markets, and connect your Twitter activity seamlessly."
    },
    steps: {
      walletSetup: {
        title: "1. Wallet Setup",
        description: "Connect your wallet to start betting",
        details: [
          "Install MetaMask or use WalletConnect",
          "Switch to SOL Chain network",
          "Ensure you have SOL for gas fees",
          "Your wallet remains completely under your control"
        ]
      },
      createBet: {
        title: "2. Create Your First Bet",
        description: "Start by creating a prediction market",
        details: [
          "Choose a topic you're passionate about",
          "Set your prediction parameters",
          "Define the resolution criteria",
          "Stake your SOL and launch the market"
        ]
      },
      liveBetting: {
        title: "3. Live Betting Experience",
        description: "Participate in real-time prediction markets",
        details: [
          "Browse active markets on the Live Bets page",
          "View real-time odds and market sentiment",
          "Place bets on ongoing predictions",
          "Track your positions and potential returns"
        ]
      },
      twitterIntegration: {
        title: "4. Twitter Integration",
        description: "Connect your Twitter activity to enhance your betting",
        details: [
          "Link your Twitter account securely",
          "Your Twitter comments become live betting insights",
          "Community discussions influence market dynamics",
          "Social sentiment drives prediction accuracy"
        ]
      }
    },
    features: {
      createBet: {
        title: "Create Custom Bets",
        description: "Design your own prediction markets",
        points: [
          "Set custom topics and categories",
          "Define specific resolution criteria",
          "Choose market duration and parameters",
          "Launch community-driven predictions"
        ]
      },
      liveBets: {
        title: "Live Bets Dashboard",
        description: "Real-time betting experience",
        points: [
          "View all active prediction markets",
          "Real-time odds and market updates",
          "Track betting volume and participation",
          "Monitor market sentiment and trends"
        ]
      },
      twitterComments: {
        title: "Twitter Comments Integration",
        description: "Your social activity enhances betting",
        points: [
          "Comments from Twitter accounts appear live",
          "Social sentiment influences market dynamics",
          "Community discussions drive predictions",
          "Real-time social media integration"
        ]
      },
      yourBets: {
        title: "Your Betting History",
        description: "Track all your betting activity",
        points: [
          "View bets you've created",
          "Track bets you've participated in",
          "Monitor your betting performance",
          "Analyze your prediction accuracy"
        ]
      }
    },
    benefits: {
      title: "Why Choose Bet on SOL?",
      items: [
        {
          title: "Decentralized & Transparent",
          description: "All betting logic runs on-chain with full transparency"
        },
        {
          title: "Community Driven",
          description: "Markets are created and governed by the community"
        },
        {
          title: "Social Integration",
          description: "Twitter activity enhances prediction accuracy"
        },
        {
          title: "Real-time Updates",
          description: "Live betting with instant market updates"
        }
      ]
    },
    gettingStarted: {
      title: "Ready to Start?",
      description: "Follow these simple steps to begin your prediction market journey",
      cta: "Start Betting Now"
    }
  }
};
