  //Episode 6
//Écrire un programme qui demande à l’utilisateur trois nombres et affiche la moyenne de ces nombres en alerte.
const num3 = parseFloat(prompt("Entrez le premier nombre :"));
const num4 = parseFloat(prompt("Entrez le deuxième nombre :"));
const num5 = parseFloat(prompt("Entrez le troisième nombre :"));
const average = (num3 + num4 + num5) / 3;
alert(`La moyenne de ${num3}, ${num4} et ${num5} est ${average}`);
