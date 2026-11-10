function playerCard(player) {
  return `<article class="player-card tone-${player.tone}">
    <div class="player-card-top"><span class="card-edition">SAFINA · NOV</span><span class="player-number">${player.number}</span></div>
    <div class="card-player-art" aria-hidden="true"><span class="card-shape"></span><span class="player-emoji">${player.avatar}</span></div>
    <div class="player-card-info"><div class="player-rating"><strong>${player.rating}</strong><span>${player.position}</span></div><div class="player-card-name">${player.name}</div></div>
    <div class="player-card-stats"><span><b>${player.goals}</b> GOALS</span><span><b>${player.ballon}</b> BALLON D'OR</span><span><b>${player.boots}</b> BOOTS</span></div>
  </article>`;
}

function renderHome() {
  const featured = document.getElementById('featured-players');
  if (featured) featured.innerHTML = [players[0], players[1], players[3]].map(playerCard).join('');

  const totalGoals = players.reduce((sum, player) => sum + player.goals, 0);
  const goalStat = document.getElementById('stat-goals');
  const playerStat = document.getElementById('stat-players');
  const awardStat = document.getElementById('stat-awards');
  if (goalStat) goalStat.textContent = totalGoals;
  if (playerStat) playerStat.textContent = String(players.length).padStart(2, '0');
  if (awardStat) awardStat.textContent = ballonDorHistory.length + goldenBootHistory.length;

  const ballonWinner = ballonDorHistory[ballonDorHistory.length - 1];
  const bootWinner = goldenBootHistory[goldenBootHistory.length - 1];
  const setText = (id, value) => { const element = document.getElementById(id); if (element) element.textContent = value; };
  setText('latest-ballon-winner', ballonWinner.winner);
  setText('latest-ballon-year', ballonWinner.year);
  setText('latest-boot-winner', bootWinner.winner);
  setText('latest-boot-year', bootWinner.year);
}

function renderPlayers() {
  const container = document.getElementById('all-players');
  if (container) container.innerHTML = players.map(playerCard).join('');
}

function renderScorers() {
  const table = document.getElementById('scorers-table');
  if (!table) return;
  table.innerHTML = topScorers.map(player => `<tr>
    <td><span class="rank-badge ${player.rank <= 3 ? `rank-${player.rank}` : ''}">${String(player.rank).padStart(2, '0')}</span></td>
    <td><span class="table-player"><span class="table-avatar">${player.avatar}</span><strong>${player.name}</strong></span></td>
    <td><span class="position-pill">${player.position}</span></td>
    <td><span class="goal-count">${player.goals}<span> ⚽</span></span></td>
  </tr>`).join('');
  const total = document.getElementById('leaderboard-total');
  if (total) total.textContent = players.reduce((sum, player) => sum + player.goals, 0);
}

function renderHistory(containerId, history, icon) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const reversed = [...history].reverse();
  container.innerHTML = reversed.map((item, index) => `<article class="honour-row ${index === 0 ? 'latest' : ''}">
    <span class="honour-icon" aria-hidden="true">${icon}</span><span class="honour-year">${item.year}</span><strong class="honour-winner">${item.winner}</strong>${index === 0 ? '<span class="latest-tag">LATEST WINNER</span>' : '<span class="honour-arrow" aria-hidden="true">↗</span>'}
  </article>`).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  renderPlayers();
  renderScorers();
  renderHistory('ballon-history', ballonDorHistory, '✳');
  renderHistory('boot-history', goldenBootHistory, '⚽');
  document.querySelectorAll('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });

  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.site-nav');
  if (toggle && navigation) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      toggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
      navigation.classList.toggle('is-open', !expanded);
    });
  }
});
