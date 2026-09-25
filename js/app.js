function setLastUpdated() {
  const el = document.getElementById('lastUpdated');
  if (el) {
    const now = new Date();
    el.textContent = now.toLocaleString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setLastUpdated();
  const btn = document.getElementById('refreshBtn');
  if (btn) {
    btn.addEventListener('click', () => location.reload());
  }
});
