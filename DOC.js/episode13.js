 // Episode 13
/*Écrire un programme qui demande sans cesse à l'utilisateur de renseigner la bonne réponse d’une opération (ex: Combien font 5+1 ?) jusqu’à ce qu’il renseigne la bonne réponse.*/
function jouerJeuOperation() {
    // Initialiser le drapeau de réponse correcte à false
    let reponseCorrecte = false;
  
    // Boucle tant que la réponse n'est pas correcte
    while (!reponseCorrecte) {
      // Générer deux opérandes aléatoires entre 0 et 9
      const operande1 = Math.floor(Math.random() * 10);
      const operande2 = Math.floor(Math.random() * 10);
  
      // Choisir une opération aléatoire (+, -)
      const operation = Math.floor(Math.random() * 2) ? '+' : '-';
  
      // Calculer le résultat attendu en fonction de l'opération
      const resultatAttendu = operation === '+' ? operande1 + operande2 : operande1 - operande2;
  
      // Demander à l'utilisateur de répondre à l'opération
      const reponseUtilisateur = parseFloat(prompt(`Combien font ${operande1} ${operation} ${operande2} ?`));
  
      // Vérifier si la réponse de l'utilisateur est correcte
      if (reponseUtilisateur === resultatAttendu) {
        alert("Bravo, c'est la bonne réponse !");
        reponseCorrecte = true;
      } else {
        alert("Désolé, ce n'est pas la bonne réponse. Réessayez !");
      }
    }
  }
  
  // Appeler la fonction pour exécuter le programme
  jouerJeuOperation();
  