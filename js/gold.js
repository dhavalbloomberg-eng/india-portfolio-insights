const goldRates = [
  { city: "Mumbai", k24: "₹1,51,410 – 1,52,840", k22: "₹1,38,793 – 1,40,100", note: "Major bullion centre" },
  { city: "Bangalore", k24: "₹1,51,440 – 1,52,840", k22: "₹1,38,820 – 1,40,100", note: "South India hub" },
  { city: "Hyderabad", k24: "₹1,51,560 – 1,52,840", k22: "₹1,38,930 – 1,40,100", note: "Regional premium varies" },
  { city: "Kolkata", k24: "₹1,51,120 – 1,52,840", k22: "₹1,38,527 – 1,40,100", note: "East India reference" }
];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('goldGrid');
  if (!grid) return;
  grid.innerHTML = goldRates.map(g => `
    <div class="gold-card">
      <h4>${g.city}</h4>
      <div class="gold-row"><span>24K / 10g</span> <strong>${g.k24}</strong></div>
      <div class="gold-row"><span>22K / 10g</span> <strong>${g.k22}</strong></div>
      <div class="gold-row" style="margin-top:6px;color:#8b949e;font-size:11px;font-family:var(--font)">${g.note}</div>
    </div>
  `).join('');
});
