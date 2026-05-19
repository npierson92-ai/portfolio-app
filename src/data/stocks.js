export const BASKET_A = [
  {
    ticker: "NVDA", name: "NVIDIA", color: "#00e5ff", annualReturn: 0.13, risk: 3, pct: 22, sector: "AI Core",
    why: "Undisputed AI chip leader. CUDA moat is 10+ years deep.",
    rationale: "Max weight justified by return potential and moat depth. NVDA leads the sector — it doesn't follow it.",
    thesis: `NVIDIA has built the most defensible moat in technology through its CUDA software ecosystem. While competitors like AMD and Intel can theoretically match chip-level performance, the 10+ years of developer tooling, libraries, and workflows built on CUDA create switching costs that make displacement nearly impossible in the near term.

The Blackwell architecture represents the next major compute cycle. Hyperscalers — Microsoft, Google, Amazon, Meta — have publicly committed to hundreds of billions in AI infrastructure spending through 2026. NVIDIA captures the largest share of that spend.

Beyond training, inference demand is emerging as a second, independent growth vector. Every AI application deployed requires ongoing GPU compute. As AI moves from experimentation to production at enterprises globally, the installed base of NVIDIA hardware becomes a recurring revenue engine.

Sovereign AI is a third vector the market is beginning to price: nations building national AI infrastructure are defaulting to NVIDIA. This creates geopolitically diversified demand that is harder to disrupt than pure enterprise cycles.

Key risks: custom silicon from hyperscalers (Google TPUs, Amazon Trainium), export restrictions on China sales, TSMC concentration risk. None of these are existential in the 5-year window — but they warrant the position being held at 22% rather than higher.`,
  },
  {
    ticker: "MSFT", name: "Microsoft", color: "#00ccdd", annualReturn: 0.12, risk: 2, pct: 17, sector: "AI Core",
    why: "Most durable AI mega-cap. Azure reaccelerating, Copilot monetization early.",
    rationale: "Best risk-adjusted name in the basket. Risk 2 with 12% return — high conviction without blowing cluster cap.",
    thesis: `Microsoft is the most durable AI investment in the portfolio because it monetizes AI across every layer of the stack simultaneously. Azure cloud infrastructure, GitHub Copilot for developers, Microsoft 365 Copilot for enterprises, and Bing/Copilot for consumers — each represents a distinct monetization surface.

The Azure relationship with OpenAI gives Microsoft first-mover advantage in enterprise AI deployment. Corporate customers are deeply embedded in the Microsoft ecosystem (Office, Teams, Azure Active Directory) and are now being upsold AI features within existing contracts. This is the lowest-friction AI monetization path in the industry.

Azure's growth reacceleration in recent quarters signals that the AI capex investment cycle is converting to revenue. The incremental margin on AI-augmented cloud services is higher than traditional cloud — this is a margin expansion story on top of a growth story.

At a Risk 2 rating, MSFT is the portfolio's most reliable compounder. It's the name you hold through a tech correction and add to — not the one that panic-sells you out of conviction.

Key risks: antitrust scrutiny, OpenAI relationship evolution, enterprise spending cycles. All manageable at this position size.`,
  },
  {
    ticker: "META", name: "Meta", color: "#0099bb", annualReturn: 0.125, risk: 3, pct: 13, sector: "AI Core",
    why: "Ad monopoly with AI dividend. Margin expansion accelerating.",
    rationale: "13% — strong return but capped below MSFT due to advertiser dependency and regulatory overhang.",
    thesis: `Meta operates the world's most powerful digital advertising machine across Facebook, Instagram, and WhatsApp — a combined 3.2 billion daily active users. The AI investment thesis is that every dollar Meta spends on AI directly improves ad targeting precision, which directly increases advertiser ROI, which directly justifies higher CPMs.

The numbers are already working: Meta's revenue per user has been accelerating as Reels monetization matures and AI-driven ad recommendations improve. The cycle is self-reinforcing — better targeting brings more advertisers, more spend funds more AI development, which improves targeting further.

Llama open-source models are a strategic masterstroke. By commoditizing foundation models, Meta undermines OpenAI and Google's closed-model pricing power while positioning itself as the infrastructure-agnostic AI platform. The business doesn't need to win the model race — it just needs the ad business to stay dominant.

The Reality Labs metaverse bet remains a long-dated, low-probability option. At the current burn rate it's a distraction but not a destroyer.

Key risks: regulatory action (EU Digital Markets Act, FTC antitrust), advertiser concentration, young user demographic erosion to TikTok. Capped at 13% accordingly.`,
  },
  {
    ticker: "AMZN", name: "Amazon", color: "#0077aa", annualReturn: 0.115, risk: 2, pct: 11, sector: "AI Core",
    why: "AWS reaccelerating, margins expanding significantly.",
    rationale: "11% — solid fundamentals, Risk 2. Retail drag limits pure-growth conviction vs META.",
    thesis: `Amazon's investment thesis has fundamentally shifted from a retail story to a cloud and AI infrastructure story. AWS is the world's largest cloud provider and is experiencing demand reacceleration driven by enterprise AI workloads. The margin profile of AWS (30%+ operating margins) is dramatically better than retail (low single digits), and the mix shift is accelerating.

Amazon Bedrock — its managed AI model service — gives AWS customers easy access to foundation models from Anthropic, Meta, Mistral and others. This creates a platform dynamic where AWS benefits regardless of which AI model "wins." Amazon's investment in Anthropic deepens this relationship and provides strategic differentiation.

The advertising business is the overlooked gem: Amazon's ad revenue is growing 20%+ annually, highly profitable, and defensible because ads on Amazon sit at the bottom of the purchase funnel where intent is highest. This is the most valuable advertising real estate online.

Margin expansion is the near-term catalyst. As AWS grows as a percentage of revenue, blended company margins expand significantly. The retail business continues restructuring with more robotics and automation reducing unit costs.

Key risks: AWS competitive pressure from Azure and GCP, regulatory antitrust action on marketplace practices. Position sized at 11% to reflect these caps.`,
  },
  {
    ticker: "GOOGL", name: "Alphabet", color: "#005f99", annualReturn: 0.11, risk: 2, pct: 10, sector: "AI Core",
    why: "Cheapest Mag-7. Search moat underappreciated. Gemini improving.",
    rationale: "10% — search disruption risk is the ceiling. Present but not dominant in the basket.",
    thesis: `Alphabet trades at a discount to every other Mag-7 company on a forward earnings basis, which is anomalous given the quality of the underlying business. Search remains the most profitable advertising product ever created — high intent, massive scale, no close substitute for most queries.

The market is pricing in significant search disruption from AI chatbots. This fear is partially valid but overstated. The core of Search's value — local searches, shopping queries, navigational searches — is highly resistant to LLM replacement. The marginal cases (research queries, complex questions) are the area of competition, not the majority of revenue-generating searches.

Gemini is a genuine competitor to GPT-4 and is improving rapidly. Google's integration of AI into Search (AI Overviews) is a monetization experiment that has shown early promise. YouTube remains one of the most defensible media assets in the world with accelerating Shorts monetization.

Google Cloud is the most underappreciated asset — growing 25%+ with improving margins and benefiting from the same AI tailwind as AWS and Azure.

Key risks: DOJ antitrust (Search monopoly case is ongoing), Gemini reputational stumbles, search market share erosion. Sized at 10% — material but not dominant.`,
  },
  {
    ticker: "APLD", name: "Applied Digital", color: "#ff6b35", annualReturn: 0.18, risk: 5, pct: 8, sector: "AI Infra",
    why: "$11B CoreWeave backlog. Pre-profit but contracted revenue is real.",
    rationale: "Hard cap at 8% despite highest upside. Risk 5 — one bad quarter tanks it 40%+.",
    thesis: `Applied Digital is the highest-risk, highest-upside position in the portfolio. It operates purpose-built AI data centers — not repurposed enterprise colocation, but ground-up facilities optimized for GPU density, power delivery, and liquid cooling.

The bull case rests on the $11B+ contracted backlog with CoreWeave, which itself is backed by Microsoft. The Polaris Forge 1 campus represents 400MW of contracted capacity — at a time when power-constrained AI compute demand is growing faster than supply can respond.

The picks-and-shovels framing is apt: APLD doesn't need to pick the winning AI model or chip. It just needs to provide the physical infrastructure where those compute workloads run. As long as AI compute demand grows — and every hyperscaler's capex guidance confirms it will — APLD has backfill demand.

The bear case is equally real: pre-profitability means the stock is valued on future cash flows with high execution risk. CoreWeave concentration means a single contract renegotiation changes the thesis. Capital-intensive construction projects run over budget and over schedule.

This is a 8% lottery ticket with a real business behind it. If execution holds, this is a multi-bagger from current levels. If it stumbles, it can halve. DCA smooths the entry.`,
  },
  {
    ticker: "AAPL", name: "Apple", color: "#ff9100", annualReturn: 0.10, risk: 2, pct: 8, sector: "Quality",
    why: "Ecosystem lock-in. Services growing. Hardware mature but sticky.",
    rationale: "8% — lowest return in basket but Risk 2 earns it a stabilizer role.",
    thesis: `Apple's investment thesis is about the Services flywheel, not hardware. The iPhone installed base of 1.2+ billion active devices is a recurring revenue platform generating App Store, Apple Music, iCloud, Apple TV+, and Apple Pay revenue at 70%+ gross margins. Services is now Apple's fastest-growing and highest-margin segment.

The switching cost moat is extraordinary. Once a user is embedded in iMessage, AirDrop, iCloud photo library, Apple Watch health data, and App Store purchases, switching to Android carries enormous friction. This lock-in sustains premium ASPs and services attach rates that competitors cannot match.

Apple Intelligence is the near-term catalyst question. On-device AI processing is a genuine architectural advantage — privacy-preserving AI that doesn't require cloud round-trips. If Apple successfully integrates AI into the iPhone in a way that drives upgrade cycles, the next hardware supercycle could surprise.

At 10% estimated annual return, Apple is the portfolio's stability anchor — not the growth engine. It's here because it holds value in drawdowns, generates enormous free cash flow, and returns capital aggressively through buybacks.

Key risks: China sales exposure (30% of revenue), App Store regulatory pressure, slow AI integration relative to Android competitors.`,
  },
  {
    ticker: "NOW", name: "ServiceNow", color: "#ffab40", annualReturn: 0.115, risk: 2, pct: 5, sector: "Quality",
    why: "Enterprise SaaS with Fortune 500 lock-in. Sticky ARR.",
    rationale: "5% — solid compounder, smaller TAM than mega-caps. Clean risk-adjusted profile.",
    thesis: `ServiceNow operates the enterprise workflow automation platform that Fortune 500 companies use to manage IT operations, HR processes, and customer service workflows. The platform is deeply embedded in corporate operations — replacing it would require months of IT migration work, retraining thousands of employees, and rebuilding integrations. No CFO approves that unless ServiceNow dramatically fails.

This stickiness drives best-in-class net revenue retention above 120% — meaning existing customers spend 20%+ more each year without ServiceNow having to acquire new accounts. The land-and-expand model is working at scale.

The AI integration story is compelling: ServiceNow is embedding AI agents into workflow automation — the AI fills out forms, routes tickets, escalates issues, and drafts responses without human intervention. This makes existing workflows faster and makes ServiceNow more valuable, justifying price increases on renewal.

CEO Bill McDermott has consistently delivered on guidance and has positioned the company as the "AI platform for business transformation" — enterprise buyers are responding.

Key risks: enterprise IT spending cycles, Microsoft Power Automate competition, high valuation multiple vulnerable to growth slowdown. Sized at 5% as a quality compounder, not a growth bet.`,
  },
  {
    ticker: "PLTR", name: "Palantir", color: "#ff4081", annualReturn: 0.14, risk: 4, pct: 4, sector: "AI Infra",
    why: "Government AI contracts are sticky. Extreme valuation is the risk.",
    rationale: "4% cap — call option on AI software. Enough to benefit, not enough to hurt.",
    thesis: `Palantir builds the data integration and AI analytics platforms that governments and large enterprises use for mission-critical decision making. The US government business — defense, intelligence, healthcare — is genuinely sticky: classified integrations, multi-year contracts, and national security sensitivity make these relationships nearly impossible to displace.

The commercial business is the growth story. Palantir's AIP (Artificial Intelligence Platform) allows enterprises to deploy AI agents on top of their proprietary data without that data leaving their environment. In a world where data privacy and IP protection are paramount, this architecture is a genuine differentiator versus cloud-first AI alternatives.

The AIP Bootcamp model — intensive 5-day sessions where enterprise prospects build working AI use cases with their own data — is an innovative sales motion generating strong conversion. Revenue growth has been reaccelerating.

The risk is entirely about valuation. PLTR trades at 50x+ revenue — a multiple that prices in a decade of flawless execution. Any guidance miss or growth deceleration sends this stock down 30-40%. The business is real; the multiple is the gamble.

Sized at 4% deliberately — enough to capture significant upside if the growth story continues, small enough to not matter if the valuation re-rates.`,
  },
  {
    ticker: "V", name: "Visa", color: "#ffc166", annualReturn: 0.095, risk: 1, pct: 2, sector: "Quality",
    why: "Payment network monopoly. 60%+ margins. Crash cushion.",
    rationale: "2% minimal — here for stability not growth. Risk 1 makes it the true safe haven.",
    thesis: `Visa is the portfolio's only Risk 1 position — included not for return potential but for behavioral ballast. When AI names sell off 30-40% in a correction, Visa typically falls 10-15% and recovers faster. Having even a small anchor prevents panic selling the whole portfolio.

The business itself is extraordinary: Visa operates a two-sided payment network with 3.9 billion cards and 80 million merchants. The network effect is absolute — merchants accept Visa because cardholders carry it, cardholders carry it because merchants accept it. This has compounded for 60 years and is more defensible today than ever.

Revenue is a toll on global commerce — Visa takes basis points on every transaction. As global e-commerce and digital payments grow, revenue grows without Visa needing to take credit risk, manage inventory, or hire at scale. The operating leverage is exceptional: 65%+ net margins on a multi-billion revenue base.

The fintech disruption narrative has been tested and largely failed. Apple Pay runs on Visa rails. PayPal settles on Visa rails. Crypto has not displaced card payments at scale. The infrastructure is too embedded.

This is a 2% allocation sized purely as a shock absorber. Hold forever, collect the quiet compounding.`,
  },
];

