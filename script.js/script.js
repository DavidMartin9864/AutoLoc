// Simule une recherche et affiche le résultat
function performSearch() {
  const q = document.getElementById('q').value.toLowerCase();
  const type = document.getElementById('type').value;
  const results = document.getElementById('results');

  results.innerHTML = "";
  const card = document.createElement('article');
  card.className = 'card';
  const thumb = document.createElement('div');
  thumb.className = 'thumb';
  thumb.textContent = q ? q.slice(0, 10).toUpperCase() : 'VOITURE';
  const info = document.createElement('div');
  info.innerHTML = "<strong>Résultats simulés</strong><br/>Recherche: " + (q || "—") + "<br/>Type: " + type;
  card.appendChild(thumb);
  card.appendChild(info);
  results.appendChild(card);
}

// Boutons du header (simulations)
document.getElementById('btn-auth').addEventListener('click', () => {
  alert("Fonction Connexion/Inscription (simulation).");
});

document.getElementById('btn-res').addEventListener('click', () => {
  alert("Gérer mes réservations (simulation).");
});
