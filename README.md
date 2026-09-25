# India Portfolio Insights

Educational dashboard for **Indian market portfolio diversification**.

## Features

- **Insights** – Overview of a universal diversification framework (Equity 50% Mid / 30% Large / 20% Small Cap + satellite Gold / MF / ETF)
- **IPOs** – Mainboard & SME Grey Market Premium tables (data styled after [ipowatch.in](https://ipowatch.in/ipo-grey-market-premium-latest-ipo-gmp/))
- **Gold** – Indicative 22K & 24K rates for Mumbai, Bangalore, Hyderabad, Kolkata
- **Mutual Funds** – Categories + sample schemes with live NAV attempt via public API
- **Equity** – Cap-wise allocation education
- **ETFs** – Ranked higher by approximate AUM / liquidity (educational ranking only)

## Important

- **No buy / sell / hold recommendations**
- Purely educational tool for understanding portfolio proportions in the Indian market
- Data is snapshot / public-API based and updates on page refresh
- Always verify latest numbers on official sources (NSE, BSE, AMFI, AMC sites, ipowatch.in etc.)
- Not SEBI-registered advice. Consult a registered advisor before investing.

## Live on GitHub Pages

After enabling Pages (Settings → Pages → Deploy from branch `main` / root), the site will be available at:

`https://dhavalbloomberg-eng.github.io/india-portfolio-insights/`

## Updating data

- IPO & Gold tables live in the JS files (`js/ipos.js`, `js/gold.js`)
- Mutual fund NAVs attempt live fetch from `api.mfapi.in`
- You can schedule a GitHub Action to refresh static JSON nightly if desired

## Tech

Plain HTML / CSS / JS. No build step. Works with GitHub Pages.