export const BASKET_B = [
  {
    ticker: "CRWD", name: "CrowdStrike", color: "#e8001c", annualReturn: 0.13, risk: 3, pct: 20, sector: "Security",
    why: "Non-discretionary cybersecurity. Falcon platform is deeply sticky ARR.",
    rationale: "Highest weight in Basket B. Mission-critical demand doesn't disappear in downturns.",
    thesis: `CrowdStrike has built the most comprehensive cloud-native cybersecurity platform in the industry. The Falcon platform consolidates endpoint detection, threat intelligence, identity protection, and cloud security into a single agent — replacing 10-15 point solutions that enterprises were previously managing separately.

The consolidation dynamic is the key growth driver: enterprises are actively rationalizing their security vendor count. CrowdStrike is a consolidation winner — when budgets tighten, companies cut niche vendors and double down on platforms. This makes CRWD paradoxically recession-resistant despite being a growth stock.

Net revenue retention above 120% reflects the land-and-expand model working: customers buy endpoint protection, then add identity, then cloud, then threat intelligence modules. Each module increases switching costs. Ripping out CrowdStrike requires replacing a unified security data layer — almost no security team will accept that risk.

The 2024 software update incident that caused the global IT outage was a significant reputational test. CrowdStrike's customer retention through that crisis demonstrated the switching cost moat in practice — enterprises stayed despite the outage because alternatives were worse.

Key risks: Microsoft Defender competition (bundled and improving), economic slowdown reducing new logo acquisition, the incident overhang. Sized at 20% as highest-conviction non-AI position.`,
  },
  {
    ticker: "SHOP", name: "Shopify", color: "#96bf48", annualReturn: 0.13, risk: 3, pct: 15, sector: "E-Commerce",
    why: "Global commerce infrastructure. Merchants don't leave. Profitable and expanding.",
    rationale: "15% — proven management, expanding moat, e-commerce macro sensitivity is the cap.",
    thesis: `Shopify has become the operating system for commerce — not just e-commerce. Over 1.7 million merchants across 175 countries use Shopify to run their entire business: storefront, inventory, payments, shipping, financing, and now physical retail. The platform is the infrastructure layer that most mid-market and DTC brands cannot function without.

The merchant switching cost is massive: years of store customization, customer data, app integrations, and payment history are locked into Shopify's ecosystem. Migrating to a competitor would require rebuilding the entire digital commerce operation. This is why net revenue retention stays high even when e-commerce volumes soften.

The financial services expansion is the next growth vector. Shopify Capital (merchant loans), Shopify Balance (banking), and Shopify Payments (payment processing) are all high-margin businesses that compound on top of the software subscription base. As Shopify becomes merchants' primary financial relationship, the lifetime value per merchant expands dramatically.

International expansion is underpenetrated: most Shopify revenue is North American, while global e-commerce is growing fastest in markets like Southeast Asia, Latin America, and Africa.

Key risks: Amazon competitive pressure, macro sensitivity of DTC brands (primary customers), high valuation multiple. Sized at 15% reflecting high conviction with appropriate macro risk acknowledgment.`,
  },
  {
    ticker: "AXON", name: "Axon", color: "#ffd700", annualReturn: 0.13, risk: 3, pct: 14, sector: "Public Safety",
    why: "Government lock-in. Hardware creates relationship, software captures recurring revenue.",
    rationale: "14% — recession-proof demand, genuine diversification from Nasdaq correlation.",
    thesis: `Axon Enterprise is one of the most overlooked compounders in the US market. It operates a hardware-software flywheel in public safety: TASER devices and body cameras create the initial government relationship, then Evidence.com (cloud storage and management for body cam footage) and Axon Records (AI-powered police records management) generate recurring SaaS revenue.

Government contracts are the stickiest customer relationships in commerce. A police department that has deployed Axon hardware, trained officers on Evidence.com, and integrated the system with their records management cannot switch vendors without a multi-year project and enormous political risk. The installed base is nearly permanent.

The AI opportunity is significant and underdiscussed: Axon's Draft One product uses AI to automatically draft police reports from body camera footage. This saves officers 3-4 hours per shift on paperwork — a genuine productivity improvement that departments will pay for and that deepens the platform lock-in further.

The TAM expansion is large: internationally, police forces in the UK, Australia, and Europe are in earlier stages of the hardware deployment cycle that US law enforcement completed years ago.

Key risks: regulatory pressure on law enforcement technology, political sensitivity of police surveillance tools, international expansion execution. Diversification from tech sector correlation is a portfolio-level benefit.`,
  },
  {
    ticker: "NVO", name: "Novo Nordisk", color: "#0077c8", annualReturn: 0.115, risk: 2, pct: 13, sector: "Healthcare",
    why: "GLP-1 decade megatrend. Global pipeline. Healthcare demand is counter-cyclical.",
    rationale: "13% at Risk 2 — best risk-adjusted in Basket B. Only healthcare exposure in the portfolio.",
    thesis: `Novo Nordisk is the global leader in GLP-1 receptor agonist medications — Ozempic (semaglutide for diabetes) and Wegovy (semaglutide for obesity). This is not a trend; it is a fundamental shift in how medicine treats metabolic disease.

The addressable market is staggering: 1 billion people globally are obese, 500 million have type 2 diabetes, and emerging data suggests GLP-1s reduce cardiovascular events, kidney disease progression, and potentially Alzheimer's risk. Each new indication expands the TAM and the duration of treatment.

Supply constraints have been the primary limitation on growth — Novo Nordisk has been investing billions in manufacturing expansion to meet demand that consistently exceeds supply. As capacity comes online, revenue growth should reaccelerate.

The competitive landscape (Eli Lilly's tirzepatide, AstraZeneca's pipeline) creates legitimate long-term risk, but Novo Nordisk's manufacturing scale, physician relationships, and semaglutide formulation pipeline (oral semaglutide, higher-dose formulations) create competitive durability.

As the only healthcare position in a 20-stock portfolio dominated by technology, NVO provides genuine sector diversification. Healthcare spending is counter-cyclical — it doesn't fall in recessions the way consumer or enterprise tech spending does.

Key risks: pricing pressure (US drug pricing legislation), patent expiration timelines, competitive GLP-1 entries. Sized at 13% for high conviction with appropriate single-company risk acknowledgment.`,
  },
  {
    ticker: "UBER", name: "Uber", color: "#aaaaaa", annualReturn: 0.12, risk: 3, pct: 12, sector: "Transport",
    why: "Profitable, buying back shares. Autonomous optionality is free.",
    rationale: "12% — consumer discretionary vulnerability in recession is the cap.",
    thesis: `Uber's investment thesis has fundamentally changed from a cash-burning growth story to a profitable platform with autonomous vehicle optionality. The company reached GAAP profitability and is now generating significant free cash flow, enabling share buybacks that were unthinkable three years ago.

The core ride-sharing and delivery businesses benefit from network effects that strengthen over time: more drivers attract more riders, more riders attract more drivers, and the density of the network makes each incremental trip more profitable. Markets where Uber has dominant share (US, UK, major metros globally) show this compounding.

The autonomous vehicle opportunity is the free option embedded in the stock. Uber's partnership with Waymo deploys Waymo robotaxis on Uber's network — Uber provides the demand aggregation, Waymo provides the autonomous vehicle. This model allows Uber to participate in the autonomous future without betting the company on hardware and sensor development. If autonomy succeeds at scale, Uber's take rate on those rides is highly profitable. If autonomy stalls, Uber's core business continues.

Uber Eats has diversified the platform beyond rides: grocery delivery, alcohol delivery, and advertising on the delivery platform are expanding the monetization surface.

Key risks: economic downturn reducing discretionary spending on rides and delivery, driver classification legislation (gig worker rights), autonomous vehicle disruption moving faster than the partnership model can adapt. Consumer cyclicality is why this is at 12%.`,
  },
  {
    ticker: "TTD", name: "Trade Desk", color: "#399af2", annualReturn: 0.135, risk: 3, pct: 10, sector: "AdTech",
    why: "Programmatic ad market consolidating around TTD. UID2 gaining. Cyclical risk.",
    rationale: "10% — high return but cyclicality limits weight. Strong bull markets, vulnerable bear markets.",
    thesis: `The Trade Desk operates the buy-side of programmatic advertising — the technology platform that agencies and brands use to buy digital advertising across the open internet (everything outside Google and Meta's walled gardens). As the dominant independent DSP, Trade Desk benefits every time the open internet takes share from walled gardens.

Connected TV is the primary growth vector. As streaming replaces linear TV, advertising dollars that were locked in upfront broadcast deals are moving to programmatic. Trade Desk's CTV capabilities position it as the primary beneficiary: agencies need an independent platform to buy across Netflix, Hulu, Disney+, Peacock, and dozens of smaller streamers simultaneously.

Unified ID 2.0 (UID2) is Trade Desk's answer to cookie deprecation. By building an industry-standard, privacy-preserving identity solution, Trade Desk has positioned itself as the infrastructure layer for post-cookie targeting — an existential problem for the entire industry that Trade Desk is helping solve.

Jeff Green, the founder-CEO, has an exceptional track record of identifying secular tailwinds early (mobile, video, CTV) and positioning the platform ahead of each wave.

Key risks: advertising spend is highly cyclical and the first budget cut in a recession. Google's dominance of the open internet ecosystem creates structural dependency. Revenue can decline 20-30% in an economic downturn. Sized at 10% for upside capture with cyclicality acknowledgment.`,
  },
  {
    ticker: "SPOT", name: "Spotify", color: "#1db954", annualReturn: 0.14, risk: 3, pct: 8, sector: "Consumer Tech",
    why: "Margin expansion materializing. 600M+ users. Moat extending beyond music.",
    rationale: "8% — music label risk and Apple competition are the ceiling constraints.",
    thesis: `Spotify's investment thesis has evolved from a music streaming company to a general audio platform with improving unit economics. The margin expansion story is finally playing out after years of promises: gross margins have been expanding as podcast and audiobook content (where Spotify sets pricing) grows as a share of total listening.

The competitive moat is deeper than it appears. Spotify's recommendation algorithm, personalized playlists (Discover Weekly, Daily Mix), podcast library, and cross-device experience create genuine switching costs. Users build listening histories, follow artists, save playlists — the data flywheel makes Spotify increasingly personalized over time in ways new entrants cannot replicate without years of listening data.

Pricing power is emerging: multiple price increases across markets have shown low churn — a strong signal that users perceive Spotify as a necessity, not a luxury. The student plan to family plan migration path is a natural upsell that continues driving ARPU growth.

Audiobooks represent a new TAM: bundling audiobooks into Spotify Premium at no extra cost is a massive value-add that differentiates from Apple Music and drives conversion from free to paid. As audiobook catalog grows, this becomes a genuine platform expansion.

Key risks: Apple Music and YouTube Music competition, music label renegotiations (major labels own the content and can extract margin), podcast content cost rationalization. Sized at 8% for margin story conviction with label risk acknowledgment.`,
  },
  {
    ticker: "DUOL", name: "Duolingo", color: "#58cc02", annualReturn: 0.15, risk: 4, pct: 5, sector: "EdTech",
    why: "Best subscriber growth in consumer SaaS. Gamification moat. Extreme multiple.",
    rationale: "5% cap — Risk 4 at current valuation. Growth miss = -30%. High upside speculative.",
    thesis: `Duolingo has built the most engaging consumer education product in history by treating language learning as a game rather than a chore. The streak mechanic, XP system, leaderboards, and character-driven narrative create daily engagement habits that competitors — Rosetta Stone, Babbel, Pimsleur — have spent decades failing to replicate.

The business model is strong: a large free user base (DAUs growing 50%+ YoY) converting to Duolingo Plus subscriptions at improving rates. The freemium funnel is efficient — users get addicted to the free product and convert to remove ads and unlock features. Net revenue retention is excellent because subscribers maintain streaks they're emotionally invested in.

AI integration is expanding the product faster than any edtech competitor can match. Duolingo Max uses GPT-4 to enable conversations with AI tutors, roleplay scenarios, and personalized explanations — features that previously required expensive human tutors. This expands the addressable market (more advanced learners) and justifies premium pricing.

The TAM expansion beyond language learning is beginning: Duolingo Math, Duolingo Music, and potential expansion into other skill-based education represent significant optionality for a platform with 500M+ registered users.

Key risks: extremely high revenue multiple (80x+ forward revenue), small absolute revenue base, if subscriber growth decelerates the multiple compresses violently. This is sized at 5% as a high-conviction growth bet, not a portfolio anchor.`,
  },
  {
    ticker: "ADBE", name: "Adobe", color: "#f7c531", annualReturn: 0.13, risk: 2, pct: 2, sector: "Creative Software",
    why: "Trading at multi-year discount. Market overpricing AI disruption risk. Firefly monetizing.",
    rationale: "2% — undervalued quality compounder. Risk 2 at a beaten-down multiple is rare. Sized conservatively while the thesis plays out.",
    thesis: `Adobe is the most undervalued quality stock in the portfolio. The market has spent two years pricing in an existential AI threat to Photoshop, Premiere, and Illustrator — but that thesis has not materialized. No AI tool has actually displaced Adobe's creative suite at enterprise scale. Switching costs are enormous: workflows, plugins, training, and integrations built over decades don't migrate easily.

The reality is that Adobe is an AI beneficiary, not a victim. Firefly — Adobe's generative AI image model — is now embedded across the Creative Cloud suite and being monetized through credit-based consumption on top of subscription fees. Enterprise customers are paying more, not canceling. The AI features make existing subscribers more productive and harder to churn.

Adobe's digital experience business (Experience Cloud) is the underappreciated second engine: marketing analytics, personalization, and customer journey tools used by Fortune 500 companies. This business has 90%+ gross margins and multi-year enterprise contracts that don't show up in the AI disruption narrative.

The valuation is the opportunity: ADBE trades at a significant discount to its 5-year average multiple after two years of sentiment-driven selling. The business has not deteriorated — earnings have continued growing. This is a mean-reversion trade wrapped in a quality compounder.

Key risks: continued AI competitive pressure from Canva, Midjourney, and open-source tools at the prosumer level; regulatory scrutiny; multiple compression if growth slows. Sized at 2% as a value entry into a quality name.`,
  },
  {
    ticker: "RDDT", name: "Reddit", color: "#61b8ff", annualReturn: 0.15, risk: 4, pct: 1, sector: "Social/AI Data",
    why: "AI data licensing underappreciated. Ad revenue growing fast. Unique user-generated content moat.",
    rationale: "1% — early stage monetization, high upside. Unique data asset that becomes more valuable as AI training demand grows.",
    thesis: `Reddit is one of the most underappreciated AI infrastructure plays in the market. The platform hosts 20+ years of authentic human conversation across every conceivable topic — the highest-quality training data for large language models that exists. Google and OpenAI have already signed data licensing deals worth hundreds of millions, and this revenue stream is just beginning.

The core advertising business is in early innings of monetization. Reddit has historically under-monetized its massive engaged user base — the platform has 100M+ daily active users with some of the highest intent and engagement rates in social media. As ad targeting improves and more brands discover Reddit's unique audience (technical professionals, enthusiasts, early adopters), CPMs are rising rapidly from a low base.

The community moat is genuinely defensible. Reddit's value comes from the communities themselves — r/wallstreetbets, r/MachineLearning, r/personalfinance — which have decade-long histories, established norms, and network effects that can't be replicated. Users don't come for Reddit, they come for their communities. This makes the platform stickier than it appears.

The search traffic relationship with Google creates a structural distribution advantage: Reddit threads consistently rank highly in search results, driving organic discovery that competitors pay billions to replicate through ads.

Key risks: pre-mature profitability, dependence on Google search traffic, user base sensitivity to platform policy changes, competition from newer social platforms. Sized at 1% as a high-upside emerging position that could be scaled up as monetization matures.`,
  },
];

