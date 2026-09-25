// Educational ETF ranking by approximate AUM / liquidity (higher first).
// Not a recommendation. Verify current AUM & volumes on exchange / AMC sites.
const etfs = [
  { rank: 1, name: "Nippon India ETF Nifty 50 BeES", underlying: "Nifty 50", category: "Large Cap" },
  { rank: 2, name: "SBI ETF Nifty 50", underlying: "Nifty 50", category: "Large Cap" },
  { rank: 3, name: "UTI Nifty 50 ETF", underlying: "Nifty 50", category: "Large Cap" },
  { rank: 4, name: "Nippon India ETF Gold BeES", underlying: "Gold", category: "Commodity" },
  { rank: 5, name: "HDFC Gold ETF", underlying: "Gold", category: "Commodity" },
  { rank: 6, name: "Nippon India ETF Nifty Bank BeES", underlying: "Nifty Bank", category: "Sector" },
  { rank: 7, name: "ICICI Pru Nifty Midcap 150 ETF", underlying: "Nifty Midcap 150", category: "Mid Cap" },
  { rank: 8, name: "Motilal Oswal Nifty Midcap 100 ETF", underlying: "Nifty Midcap 100", category: "Mid Cap" },
  { rank: 9, name: "Nippon India ETF Nifty Next 50", underlying: "Nifty Next 50", category: "Large/Mid" },
  { rank: 10, name: "Motilal Oswal Nifty Smallcap 250 ETF", underlying: "Nifty Smallcap 250", category: "Small Cap" }
];

document.addEventListener('DOMContentLoaded', () => {
  const tbody = document.querySelector('#etfTable tbody');
  if (!tbody) return;

  tbody.innerHTML = etfs.map(e => `
    <tr>
      <td>${e.rank}</td>
      <td><strong>${e.name}</strong></td>
      <td>${e.underlying}</td>
      <td>${e.category}</td>
      <td>#${e.rank} (illustrative)</td>
    </tr>
  `).join('');
});
