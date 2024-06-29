//Episode 7
/*Écrire un programme qui demande l'âge de l’utilisateur et affiche : Vous êtes mineur ou Vous êtes majeur.
NB : Est considérée majeure, une personne ayant au moins 18 ans.*/
const age = parseInt(prompt("Quel est votre âge ?"));
if (age >= 18) {
  alert("Vous êtes majeur");
} else {
  alert("Vous êtes mineur");
}