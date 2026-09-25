// Sample mutual fund schemes for educational display.
// Attempts live NAV from public API (mfapi.in) where possible; falls back to static.
const sampleSchemes = [
  { code: 120503, name: "Parag Parikh Flexi Cap Fund – Direct Growth", category: "Flexi Cap" },
  { code: 120716, name: "Mirae Asset Large Cap Fund – Direct Growth", category: "Large Cap" },
  { code: 125354, name: "Axis Midcap Fund – Direct Growth", category: "Mid Cap" },
  { code: 118989, name: "Nippon India Small Cap Fund – Direct Growth", category: "Small Cap" },
  { code: 120716, name: "UTI Nifty 50 Index Fund – Direct Growth", category: "Index" },
  { code: 119551, name: "HDFC Balanced Advantage Fund – Direct Growth", category: "Hybrid" }
];

async function fetchNAV(code) {
  try {
    const res = await fetch(`https://api.mfapi.in/mf/${code}/latest`);
    if (!res.ok) throw new Error('API error');
    const data = await res.json();
    if (data && data.data && data.data.length) {
      return data.data[0].nav;
    }
  } catch (e) {
    console.warn('NAV fetch failed for', code, e);
  }
  return '—';
}

document.addEventListener('DOMContentLoaded', async () => {
  const tbody = document.querySelector('#mfTable tbody');
  if (!tbody) return;

  tbody.innerHTML = '<tr><td colspan="4">Loading NAVs...</td></tr>';

  const rows = await Promise.all(sampleSchemes.map(async s => {
    const nav = await fetchNAV(s.code);
    return `
      <tr>
        <td><strong>${s.name}</strong></td>
        <td>${s.category}</td>
        <td>₹${nav}</td>
        <td>Educational sample</td>
      </tr>
    `;
  }));

  tbody.innerHTML = rows.join('');
});
