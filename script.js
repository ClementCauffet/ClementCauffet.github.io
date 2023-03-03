// Tableau pour stocker les mots
let mots = [
  "Johnny Hallyday",
  "Shakira",
  "Daft Punk",
  "Michael Jackson",
  "Eminem",
  "Justin Bieber",
  "Barack Obama",
  "Omar Sy",
  "Gad Elmaleh",
  "Omar Sy",
  "Spider-Man",
  "Harry Potter",
  "Mario",
  "Dark Vador",
  "Pikachu",
  "Dieudonné",
  "Les tortues ninja",
  "Macron",
  "Hitler",
  "Eric Zemmour",
  "Coluche",
  // "Le petit Grégory",
  // "Mbappé",
  // "Zidane",
  // "Roger Federer",
  // "Nicos Aliagas",
  // "Marie Curie",
  // "Anne Hidalgo",
  // "Sophie Marceau",
  // "Marguerie Tilly (devient Armand Saillour si c'est Marguerite qui joue)",
  // "Jonathan Cohen",
];

// Tableau pour stocker les mots choisis
let motsChoisis = [];

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
