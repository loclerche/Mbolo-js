
//Episode 10 
/*Écrire un programme qui demande le montant d’une facture et affiche le total à payer après avoir appliqué une remise de 10% si le montant de la facture dépasse 40.000 F.*/

function calculerTotalFacture() {
    // Demander le montant de la facture à l'utilisateur
    const montantFacture = parseFloat(prompt("Entrez le montant de la facture :"));
  
    // Initialiser le total à payer
    let totalAPayer;
  
    // Vérifier si le montant de la facture dépasse 40 000 F
    if (montantFacture > 40000) {
      // Calculer la remise de 10%
      const remise = montantFacture * 0.1;
  
      // Calculer le total à payer après remise
      totalAPayer = montantFacture - remise;
  
      // Afficher le résultat avec une alerte
      alert(`Montant de la facture : ${montantFacture} F\nRemise de 10% : ${remise} F\nTotal à payer : ${totalAPayer} F`);
    } else {
      // Si le montant de la facture ne dépasse pas 40 000 F, le total à payer est le montant de la facture
      totalAPayer = montantFacture;
      alert(`Total à payer : ${totalAPayer} F`);
    }
  }
     // Appeler la fonction pour exécuter le programme
     calculerTotalFacture();