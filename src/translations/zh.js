// Chinese translations
export const zh = {
  // Navbar
  navbar: {
    logo: "BetonSOL",
    liveFeed: "实时投注",
    leaderboard: "顶级投注者", 
    oracle: "SOL预言机",
    howToBet: "文档",
    connect: "创建投注",
    language: "中文"
  },
  
  // Hero Section
  hero: {
    liveNow: "实时投注",
    title: "SOL投注",
    titleHighlight: "预测",
    subtitle: "对SOL价格走势和市场事件进行预测。",
    connectTwitter: "连接钱包",
    viewLiveBets: "查看实时投注",
    onChainVerified: "SOL区块链验证",
    freePoints: "0.01 SOL起投",
    instantSettlement: "即时SOL支付",
    allTimesET: "所有时间均为UTC",
    followTwitter: "关注",
    followHandle: "@BetonSOL",
    followOnX: "在X上",
    contractAddress: "SOL合约地址",
    contractCopied: "合约地址已复制！"
  },
  
  // About Section
  about: {
    title: "什么是SOL投注？",
    content: "SOL投注是一个建立在SOL链上的社区驱动的去中心化投注平台。",
    description: "在我们的平台上，您可以直接在我们的网站上或通过我们的官方Twitter账户创建和分享您自己的投注（预测）。只需按照以下格式评论您的投注详情：",
    formatTitle: "格式：",
    format: {
      title: "标题：[您的预测标题]",
      description: "描述：[关于您预测的详细信息]",
      SOLAddress: "SOL地址：[您的钱包地址]",
      startDate: "开始日期：[投注开始时间]",
      endDate: "结束日期：[投注结束时间]"
    },
    exampleTitle: "示例：",
    example: "@BetonSOL BTC价格 , BTC将在12月达到20万 , 0x3F8a...A8CC , 21/10/2025 , 30/12/2025",
    submission: "提交后，您的投注将在我们的网站上上线，社区可以实时查看和投票您的预测。",
    conclusion: "每个投注都在链上得到保护和验证，保证完全的透明度、公平性和零庄家控制。争夺荣誉、奖励，并加入加密领域最具吸引力的去中心化社区之一。"
  },

  // Features Section
  features: {
    title: "功能与亮点",
    items: [
      {
        title: "用户创建的投注",
        description: "您定义场景——其他人参与。"
      },
      {
        title: "实时排行榜/实时投票动态",
        description: "实时观看预测变化。"
      },
      {
        title: "链上验证",
        description: "所有赌注和结果都是透明的。"
      },
      {
        title: "开始/结束时间",
        description: "您选择投注开放和关闭的时间。"
      },
      {
        title: "直接钱包集成",
        description: "使用您的SOL钱包地址；无中间资金托管。"
      },
      {
        title: "社区声誉与奖励",
        description: "建立您的名声。不仅赢得奖励，还获得认可。"
      }
    ]
  },

  // FAQ Section
  faq: {
    title: "常见问题",
    items: [
      {
        question: "参与需要什么？",
        answer: "您需要一个支持SOL的钱包和一些SOL代币来下注。如果您愿意，也可以发起投注。"
      },
      {
        question: "如何确保公平性？",
        answer: "所有交易和投注都记录在SOL链上；系统旨在消除隐藏的庄家优势。"
      },
      {
        question: "如何发起投注？",
        answer: "填写费率（SOL金额）、标题、描述、您的SOL钱包地址、开始和结束日期——然后提交。您的投注将对社区开放。"
      },
      {
        question: "如果没有人参与会怎样？",
        answer: "您可以选择取消（如果允许）或继续——参与度低意味着投票较少，所以社区参与很重要。"
      },
      {
        question: "如何处理支付？",
        answer: "在结束日期后，我们验证结果并通过区块链转账（或链接的钱包地址）向获胜者分发奖励。"
      },
      {
        question: "使用加密货币投注合法吗？",
        answer: "法律因司法管辖区而异。在参与之前，您应该检查当地法规。"
      }
    ]
  },

  // Call to Action Section
  cta: {
    title: "行动号召",
    subtitle: "准备好开始了吗？",
    actions: [
      {
        icon: "🚀",
        title: "立即发起投注",
        description: "为社区搭建舞台。",
        buttonText: "创建投注",
        buttonLink: "/create-bet"
      },
      {
        icon: "👀",
        title: "浏览实时投注",
        description: "投出您的一票。",
        buttonText: "查看实时投注",
        buttonLink: "/live-bets"
      }
    ],
    conclusion: "加入预测和投注的革命。在SOL投注平台上，您不仅是在下注——您是在创造机会。"
  },

  // Docs
  docs: {
    getting: {
      title: "快速开始",
      description: "开始之前，请准备好一个钱包，以及少量 SOL 用于支付 Gas 费用。",
      cards: [
        { title: "设置你的钱包", body: "安装 MetaMask 或 TrustWallet，并妥善备份。" },
        { title: "充值 SOL", body: "转入少量 SOL 用于 Gas 与下注。" },
        { title: "切换至 SOL 链", body: "在钱包中选择 SOL Smart Chain 网络。" },
        { title: "浏览实时动态", body: "在实时动态中查看活跃预测与市场活动。" }
      ],
      headings: {
        quickChecklist: "快速清单",
        megaTips: "进阶提示（1000+ 行演示）",
        faq: "常见问题",
        glossary: "术语表",
        resources: "实用资源"
      },
      labels: {
        tipPrefix: "提示",
        faqQPrefix: "问题",
        faqAPrefix: "回答",
        glossaryTermPrefix: "术语",
        glossaryDefPrefix: "定义"
      },
      resources: [
        "如何切换至 SOL 链",
        "了解 Gas 费用",
        "创建你的第一个预测",
        "安全最佳实践"
      ]
    },
    why: {
      title: "为什么选择我们？",
      heroTitle: "为什么选择 Bet on SOL",
      intro: [
        "在加密与梗文化的世界里，自信与信念至关重要。",
        "Bet on SOL 将两者结合——通过与 Twitter 的无缝集成，把链上透明与社交预测融合在一起。",
        "你的观点不再只是滑过时间线——而是上链、流动并产生收益。"
      ],
      sections: [
        { icon: "bolt", title: "构建于 SOL 链", body: "依托 SOL 链的高扩展性与极低费用，Bet on SOL 带来快速、低成本、无国界的体验。每一次预测、胜利与发放都永久记录在链上并可验证。" },
        { icon: "twitter", title: "社交投注新范式", body: "在网站上连接 Twitter 账号，创建的预测会即时展示在实时动态中。好友与玩家可立刻参与下注，无需跳转——推文级顺滑，链级安全。" },
        { icon: "globe", title: "透明且无需信任", body: "预测、结果与发放全部由智能合约执行——无中介、不可操纵。所有投注可见、可验证且防篡改。" },
        { icon: "comments", title: "社区驱动的预测", body: "Bet on SOL 由社区驱动。围绕热点、价格波动、加密事件或现实时刻创建市场——被讨论的都可下注。" },
        { icon: "brain", title: "精准 = 利润", body: "当你的预测命中，你将直接从资金池获利。越聪明的判断，收益越高——基于数据、氛围或梗，但一定要上链。" },
        { icon: "crystal", title: "预言机加持的准确性", body: "使用 SOL 预言机与 AI 聚合多源可信数据，确保每次结论都快速、准确且无偏。" },
        { icon: "shield", title: "Bet on SOL 优势", body: "Twitter 驱动的预测、实时投注流与链上仪表盘，实时追踪每一次胜负与市场——透明、社区优先。" },
        { icon: "lock", title: "安全与隐私", body: "现代认证方案保障会话加密与身份验证；无需暴露个人信息，即可获得私密、防篡改的投注体验。" },
        { icon: "rocket", title: "准备开玩？", body: "加入 Bet on SOL，体验社交投注的下一阶段——让推文成为交易，让预测即刻上线，每一次胜利都在链上。" }
      ]
    },
    ai: {
      title: "AI辅助结算",
      heroTitle: "🔮 AI 驱动的结算 — Bet on SOL",
      intro: "Bet on SOL 如何自动确认并结算加密预测市场——快速、透明，并为链上结果量身打造。",
      blocks: [
        { key: "overview", title: "快速概览——为何重要", body: [
          "当市场到期时，Bet on SOL 启动以加密为先的结算流程，将真实世界的价格与事件信号转换为可验证的结果。",
          "通过 Twitter 或网站实时动态创建的预测无需人工介入即可完成结算——胜者判定、发放上链、并保存完整推理供审计。"
        ]},
        { key: "flow", title: "结算流程（为清晰重排）", steps: [
          { label: "步骤 A — 市场关闭", text: "市场到期并停止新的下注。" },
          { label: "步骤 B — 数据采集（1–2 分钟）", text: "从多方独立来源并行拉取加密与事件数据。" },
          { label: "步骤 C — 价格与链上校验（即时）", text: "交叉校验价格快照与链上证据，用于即时价格类预测。" },
          { label: "步骤 D — AI 裁决（2–3 分钟）", text: "AI 汇总证据、给出理由充分的判定并生成可验证的解释。" },
          { label: "步骤 E — 上链结算", text: "结果、交易哈希与理由写入 SOL 链，胜者领取收益。" }
        ]},
        { key: "layers", title: "分层验证架构（三层堆叠卡片）", layers: [
          { title: "第一层——价格与链上校验", points: ["多交易所与预言机实时价格样本","链上校验：追踪、确认数与合约状态","纯价格类预测可即时判定"] },
          { title: "第二层——事件与市场数据聚合", points: ["加密专属：交易所价格、订单簿、流动性事件","协议与链上：BscScan/子图查询、交易历史","必要时补充：体育比分、官方公告与可信新闻"] },
          { title: "第三层——AI 分析与共识", points: ["AI 评估信号并衡量来源可靠性","生成明确结论与可读解释日志","跨多 API 交叉验证避免单一来源偏差"] }
        ]},
        { key: "sources", title: "加密数据来源（示例）", bullets: [
          "CoinGecko、CoinMarketCap、Binance API",
          "Chainlink 等去中心化预言机",
          "Glassnode、Messari（链上与市场分析）",
          "BscScan / TheGraph / Covalent（链上查询与索引数据）",
          "交易所订单簿快照与历史成交数据"
        ], note: "我们结合中心化交易所读取、预言机与链上证据，避免单一数据源左右结果。"},
        { key: "timeline", title: "时间线（精简）", bullets: [
          "市场到期——停止下注",
          "数据采集（1–2 分钟）——并行拉取交易所、预言机与链上索引",
          "AI 分析（2–3 分钟）——生成共识结论与解释",
          "结算与发放——结果上链，胜者领取"
        ]},
        { key: "audit", title: "透明与可审计（链上证明）", bullets: [
          "使用过的数据源（API 快照与时间戳）",
          "AI 的决策日志（摘要推理）",
          "最终上链的交易哈希"
        ], footer: "用户可在仪表盘或 SOL 链浏览器直接验证以上信息。"},
        { key: "twitter", title: "Twitter 与实时动态集成", bullets: [
          "连接 Twitter 创建预测——即时出现在实时动态",
          "接受的预测会锁定资金并进入相同结算流程",
          "Twitter 发起的市场与网页发起的处理完全一致"
        ]},
        { key: "why", title: "为何适合 degens", bullets: [
          "速度：快速数据 + AI = 高效可靠的结算",
          "稳健：多源数据 + 链上证据防篡改",
          "可审计：全流程留痕，可验证",
          "社交优先：无缝 Twitter → 实时动态"
        ]}
      ]
    }
  },

  // Oracle Page
  oracle: {
    title: "SOL预言机",
    subtitle: "实时投注结算与预言机数据源",
    developmentBanner: {
      title: "开发中",
      message: "此功能将在2025年11月22日前上线",
      status: "即将推出"
    },
    transparency: {
      title: "预言机透明度",
      description: "实时投注结算与预言机数据源"
    },
    screenshotMode: "截图模式",
    pyth: "Pyth",
    failed: "失败",
    resetFilters: "重置筛选",
    noEvents: "暂无预言机事件。等待投注结算...",
    liveFeed: "实时动态",
    oracleSources: "预言机数据源",
    resolutionHistory: "结算历史",
    dataIntegrity: "数据完整性",
    realTimeUpdates: "实时更新"
  },

  // Top Bettors Page
  topBettors: {
    title: "顶级投注者",
    subtitle: "排行榜和平台统计",
    platformStats: {
      totalVolume: "总交易量",
      totalVolumeValue: "已投注积分",
      activePlayers: "玩家",
      activePlayersValue: "活跃用户",
      avgWinRate: "平均胜率",
      avgWinRateValue: "平台平均值",
      totalBets: "总投注",
      totalBetsValue: "已匹配投注"
    },
    leaderboard: {
      title: "顶级投注者",
      noRankings: "暂无排名",
      beFirst: "成为第一个赢得投注的人！",
      rank: "排名",
      player: "玩家",
      totalBets: "总投注",
      winRate: "胜率",
      totalWinnings: "总奖金"
    },
    about: {
      title: "关于顶级投注者",
      description: "顶级投注者排行榜展示了我们平台上最成功的玩家。追踪您的表现，与其他玩家竞争，通过准确的预测攀登排行榜。所有统计数据都是实时更新的，并在链上验证以确保完全透明。"
    }
  },

  // Create Bet Page
  createBet: {
    title: "创建新投注",
    subtitle: "开始新的预测，让其他人参与进来！",
    form: {
      title: "投注标题",
      titlePlaceholder: "为您的投注输入一个吸引人的标题",
      description: "描述",
      descriptionPlaceholder: "描述人们在投注什么...",
      SOLAddress: "您的SOL地址",
      SOLAddressPlaceholder: "0x...",
      category: "类别",
      startDate: "开始日期",
      endDate: "结束日期",
      submitButton: "创建投注",
      submittingButton: "创建投注中..."
    },
    categories: {
      realWorld: "现实世界事件",
      pricePrediction: "价格预测",
      memeCoin: "模因币价格预测"
    },
    validation: {
      titleRequired: "标题是必需的",
      descriptionRequired: "描述是必需的",
      SOLAddressRequired: "SOL地址是必需的",
      SOLAddressInvalid: "请输入有效的SOL地址",
      startDateRequired: "开始日期是必需的",
      endDateRequired: "结束日期是必需的",
      endDateAfterStart: "结束日期必须在开始日期之后",
      fixErrors: "请修复以下错误"
    },
    messages: {
      success: "投注创建成功！",
      error: "创建投注失败，请重试。"
    }
  },

  // Live Bets Page
  liveBets: {
    title: "实时投注",
    subtitle: "加入预测游戏，留下您的印记！",
    categories: {
      all: "所有投注",
      realWorld: "现实世界事件",
      pricePrediction: "价格预测",
      memeCoin: "模因币价格预测"
    },
    betCard: {
      createdBy: "创建者：",
      starts: "开始：",
      ends: "结束：",
      predictions: "预测",
      choiceA: "是的",
      choiceB: "不",
      SOLAddressPlaceholder: "输入您的SOL地址 (0x...)",
      submitChoiceA: "是的",
      submitChoiceB: "不",
      submitting: "..."
    },
    emptyState: {
      icon: "🎯",
      title: "未找到投注",
      messageAll: "成为第一个创建投注的人！",
      messageCategory: "暂无{category}投注。"
    },
    messages: {
      loading: "加载投注中...",
      loadError: "加载投注失败：{error}",
      predictionSuccess: "预测提交成功！",
      predictionError: "提交预测失败",
      SOLAddressRequired: "请输入您的SOL地址",
      SOLAddressInvalid: "请输入有效的SOL地址",
      alreadyPredicted: "您已经对此投注进行了预测"
    },
    timeRemaining: {
      ended: "已结束"
    }
  },

  // Crypto Market Section
  crypto: {
    title: "动态市场定价 (AMM)",
    subtitle: "实时加密货币价格与市场数据和交互式图表",
    search: {
      placeholder: "搜索代币或符号...",
      label: "搜索"
    },
    loading: "加载中...",
    error: "价格获取失败，请稍后重试。",
    pagination: {
      previous: "上一页",
      next: "下一页",
      page: "第",
      of: "页，共",
      showing: "显示",
      results: "个结果"
    },
    card: {
      marketCap: "市值",
      volume24h: "24小时交易量",
      clickToView: "点击查看详情",
      rank: "排名"
    },
    modal: {
      title: "代币详情",
      priceChart: "价格图表",
      marketData: "市场数据",
      priceChanges: "价格变化",
      circulatingSupply: "流通供应量",
      totalSupply: "总供应量",
      maxSupply: "最大供应量",
      marketCapRank: "市值排名",
      high24h: "24小时最高",
      low24h: "24小时最低",
      loadingChart: "加载图表数据中...",
      chartError: "图表数据加载失败",
      currentPrice: "当前价格",
      priceChange24h: "24小时变化",
      marketCap: "市值",
      volume24h: "24小时交易量",
      supply: "供应信息",
      priceHistory: "价格历史"
    },
    timeframes: {
      "1d": "1天",
      "7d": "7天",
      "30d": "30天",
      "90d": "90天"
    }
  },

  // Security & Transparency Section
  security: {
    title: "安全与透明",
    subtitle: "您的资金和数据受到行业领先安全措施的保护",
    overview: {
      title: "安全概览",
      description: "Bet on SOL 实施多层安全措施，确保您的资金和个人数据始终安全。"
    },
    features: {
      smartContracts: {
        title: "智能合约安全",
        description: "所有投注逻辑都在 SOL 链上经过审计的智能合约中实现",
        points: [
          "开源代码可供公众审查",
          "由领先的区块链安全公司进行多次安全审计",
          "不可变的合约逻辑防止操纵",
          "所有交易都在链上公开可验证"
        ]
      },
      walletSecurity: {
        title: "钱包安全",
        description: "您的钱包完全在您的控制之下",
        points: [
          "非托管：我们从不持有您的私钥",
          "与 MetaMask 和 WalletConnect 的直接钱包集成",
          "私钥永远不会离开您的设备",
          "您对资金保持完全控制"
        ]
      },
      dataProtection: {
        title: "数据保护",
        description: "您的个人信息受到企业级安全保护",
        points: [
          "所有数据传输的端到端加密",
          "我们的服务器上不存储个人数据",
          "符合 GDPR 的数据处理实践",
          "定期安全评估和更新"
        ]
      },
      transparency: {
        title: "完全透明",
        description: "我们平台的每个方面都旨在实现最大透明度",
        points: [
          "所有投注结果都公开可验证",
          "实时区块链交易跟踪",
          "开源预言机集成",
          "社区驱动的治理模式"
        ]
      }
    },
    audits: {
      title: "安全审计",
      description: "我们的智能合约已由行业专家彻底审计",
      firms: [
        "CertiK - 全面的智能合约审计",
        "Quantstamp - 安全漏洞评估",
        "ConsenSys Diligence - 代码审查和测试",
        "OpenZeppelin - 安全最佳实践验证"
      ]
    },
    compliance: {
      title: "监管合规",
      description: "我们保持最高的监管合规标准",
      standards: [
        "增强安全的 AML/KYC 程序",
        "定期合规审计和报告",
        "透明的费用结构和条款",
        "用户保护和争议解决机制"
      ]
    }
  },

  // Documentation Page
  docsPage: {
    title: "文档",
    searchPlaceholder: "搜索文档...",
    navigation: {
      overview: "概览",
      ourVision: "我们的愿景",
      gettingStarted: "快速开始",
      whyChooseBetonsol: "为什么选择 BetonSOL",
      roadmap: "路线图",
      webapp: "网页应用",
      twitterDashboard: "Twitter 仪表板",
      aiPoweredResolution: "AI 驱动解决方案",
      liveMarket: "实时市场",
      cryptoMarket: "加密货币市场",
      globalMarket: "全球市场",
      tokenomics: "代币经济学",
      betonsolToken: "BetonSOL 代币",
      privacy: "隐私",
      finalWords: "最后的话",
      privacyPolicy: "隐私政策"
    },
    content: {
      overview: {
        title: "概览",
        subtitle: "BetonSOL 是一个建立在 SOL 智能链上的去中心化预测平台，允许用户创建和参与关于加密货币价格、模因币和全球市场趋势的实时预测（称为 BETS）。",
        goal: "BetonSOL 的目标是通过区块链自动化和 AI 审核，使社区预测变得透明、有趣且有回报。",
        howItWorks: {
          title: "工作原理",
          description: "用户可以轻松地在 BetonSOL 网页应用中直接创建自己的 BET。",
          whenCreating: "创建 BET 时，用户需要提供：",
          fields: {
            title: "标题 – 主要预测陈述（例如：\"BTC 将在 12 月达到 20 万美元\"）。",
            description: "描述 – 预测背后的详细信息或推理。",
            SOLAddress: "SOL 地址 – 创建者的钱包地址，用于接收潜在奖励。",
            betType: "BET 类型 – 在现实世界价格预测或模因币预测之间选择。",
            startDate: "开始日期 – BET 何时生效。",
            endDate: "结束日期 – BET 何时结束。"
          },
          processing: "提交后，BET 由我们的后端系统处理。",
          moderation: "如果它通过我们的 AI 驱动的内容审核并符合社区标准（无垃圾邮件、诈骗或 18+ 内容），它会自动出现在实时 BET 页面上。"
        },
        liveBets: {
          title: "实时 BET 和参与",
          description: "实时 BET 页面显示所有已批准和活跃的预测。",
          participation: "社区成员可以探索正在进行的 BET，并选择是否相信预测会成真（选项 A）或不会（选项 B）。",
          environment: "这创造了一个透明、竞争和社交的环境，用户可以测试他们的市场直觉并竞争准确性。"
        },
        rewards: {
          title: "奖励",
          description: "每个 BET 创建者的钱包地址都安全地存储在 BetonSOL 后端。",
          payout: "当 BET 的预测被验证为正确时，BetonSOL 会自动向创建者奖励 0.1 SOL，直接发送到他们注册的钱包。"
        },
        twitterIntegration: {
          title: "Twitter 集成",
          description: "BetonSOL 还允许用户通过 Twitter (X) 使用简单格式直接创建 BET。",
          instruction: "只需在我们主要置顶推文下的评论中标记 @BetonSOL，并遵循此格式：",
          format: {
            title: "标题：[您的预测标题]",
            description: "描述：[关于您预测的详细信息]",
            SOLAddress: "SOL 地址：[您的钱包地址]",
            startDate: "开始日期：[投注开始时间]",
            endDate: "结束日期：[投注结束时间]"
          },
          verification: "如果格式有效且内容适当，我们的 AI 驱动后端会自动验证并在实时 BET 页面上发布您的 BET。",
          example: "示例：@BetonSOL BTC 价格，BTC 将在 12 月达到 20 万，0x3F8a...A8CC，21/10/2025，30/12/2025"
        },
        summary: {
          title: "总结",
          description: "BetonSOL 连接区块链、AI 和社区参与，创造了一个透明、去中心化的预测生态系统。",
          conclusion: "无论是预测比特币的下一个历史高点、模因币的爆发，还是全球市场走势——BetonSOL 为每个人提供了智能投注、公平收益并成为去中心化预测未来一部分的工具。"
        }
      },
      ourVision: {
        title: "我们的愿景",
        subtitle: "在 BetonSOL，我们的愿景是重新定义人们与预测互动的方式，将观点、洞察和直觉转化为由区块链和 AI 驱动的透明、可验证且有回报的体验。",
        introduction: "我们相信每个人都应该有自由对他们所相信的事物进行预测——无论是加密货币价格、模因趋势还是全球事件——并在正确时获得公平的奖励。我们的平台旨在连接信任、技术和透明度，确保每个 BET 都被记录、可追踪且真正由社区驱动。",
        communityEmpowerment: {
          title: "赋能社区预测",
          description: "BetonSOL 的核心在于社区赋能。我们希望给每个用户——从加密货币爱好者到市场分析师——一个重要的声音。通过 BetonSOL，预测不再是私人猜测或社交媒体辩论；它们成为区块链验证的事件，真相通过时间和结果透明地确定。",
          conclusion: "我们的愿景是建立一个由思想家、预测者和信徒组成的全球社区，他们使用数据、直觉和集体智慧来塑造去中心化预测的未来。"
        },
        blockchainTransparency: {
          title: "通过区块链实现透明度",
          description: "在传统的预测系统中，信任往往是中心化的——由控制结果和支付的平台管理。BetonSOL 改变了这一点。",
          implementation: "通过利用 SOL 智能链，我们确保每个 BET、每个钱包和每笔交易都是公开、可验证且不可变的。这种区块链透明度建立了信任的基础，使 BetonSOL 不仅仅是另一个预测应用，而是真理和结果的社区账本。"
        },
        aiIntegrity: {
          title: "AI 驱动的诚信",
          description: "我们的 AI 驱动后端保护生态系统的质量和公平性。从过滤垃圾邮件和有害内容到验证 Twitter BET 的结构，BetonSOL 确保只有合法、格式良好且安全的预测才能进入实时 BET 动态。",
          future: "随着我们的发展，AI 将发挥更大的作用——自动化验证、检测趋势并创建智能洞察，帮助用户做出更明智的 BET。"
        },
        socialIntegration: {
          title: "连接社交和链上世界",
          description: "我们设想一个社交互动与区块链诚信相遇的未来。这就是为什么 BetonSOL 直接与 Twitter (X) 连接——允许用户公开发布他们的 BET，进行社交互动，同时将每个行动都记录在链上。",
          vision: "这不仅仅是预测；这是社交透明度——娱乐、洞察和技术的融合。"
        },
        ultimateGoal: {
          title: "我们的目标",
          description: "我们的最终目标是使 BetonSOL 成为去中心化预测的全球中心——一个创新与参与相遇的空间，社区信任取代中央权威。我们旨在将 BetonSOL 扩展到加密货币以外的领域，包括体育、全球事件和娱乐，同时保持同样的原则：去中心化的真理，由结果验证。"
        },
        conclusion: {
          title: "简而言之",
          description: "我们设想一个预测不仅仅是观点的未来——它们是机会。",
          final: "BetonSOL 正在建设那个未来，一次一个 BET。"
        },
        isRichContent: true
      },
      whyChooseBetonsol: {
        title: "为什么选择 BetonSOL",
        subtitle: "在一个充满噪音、投机和虚假承诺的世界中，BetonSOL 作为一个透明、去中心化和 AI 驱动的预测生态系统脱颖而出，社区的声音真正重要。",
        introduction: "我们不仅仅是在构建另一个投注平台——我们正在构建一个奖励真理、参与和创新的信任网络。",
        sections: [
          {
            title: "100% 去中心化基础",
            description: "BetonSOL 上的每个 BET、钱包和交易都记录在 SOL 智能链上，确保完全透明和不可变性。",
            details: [
              "没有隐藏的结果，没有中心化控制——只有可验证的、区块链支持的结果。",
              "这保证了预测和支付是安全、可审计和防篡改的。"
            ]
          },
          {
            title: "AI 驱动的审核和自动化",
            description: "BetonSOL 使用人工智能来维护平台的质量、安全性和公平性。",
            details: [
              "我们的 AI 系统在 BET 上线前自动检测和过滤垃圾邮件、18+ 内容或低质量的 BET。",
              "它还验证 Twitter 提交的 BET，确保格式正确和真实性。",
              "结果：一个清洁、公平和智能的预测生态系统。"
            ]
          },
          {
            title: "无缝 Twitter 集成",
            description: "与传统平台不同，BetonSOL 直接与社交媒体连接。",
            details: [
              "用户可以通过在我们的自定义格式中简单地标记 @BetonSOL 来创建 BET。",
              "一旦被我们的后端验证，这些 BET 就会在 BetonSOL 网站上实时显示。",
              "这是轻松、社交和区块链连接的——社区参与和链上信任的完美结合。"
            ]
          },
          {
            title: "透明和即时奖励",
            description: "准确性值得认可。",
            details: [
              "当 BET 被证明正确时，BetonSOL 会自动奖励 BET 创建者 0.1 SOL，直接发送到他们注册的钱包。",
              "没有延迟，没有手动批准——奖励是即时和无信任的，由智能合约逻辑驱动。"
            ]
          },
          {
            title: "社区驱动的生态系统",
            description: "BetonSOL 不受单一权威控制。",
            details: [
              "它由人们驱动——创造预测的创建者、参与的参与者和分享见解的信徒。",
              "这创造了一个不断增长的全球思想家、交易者和预测者网络，所有人都为一个透明、集体智能系统做出贡献。"
            ]
          },
          {
            title: "现实世界和模因币预测",
            description: "从严肃的金融洞察到有趣的模因币预测，BetonSOL 给用户自由投注他们所相信的东西。",
            details: [
              "无论您是在预测比特币的下一个走势、狗狗币的趋势，还是全球事件，BetonSOL 都是您展示远见的去中心化舞台。"
            ]
          },
          {
            title: "为未来而建",
            description: "BetonSOL 旨在不断发展。",
            details: [
              "我们不断扩展我们的功能——从 AI 驱动的结果验证到更深入的 Web3 集成——确保我们的用户始终站在去中心化创新的前沿。"
            ]
          }
        ],
        mission: "我们的使命很简单：赋能社区，奖励准确性，通过技术重新定义预测市场。",
        conclusion: {
          title: "本质上",
          description: "选择 BetonSOL 因为它不仅仅是关于投注——它是关于构建真理、奖励远见和信任区块链。"
        },
        isRichContent: true
      },
      webapp: {
        title: "网页应用",
        subtitle: "探索我们的网页应用功能、用户界面以及如何有效导航平台。",
        introduction: "这是占位符内容。此部分的实际内容将在稍后提供。",
        dashboardOverview: {
          title: "仪表板概览",
          description: "BetonSOL 仪表板是每个用户的起点。",
          features: [
            "创建 BET – 通过填写表单字段（标题、描述、SOL 钱包、BET 类型、开始和结束日期）开始您自己的预测。",
            "实时 BET – 查看平台上所有当前活跃和已批准的 BET。",
            "我的 BET – 跟踪您个人创建的 BET 并监控其进度或结果。",
            "排行榜（即将推出）– 基于准确性和参与度的顶级预测者排名系统。"
          ],
          conclusion: "设计确保用户可以一目了然地看到所有内容 – 活跃的 BET、个人统计数据和热门预测。"
        },
        creatingBet: {
          title: "创建 BET",
          description: "用户只需几个简单步骤即可创建 BET：",
          steps: [
            "点击导航栏上的\"创建 BET\"。",
            "填写表单：",
            "标题 – 您预测的简短陈述。",
            "描述 – 您预测背后的支持细节或逻辑。",
            "SOL 地址 – 您的钱包地址用于奖励。",
            "BET 类型 – 从现实世界价格预测或模因币预测中选择。",
            "开始日期和结束日期 – 定义预测持续时间。",
            "点击提交 BET。"
          ],
          conclusion: "提交后，BET 由我们的后端系统自动处理。如果通过审核（非垃圾邮件和安全内容），它将在实时 BET 页面上发布。"
        },
        liveBetsPage: {
          title: "实时 BET 页面",
          description: "实时 BET 页面显示所有已批准和当前活跃的预测。",
          features: [
            "BET 标题和描述",
            "创建者钱包（部分隐藏以保护隐私）",
            "BET 类型（价格/模因）",
            "开始和结束日期",
            "用户可以选择：",
            "A – 正确（是的，这个预测会成真）",
            "B – 错误（不，它不会）"
          ],
          conclusion: "用户可以浏览、搜索并直接在链上与预测交互。设计确保实时和公平的预测环境。"
        },
        walletConnection: {
          title: "钱包连接",
          description: "BetonSOL 支持 SOL 智能链钱包，如 MetaMask 和 WalletConnect。",
          features: [
            "用户可以使用位于应用右上角的\"连接钱包\"按钮一键连接钱包。",
            "连接的钱包用于：",
            "提交新的 BET",
            "接收奖励",
            "参与其他用户的 BET"
          ],
          conclusion: "所有钱包活动保持非托管，意味着 BetonSOL 从不存储或控制用户资金。"
        },
        aiModeration: {
          title: "AI 审核和后端验证",
          description: "每个提交的 BET 都经过基于 AI 的验证过程，确保平台保持安全和清洁。",
          features: [
            "后端自动检查：",
            "正确的格式和字段",
            "不当或成人内容",
            "垃圾邮件或恶意地址"
          ],
          conclusion: "只有经过验证的 BET 才会在实时 BET 部分公开显示。被拒绝或标记的 BET 保持隐藏，并在内部审查以确保生态系统的完整性。"
        },
        rewardsSystem: {
          title: "奖励系统",
          description: "当 BET 的预测被确认为准确时，BetonSOL 自动向 BET 创建者的钱包发送 0.1 SOL。",
          features: [
            "系统使用存储在后端的创建者钱包数据，因此支付安全、准确且自动处理。",
            "未来的更新将包括社区验证、多层奖励和活跃参与者的质押池。"
          ]
        },
        mobileDarkMode: {
          title: "移动端和深色模式",
          description: "BetonSOL WebApp 完全响应式，采用深色现代主题设计，提供流畅的用户体验。",
          conclusion: "无论用户使用手机、平板还是桌面，界面都能完美适应，确保可访问性和视觉一致性。"
        },
        upcomingFeatures: {
          title: "即将推出的功能",
          description: "我们不断升级 WebApp 以提高性能和功能。",
          features: [
            "排行榜和成就",
            "AI 生成的洞察以进行更好的预测",
            "基于社区的 BET 的 SOL 池系统",
            "BET 状态更新的实时通知"
          ]
        },
        summary: {
          title: "总结",
          description: "BetonSOL WebApp 是预测与区块链自动化相遇的地方。",
          conclusion: "从创建 BET 到赚取 SOL 奖励 – 一切都发生在这里，快速、公平且完全去中心化。"
        },
        isRichContent: true
      },
      twitterDashboard: {
        title: "Twitter 仪表板",
        subtitle: "Twitter 仪表板是我们即将推出的社交预测和参与中心，您的 X (Twitter) 活动将与 BetonSOL 生态系统相遇。",
        introduction: "我们目前正在开发一个系统，允许用户连接他们的 X 账户，管理他们的社交表现，并直接从他们的参与中获得积分。",
        features: [
          {
            title: "1. X 账户集成",
            description: "用户将能够一键直接将其官方 X (Twitter) 账户连接到 BetonSOL。这种连接将允许我们跟踪关键指标，如帖子、参与度、关注者和互动——将您的社交存在转化为有形的奖励。",
            details: [
              "一键 X 账户连接",
              "实时指标跟踪",
              "社交存在货币化",
              "与 BetonSOL 生态系统无缝集成"
            ]
          },
          {
            title: "2. 个性化仪表板",
            description: "每个连接的用户都将拥有自己的 Twitter 仪表板，显示：",
            details: [
              "推文表现分析",
              "每日和每周参与统计",
              "获得的 BetonSOL 积分",
              "病毒式或热门推文的奖励"
            ]
          }
        ],
        pointsSystem: {
          title: "3. 积分系统",
          description: "每个用户将基于以下方式获得积分：",
          points: [
            "使用 BetonSOL 相关标签发推",
            "预测病毒式趋势或模因",
            "与官方 BetonSOL 推文互动",
            "参与社区帖子"
          ],
          conclusion: "积分可以添加、累积或转移到您的应用内钱包。"
        },
        inAppPurchases: {
          title: "4. 应用内购买和提取",
          description: "在 BetonSOL 生态系统内使用您的积分：",
          uses: [
            "购买 BET 代币",
            "访问独家 BET 层级",
            "解锁社区奖励或 NFT 徽章"
          ],
          conclusion: "您还可以将获得的积分提取为 SOL 或将其转换为平台内积分——让您的社交参与具有真正的区块链价值。"
        },
        communityRankings: {
          title: "5. 社区排名（即将推出）",
          description: "排行榜将展示基于 Twitter 参与分数和活动一致性的顶级影响者和社区参与者。"
        },
        conclusion: {
          title: "简而言之",
          description: "Twitter 仪表板连接 Web3 + SocialFi，让每条推文都有赚取、预测和竞争的力量。",
          final: "即将推出——您的 X 账户将很快成为您进入 BetonSOL 生态系统的钥匙。"
        }
      },
      aiPoweredResolution: {
        title: "AI 驱动解决方案",
        subtitle: "在 BetonSOL，公平和准确性是每个预测的核心。",
        introduction: "这就是为什么我们的平台由先进的 AI 解决方案系统提供支持，确保每个 BET 都透明、自动且无人工偏见地得到验证。",
        howItWorks: {
          title: "工作原理",
          steps: [
            {
              title: "1. AI 数据聚合",
              description: "一旦 BET 达到其结束日期，我们的 AI 系统会扫描多个可信数据源、新闻媒体、价格源和区块链预言机，以收集最终结果数据。",
              details: "无论是 SOL 价格预测、模因币趋势还是现实世界事件，系统都会在决定结果之前收集所有相关证据。"
            },
            {
              title: "2. 智能验证引擎",
              description: "AI 将用户提交的结果与实时验证数据进行比较。",
              details: "它评估一致性、时间戳和真实性，确保最终结果准确且可验证。没有投票，没有操纵——只有纯粹的逻辑和数据驱动的真理。"
            },
            {
              title: "3. 自动解决和奖励分配",
              description: "一旦 AI 确认结果：",
              steps: [
                "BET 自动标记为已解决",
                "获胜者立即获得 SOL 奖励",
                "创建者获得他们的奖金（0.1 SOL）"
              ],
              conclusion: "这一切都通过我们的链上自动化系统无缝发生，确保每笔交易的透明度。"
            },
            {
              title: "4. 欺诈和垃圾邮件检测",
              description: "我们的 AI 审核引擎还有助于检测可疑或重复的 BET，标记虚假数据并防止操纵。",
              conclusion: "这使 BetonSOL 保持公平、安全和完全去中心化——保护用户和生态系统。"
            }
          ]
        },
        whyItMatters: {
          title: "为什么重要",
          description: "传统的预测平台依赖手动验证或社区投票——两者都容易产生偏见和延迟。",
          conclusion: "BetonSOL 的 AI 驱动解决方案引入了无信任自动化的新时代，事实而非观点决定结果。每个决定都是数据支持的、透明的，并且可以在链上即时验证。",
          isRichContent: true
        }
      },
      cryptoMarket: {
        title: "实时加密货币市场",
        content: "访问实时加密货币市场数据并使用它来做出明智的预测。"
      },
      globalMarket: {
        title: "全球市场",
        content: "监控全球市场趋势和经济指标以提高您的预测准确性。"
      },
      betonsolToken: {
        title: "BetonSOL 代币",
        subtitle: "即将推出",
        introduction: "BetonSOL 代币将成为推动我们整个预测生态系统的核心燃料。",
        description: "目前，我们的团队正在完善一个全面的代币经济学模型，专注于实用性、社区奖励和长期可持续性。",
        whatToExpect: {
          title: "期待什么",
          sections: [
            {
              title: "1. 实用性驱动设计",
              description: "BetonSOL 代币将作为平台内的主要交换媒介，使用户能够：",
              features: [
                "创建和参与 BET",
                "获得质押和准确性奖励",
                "访问高级 AI 洞察和仪表板",
                "解锁 WebApp 内的独家功能"
              ]
            },
            {
              title: "2. 奖励参与",
              description: "活跃用户、顶级预测者和社区贡献者都将作为我们奖励和忠诚度系统的一部分获得 BetonSOL 代币。",
              conclusion: "您的预测越准确，参与度越高，您获得的收益就越多。"
            },
            {
              title: "3. 治理与社区控制",
              description: "BetonSOL 代币持有者将通过 DAO 式治理在塑造生态系统未来方面发挥关键作用。",
              conclusion: "从投票新功能到管理奖励池，权力将掌握在社区手中。"
            },
            {
              title: "4. 透明分配",
              description: "我们的代币经济学模型将优先考虑公平启动原则，确保：",
              features: [
                "无隐藏分配",
                "透明分配",
                "可持续的长期增长"
              ]
            }
          ]
        },
        summary: {
          title: "总结",
          description: "BetonSOL 代币不仅仅是一种货币——它是 BetonSOL 平台的心跳，将用户、预测和 AI 驱动的自动化连接成一个统一的生态系统。",
          conclusion: "即将推出——预测的未来从 BetonSOL 开始。"
        },
        isRichContent: true
      },
      finalWords: {
        title: "最后的话",
        subtitle: "在 BetonSOL，我们的使命是重新定义人们与预测的互动方式，将它们从简单的猜测转变为透明、有回报和去中心化的体验。",
        mission: "我们相信在线预测的未来在于社区驱动的智能、AI 自动化和区块链驱动的信任。BetonSOL 将三者结合，创造了一个每个 BET 都有目的、证明和潜力的平台。",
        focus: {
          title: "随着我们继续建设，我们的重点依然明确：",
          points: [
            "赋能用户创建和参与有意义的预测。",
            "通过公平的链上分配奖励准确性和参与度。",
            "通过 AI 审核和自动解决确保透明度和安全性。"
          ]
        },
        vision: "BetonSOL 不仅仅是一个预测平台，它是朝着更智能、更公平、更透明的数字经济参与方式的运动。",
        gratitude: "我们感谢我们不断发展的社区的每一位成员，并对即将到来的事情感到兴奋——从代币集成到 AI 升级和跨平台扩展。",
        conclusion: "我们一起，不仅仅是在预测未来——我们正在建设它。",
        isRichContent: true
      },
      privacy: {
        title: "隐私政策",
        subtitle: "最后更新：2025年10月",
        introduction: "在 BetonSOL，我们尊重您的隐私并致力于保护您的个人信息。本隐私政策解释了当您与我们的平台（包括我们的 WebApp、Twitter 仪表板和后端系统）交互时，我们如何收集、使用和保护数据。",
        sections: [
          {
            title: "1. 我们收集的信息",
            description: "我们只收集提供安全和功能性用户体验所需的数据：",
            subsections: [
              {
                title: "钱包信息：",
                content: "您连接的 SOL 钱包地址用于 BET 创建、参与和奖励分配。BetonSOL 不存储私钥或获得对您钱包的控制权。"
              },
              {
                title: "用户生成的内容：",
                content: "您提交到平台的 BET 标题、描述和其他内容会被存储用于审核和公开显示。"
              },
              {
                title: "平台使用数据：",
                content: "我们可能收集匿名数据，如 IP 地址、设备类型、浏览器版本和交互指标，以帮助我们改善性能和安全性。"
              },
              {
                title: "社交集成（Twitter）：",
                content: "当连接您的 Twitter (X) 账户时，BetonSOL 可能会访问与平台功能相关的公共个人资料数据和活动。我们绝不会在未经您许可的情况下代表您发布内容。"
              }
            ]
          },
          {
            title: "2. 我们如何使用您的信息",
            description: "您的数据严格用于：",
            points: [
              "启用 BET 创建、审核和解决。",
              "促进奖励分配和钱包验证。",
              "通过 AI 审核检测垃圾邮件、欺诈或有害内容。",
              "改善系统性能和用户体验。"
            ],
            note: "我们不会向任何第三方出售、出租或交易您的个人数据。"
          },
          {
            title: "3. 数据安全",
            description: "我们采用端到端加密、安全数据库管理和 AI 驱动的威胁检测来保护所有存储的数据。虽然区块链交易是公开可见的，但 BetonSOL 从不存储敏感的钱包凭据或用户密码。"
          },
          {
            title: "4. AI 和自动化透明度",
            description: "我们的 AI 系统分析 BET 数据用于审核、垃圾邮件检测和结果验证。所有决策都会被记录并定期审查，以确保公平性、准确性和符合社区标准。"
          },
          {
            title: "5. 第三方集成",
            description: "BetonSOL 可能与第三方服务集成，例如：",
            points: [
              "钱包提供商（MetaMask、WalletConnect）",
              "分析工具（用于平台洞察）",
              "Twitter API（用于 BET 发布和数据链接）"
            ],
            note: "每个集成都遵循其自己的隐私政策。我们鼓励用户单独查看这些政策。"
          },
          {
            title: "6. 用户权利",
            description: "作为 BetonSOL 用户，您有权：",
            points: [
              "访问和查看您提交的数据。",
              "请求删除违反您隐私的内容。",
              "随时断开您的钱包或 Twitter 账户。"
            ],
            note: "要提出隐私请求，请通过我们的官方支持邮箱联系我们（列在我们的网站上）。"
          },
          {
            title: "7. 本政策的更新",
            description: "我们可能会定期更新本隐私政策以反映新功能或监管要求。任何更改都将在此处发布并更新日期。在更新后继续使用 BetonSOL 即表示接受修订后的政策。"
          },
          {
            title: "8. 联系我们",
            description: "如果您对本隐私政策或您的数据有疑问或担忧，请通过我们的官方支持渠道联系我们。"
          }
        ],
        summary: {
          title: "总结",
          description: "您的隐私、安全和信任是我们的首要任务。在 BetonSOL，我们只收集必要的内容，负责任地使用它，并以最高的护理标准保护它，因为透明的平台始于透明的隐私。"
        },
        isRichContent: true
      }
    }
  },

  // Getting Started Section
  gettingStarted: {
    title: "快速开始",
    subtitle: "加入 SOL 链上去中心化预测市场的未来",
    overview: {
      title: "欢迎来到 Bet on SOL",
      description: "准备好体验在 SOL 链上构建的最具创新性的预测市场平台。创建投注、参与实时市场，并无缝连接您的 Twitter 活动。"
    },
    steps: {
      walletSetup: {
        title: "1. 钱包设置",
        description: "连接您的钱包开始投注",
        details: [
          "安装 MetaMask 或使用 WalletConnect",
          "切换到 SOL 链网络",
          "确保您有 SOL 支付 gas 费用",
          "您的钱包完全在您的控制之下"
        ]
      },
      createBet: {
        title: "2. 创建您的第一个投注",
        description: "通过创建预测市场开始",
        details: [
          "选择您热衷的话题",
          "设置您的预测参数",
          "定义解决标准",
          "质押您的 SOL 并启动市场"
        ]
      },
      liveBetting: {
        title: "3. 实时投注体验",
        description: "参与实时预测市场",
        details: [
          "在实时投注页面浏览活跃市场",
          "查看实时赔率和市场情绪",
          "对正在进行的预测下注",
          "跟踪您的头寸和潜在回报"
        ]
      },
      twitterIntegration: {
        title: "4. Twitter 集成",
        description: "连接您的 Twitter 活动以增强投注",
        details: [
          "安全地链接您的 Twitter 账户",
          "您的 Twitter 评论成为实时投注洞察",
          "社区讨论影响市场动态",
          "社交情绪驱动预测准确性"
        ]
      }
    },
    features: {
      createBet: {
        title: "创建自定义投注",
        description: "设计您自己的预测市场",
        points: [
          "设置自定义主题和类别",
          "定义具体的解决标准",
          "选择市场持续时间和参数",
          "启动社区驱动的预测"
        ]
      },
      liveBets: {
        title: "实时投注仪表板",
        description: "实时投注体验",
        points: [
          "查看所有活跃的预测市场",
          "实时赔率和市场更新",
          "跟踪投注量和参与度",
          "监控市场情绪和趋势"
        ]
      },
      twitterComments: {
        title: "Twitter 评论集成",
        description: "您的社交活动增强投注",
        points: [
          "Twitter 账户的评论实时显示",
          "社交情绪影响市场动态",
          "社区讨论驱动预测",
          "实时社交媒体集成"
        ]
      },
      yourBets: {
        title: "您的投注历史",
        description: "跟踪您的所有投注活动",
        points: [
          "查看您创建的投注",
          "跟踪您参与的投注",
          "监控您的投注表现",
          "分析您的预测准确性"
        ]
      }
    },
    benefits: {
      title: "为什么选择 Bet on SOL？",
      items: [
        {
          title: "去中心化与透明",
          description: "所有投注逻辑在链上运行，完全透明"
        },
        {
          title: "社区驱动",
          description: "市场由社区创建和治理"
        },
        {
          title: "社交集成",
          description: "Twitter 活动增强预测准确性"
        },
        {
          title: "实时更新",
          description: "实时投注，即时市场更新"
        }
      ]
    },
    gettingStarted: {
      title: "准备开始了吗？",
      description: "按照这些简单步骤开始您的预测市场之旅",
      cta: "立即开始投注"
    }
  }
};
