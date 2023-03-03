function genererMot() {
  // Récupération des mots depuis le fichier texte
  const mots = ["mot1", "mot2", "mot3", "mot4", "mot5"]; // Remplacez cela par le code qui récupère les mots à partir d'un fichier texte

  // Sélection d'un mot aléatoire
  const motAleatoire = mots[Math.floor(Math.random() * mots.length)];

  // Affichage du mot
  const resultat = document.getElementById("mot");
  resultat.innerHTML = "Le mot aléatoire est: " + motAleatoire;
}