export const ALL_STOCKS = [...BASKET_A, ...BASKET_B];

export const BLENDED_A   = BASKET_A.reduce((a, s) => a + (s.pct / 100) * s.annualReturn, 0);
export const BLENDED_B   = BASKET_B.reduce((a, s) => a + (s.pct / 100) * s.annualReturn, 0);
export const BLENDED_ALL = ALL_STOCKS.reduce((a, s) => a + (s.pct / 200) * s.annualReturn, 0);

export const WEEK_DAYS_A = [
  { day: "MON", stocks: ["NVDA", "MSFT"],  note: "Anchor day — top 2 conviction names" },
  { day: "TUE", stocks: ["META", "AMZN"],  note: "AI Core — capped for correlation control" },
  { day: "WED", stocks: ["GOOGL", "APLD"], note: "Value Mag-7 + highest-upside speculative" },
  { day: "THU", stocks: ["AAPL", "NOW"],   note: "Quality anchors — stabilize the basket" },
  { day: "FRI", stocks: ["PLTR", "V"],     note: "Speculative + defensive — opposite risk ends" },
];

export const WEEK_DAYS_B = [
  { day: "MON", stocks: ["CRWD", "SHOP"],  note: "Top 2 conviction — sticky non-AI revenue" },
  { day: "TUE", stocks: ["AXON", "NVO"],   note: "Govt + healthcare — recession resistant" },
  { day: "WED", stocks: ["UBER", "TTD"],   note: "Consumer discretionary — higher beta" },
  { day: "THU", stocks: ["SPOT", "DUOL"],  note: "Consumer subscription — margin stories" },
  { day: "FRI", stocks: ["ADBE", "RDDT"],  note: "Undervalued quality + AI data play" },
];

export const RISK_LABEL = ["", "Low", "Med-Low", "Medium", "Med-High", "High"];
export const RISK_COLOR  = ["", "#69ff47", "#a0ff47", "#ffcc00", "#ff9100", "#ff4444"];

export function fmt(v) {
  if (v >= 1e6) return `$${(v / 1e6).toFixed(2)}M`;
  if (v >= 1e3) return `$${(v / 1e3).toFixed(0)}K`;
  return `$${Math.round(v)}`;
}

export function project(wk, yrs, rate) {
  const r = rate / 52;
  return Array.from({ length: yrs + 1 }, (_, y) => {
    const w = y * 52;
    return {
      age: 35 + y,
      value: w === 0 ? 0 : Math.round(wk * ((Math.pow(1 + r, w) - 1) / r)),
      invested: Math.round(wk * w),
    };
  });
}
