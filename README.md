# MarketLens India 📈

Intelligent equity research platform for Indian markets — powered by Claude AI.

## What it does

- **Market overview** — Nifty, Sensex, VIX, S&P correlation, advance/decline, buy signals
- **Sector analysis** — Performance, PE/PEG, FII flows, bottom/peak detection
- **FII / DII flows** — Sector and stock level, bulk deal tracker (big buyers)
- **Signals & PE matrix** — Buy/sell signals, PE vs 10yr avg, sector rotation
- **Earnings tracker** — Beat/miss/guidance raised, AGM calendar
- **Global & EM** — Brazil, Vietnam, Korea, Mexico, China + DXY/crude/INR macro
- **Midcap gems** — ₹2,500–7,000 cr turnaround screener
- **Portfolio** — Zerodha holdings with live signal overlay
- **News feed** — Live news with stock tagging, AI synthesis

---

## Deploy to Vercel in 5 steps

### Step 1 — Get your Anthropic API key
1. Go to https://console.anthropic.com
2. Click **API Keys** → **Create Key**
3. Copy the key (starts with `sk-ant-...`)

### Step 2 — Push to GitHub
```bash
cd marketlens-india
git init
git add .
git commit -m "Initial commit"
gh repo create marketlens-india --public --push
# OR go to github.com → New repo → push manually
```

### Step 3 — Deploy on Vercel
1. Go to https://vercel.com → **Add New Project**
2. Import your GitHub repo (`marketlens-india`)
3. Framework preset: **Next.js** (auto-detected)
4. Click **Deploy** — it will fail on first deploy because the API key is missing. That's fine.

### Step 4 — Add your API key as an environment variable
1. In Vercel dashboard → your project → **Settings** → **Environment Variables**
2. Add:
   - **Name**: `ANTHROPIC_API_KEY`
   - **Value**: `sk-ant-...` (your key from Step 1)
   - **Environment**: Production, Preview, Development (tick all three)
3. Click **Save**

### Step 5 — Redeploy
1. Go to **Deployments** tab → click the latest deployment → **Redeploy**
2. Your site will be live at `https://marketlens-india.vercel.app` (or similar)

---

## Local development

```bash
npm install
cp .env.example .env.local
# Edit .env.local and add your ANTHROPIC_API_KEY
npm run dev
# Open http://localhost:3000
```

---

## Connect Zerodha portfolio

1. Log in to Zerodha Console: https://console.zerodha.com
2. Go to **Portfolio** → **Holdings**
3. Click **Download** (CSV)
4. Upload in the Portfolio tab of MarketLens

---

## Adding live data (next steps)

The platform currently uses realistic simulated data. To connect live feeds:

| Data | Source | How |
|------|--------|-----|
| NSE live prices | NSE India unofficial API | `nseindia.com/api/...` |
| FII/DII data | SEBI / NSE | Daily CSV download |
| Bulk deals | NSE bulk deals | `nseindia.com/api/bulk-deal-data` |
| News | RSS feeds | ET, MoneyControl, Mint RSS |
| Fundamentals | Screener.in | API or scraping |
| AGM dates | BSE corporate filings | BSE announcements API |

---

## Stack

- **Frontend**: Next.js 14 (React)
- **AI**: Claude Sonnet via Anthropic API (server-side, key never exposed)
- **Hosting**: Vercel
- **Data**: Simulated (realistic Indian market data)

---

*Not financial advice. For informational and research purposes only.*
