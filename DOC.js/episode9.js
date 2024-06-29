//Episode 9
/*Écrire un programme qui demande la moyenne d’un élève et affiche sa mention (Passable, Assez-Bien, Bien, Très bien, Excellent).
NB : La moyenne varie entre 0 et 20.*/
const studentAverage = parseFloat(prompt("Quelle est votre moyenne ?"));
let mention;
if (studentAverage >= 0 && studentAverage < 10) {
  mention = "Passable";
} else if (studentAverage >= 10 && studentAverage < 12) {
  mention = "Assez-Bien";
} else if (studentAverage >= 12 && studentAverage < 14) {
  mention = "Bien";
} else if (studentAverage >= 14 && studentAverage < 16) {
  mention = "Très bien";
} else if (studentAverage >= 16 && studentAverage <= 20) {
  mention = "Excellent";
} else {
  mention = "Moyenne invalide";
}
alert(`Votre mention est : ${mention}`);