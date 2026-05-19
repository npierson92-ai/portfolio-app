# Portfolio Tracker App

A conviction-weighted 20-stock DCA portfolio tracker with live AI-powered news, investment theses, weekly journal, and AI stock picks.

---

## Features

| Tab | What it does |
|-----|-------------|
| 📅 Schedule | 4-week DCA rotation — 2 stocks/day, full $1k deployed |
| 📊 Stocks | All 20 positions with sizing rationale |
| 📖 Thesis | Long-form investment case for each stock |
| 📡 News | Live AI-powered news search per stock |
| 📓 Journal | Weekly investment journal with persistent storage |
| ⭐ Pick | AI scans sectors and surfaces 1 new stock idea/week |

---

## Setup Guide (Step by Step)

### Step 1 — Install Node.js

1. Go to **https://nodejs.org**
2. Download the **LTS version** (the green button)
3. Run the installer, click through all defaults
4. To verify it worked, open Terminal (Mac) or Command Prompt (Windows) and type:
   ```
   node --version
   ```
   You should see something like `v20.x.x`

---

### Step 2 — Download and set up the project

1. Download the `portfolio-app` folder to your computer (e.g., your Desktop)
2. Open Terminal (Mac: press Cmd+Space, type "Terminal") or Command Prompt (Windows: press Win+R, type "cmd")
3. Navigate to the project folder:
   ```
   cd ~/Desktop/portfolio-app
   ```
4. Install dependencies:
   ```
   npm install
   ```
   This will download all required packages (takes ~1 minute)

---

### Step 3 — Add your Anthropic API key

The News tab and Pick of the Week require an Anthropic API key.

1. Go to **https://console.anthropic.com**
2. Sign up or log in
3. Go to **API Keys** in the left sidebar
4. Click **Create Key**, give it a name like "Portfolio App"
5. Copy the key (it starts with `sk-ant-...`)
6. In the portfolio-app folder, find the file called `.env.example`
7. Make a copy of it and rename the copy to `.env` (remove the `.example` part)
8. Open `.env` in any text editor and replace `your_anthropic_api_key_here` with your actual key:
   ```
   VITE_ANTHROPIC_API_KEY=sk-ant-your-actual-key-here
   ```
9. Save the file

> Note: The app still works without an API key — the News and Pick tabs will show a warning but Schedule, Stocks, Thesis, and Journal all work offline.

---

### Step 4 — Run locally to test

In your Terminal, inside the portfolio-app folder:
```
npm run dev
```

You'll see something like:
```
  VITE v5.0.0  ready in 300ms

  ➜  Local:   http://localhost:5173/
```

Open **http://localhost:5173** in Safari on your Mac. The app should load. Test all tabs.

---

### Step 5 — Deploy to Vercel (to get it on your iPhone)

Vercel is a free hosting service. This is what lets you access the app from anywhere and install it on your iPhone.

#### 5a — Install Vercel CLI
```
npm install -g vercel
```

#### 5b — Build the app
```
npm run build
```
This creates a `dist` folder with the production-ready app.

#### 5c — Deploy
```
vercel
```

First time, it will ask you to:
1. Log in or create a Vercel account (free) — follow the prompts
2. Confirm project settings — press Enter for all defaults
3. Wait ~30 seconds

When done, you'll see:
```
✅  Production: https://portfolio-app-xxxx.vercel.app
```

#### 5d — Add your API key to Vercel (important!)

Your `.env` file is local only — Vercel needs the key separately:

1. Go to **https://vercel.com** and log in
2. Find your deployed project
3. Click **Settings** → **Environment Variables**
4. Click **Add New**:
   - Name: `VITE_ANTHROPIC_API_KEY`
   - Value: your API key (`sk-ant-...`)
   - Environment: check all three (Production, Preview, Development)
5. Click **Save**
6. Go back to your project and click **Redeploy** → **Redeploy** (without clearing cache)

---

### Step 6 — Install on your iPhone home screen

1. On your iPhone, open **Safari** (must be Safari, not Chrome)
2. Go to your Vercel URL (e.g., `https://portfolio-app-xxxx.vercel.app`)
3. Tap the **Share button** (the box with arrow pointing up, at the bottom)
4. Scroll down and tap **"Add to Home Screen"**
5. Rename it to **"Portfolio"** if you want
6. Tap **Add**

The app now appears on your home screen like a native app. It opens full screen, no browser chrome, with the custom dark theme.

---

## Updating the app

When you want to change stock allocations, theses, or add features:

1. Edit files in the `src` folder
2. Run `npm run build`
3. Run `vercel --prod`

The live app updates in ~30 seconds.

---

## Customizing your stocks

All stock data is in `src/data/stocks.js`. To change a position:

```js
{
  ticker: "NVDA",
  name: "NVIDIA",
  pct: 22,              // ← change this to adjust allocation
  annualReturn: 0.13,   // ← estimated annual return
  risk: 3,              // ← 1 (low) to 5 (high)
  why: "Short reason",
  rationale: "Why this exact amount",
  thesis: `Full multi-paragraph thesis`,
}
```

The allocations within each basket must sum to 100.

---

## Troubleshooting

**"npm: command not found"** → Node.js didn't install correctly. Try reinstalling from nodejs.org

**News tab not working** → Check your `.env` file has the correct API key with no spaces

**App not showing on Vercel** → Make sure you added the API key in Vercel's Environment Variables and redeployed

**iPhone install not working** → Must use Safari. The URL must be HTTPS (Vercel provides this automatically)

---

## Cost

- **Vercel hosting**: Free (100GB bandwidth/month — more than enough)
- **Anthropic API**: ~$0.01-0.05 per news search or stock pick (very cheap)
- **Apple Developer account**: NOT required for PWA installation

---

*Not financial advice. Projections are estimates based on historical averages.*
