// Tableau pour stocker les mots
let mots = [];

// Tableau pour stocker les mots choisis
let motsChoisis = [];

// Fonction pour charger les mots depuis un fichier texte
function chargerMots() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      mots = xhr.responseText.split("\n");
    }
  };
  xhr.open("GET", "mots.txt", true);
  xhr.send();
}

// Fonction pour générer un mot aléatoire
function genererMot() {
  // Si tous les mots ont été choisis, affiche un message d'erreur
  if (motsChoisis.length === mots.length) {
    document.getElementById("mot").textContent =
      "Tous les mots ont été choisis!";
    return;
  }

  let motAleatoire = "";
  do {
    motAleatoire = mots[Math.floor(Math.random() * mots.length)];
  } while (motsChoisis.includes(motAleatoire)); // Tant que le mot a déjà été choisi, continue à en choisir un autre

  motsChoisis.push(motAleatoire); // Ajoute le mot choisi au tableau

  document.getElementById("mot").textContent = motAleatoire; // Affiche le mot choisi
}

// Fonction pour réinitialiser les mots choisis
function reset() {
  motsChoisis = [];
  document.getElementById("mot").textContent = "";
}

// Chargement des mots au chargement de la page
window.onload = chargerMots;
