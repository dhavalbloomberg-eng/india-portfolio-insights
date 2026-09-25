const mainboardIPOs = [
  { name: "SRIT India", gmp: 22, trend: "up", band: "₹130", est: "₹152 (16.92%)", date: "28-30 Sep", status: "Upcoming" },
  { name: "Shah Investor’s Home", gmp: 12, trend: "up", band: "₹167", est: "₹179 (7.19%)", date: "28-30 Sep", status: "Upcoming" },
  { name: "Acevector", gmp: 2, trend: "up", band: "₹32", est: "₹34 (6.25%)", date: "25-29 Sep", status: "Open" },
  { name: "German Green Steel", gmp: 28, trend: "up", band: "₹139", est: "₹167 (20.14%)", date: "25-29 Sep", status: "Open" },
  { name: "Runwal Enterprises", gmp: 30, trend: "up", band: "₹305", est: "₹335 (9.84%)", date: "25-29 Sep", status: "Open" },
  { name: "Orient Cables", gmp: 113, trend: "up", band: "₹272", est: "₹385 (41.54%)", date: "25-29 Sep", status: "Open" },
  { name: "Moneyview", gmp: 14, trend: "up", band: "₹34", est: "₹48 (41.18%)", date: "24-28 Sep", status: "Open" },
  { name: "A-One Steels", gmp: 49, trend: "down", band: "₹405", est: "₹454 (12.10%)", date: "24-28 Sep", status: "Open" },
  { name: "Adroit Industries", gmp: 34, trend: "up", band: "₹134", est: "₹168 (25.37%)", date: "23-25 Sep", status: "Open" },
  { name: "Swastika Infra", gmp: 8, trend: "up", band: "₹185", est: "₹193 (4.32%)", date: "23-25 Sep", status: "Open" },
  { name: "Elevate Campuses", gmp: 3, trend: "down", band: "₹362", est: "₹364 (0.83%)", date: "23-25 Sep", status: "Open" },
  { name: "ArMee Infotech", gmp: 20, trend: "up", band: "₹375", est: "₹395 (5.33%)", date: "23-25 Sep", status: "Open" },
  { name: "Varmora Granito", gmp: 0, trend: "flat", band: "₹148", est: "₹148 (0.00%)", date: "22-24 Sep", status: "Closed" }
];

const smeIPOs = [
  { name: "Paramount Syntex", gmp: 0, trend: "flat", band: "₹127", est: "₹127 (0.00%)", date: "30-6 Oct", status: "Upcoming" },
  { name: "Dove Soft", gmp: 0, trend: "flat", band: "₹111", est: "₹111 (0.00%)", date: "30-5 Oct", status: "Upcoming" },
  { name: "Omara Ventures", gmp: 0, trend: "flat", band: "₹311", est: "₹311 (0.00%)", date: "30-5 Oct", status: "Upcoming" },
  { name: "Dudani Retail", gmp: 3, trend: "up", band: "₹29", est: "₹32 (10.34%)", date: "25-29 Sep", status: "Open" },
  { name: "Shree TNB Polymers", gmp: 5, trend: "up", band: "₹52", est: "₹57 (9.62%)", date: "25-29 Sep", status: "Open" },
  { name: "Bench Mark Infotech", gmp: 12, trend: "up", band: "₹110", est: "₹122 (10.91%)", date: "25-29 Sep", status: "Open" },
  { name: "Roopa Screen", gmp: 8, trend: "down", band: "₹64", est: "₹72 (12.50%)", date: "24-28 Sep", status: "Open" },
  { name: "Liqvd Digital", gmp: 3, trend: "up", band: "₹54", est: "₹57 (5.56%)", date: "23-25 Sep", status: "Open" },
  { name: "Robokidz Eduventures", gmp: 70, trend: "up", band: "₹106", est: "₹176 (66.04%)", date: "21-23 Sep", status: "Closed" }
];

function trendIcon(t) {
  if (t === "up") return '<span class="trend-up">▲</span>';
  if (t === "down") return '<span class="trend-down">▼</span>';
  return '<span class="trend-flat">—</span>';
}

function renderTable(tbody, data) {
  tbody.innerHTML = data.map(row => `
    <tr>
      <td><strong>${row.name}</strong></td>
      <td>₹${row.gmp}</td>
      <td>${trendIcon(row.trend)}</td>
      <td>${row.band}</td>
      <td>${row.est}</td>
      <td>${row.date}</td>
      <td>${row.status}</td>
    </tr>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderTable(document.querySelector('#ipoMainTable tbody'), mainboardIPOs);
  renderTable(document.querySelector('#ipoSmeTable tbody'), smeIPOs);
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });
});
