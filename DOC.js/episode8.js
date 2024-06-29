//Episode 8
/*Ecrire un programme qui demande le nom de l’utilisateur et son sexe et affiche Bonjour monsieur <nom> ou Bonjour madame <nom>.
     Où <nom> est le nom saisi par l’utilisateur.*/
     const name = prompt("Quel est votre nom ?");
     const gender = prompt("Quel est votre sexe (M/F) ?");
     if (gender.toUpperCase() === "M") {
       alert(`Bonjour monsieur ${name}`);
     } 
     else 
       alert(`Bonjour madame ${name}`);
     