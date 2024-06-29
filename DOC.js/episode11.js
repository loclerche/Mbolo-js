// Episode 11
/*Écrire un programme qui demande un nombre à l’utilisateur 
et affiche la table de multiplication de ce nombre   jusqu’à 10.*/

function afficherTableMultiplication() {
    // Demander un nombre à l'utilisateur
    const nombre = parseFloat(prompt("Entrez un nombre :"));
  
    // Afficher la table de multiplication de ce nombre jusqu'à 10
    console.log(`Table de multiplication de ${nombre} :`);
    for (let i = 1; i <= 10; i++) {
      const produit = nombre * i;
      console.log(`${nombre} x ${i} = ${produit}`);
    }
  }
  
  // Appeler la fonction pour exécuter le programme
  afficherTableMultiplication();
