 //Episode 12
/*Écrire un programme qui fait la somme des 10 premiers nombres entiers à partir de 1.
 Le résultat est affiché / en console.*/
 function calculerSommeDebutants() {
    // Initialiser la somme à 0
    let somme = 0;
  
    // Calculer la somme des 10 premiers nombres entiers à partir de 1
    for (let i = 1; i <= 10; i++) {
      somme += i;
    }
  
    // Afficher le résultat en console
    console.log(`La somme des 10 premiers nombres entiers est : ${somme}`);
  }
  
  // Appeler la fonction pour exécuter le programme
  calculerSommeDebutants();
