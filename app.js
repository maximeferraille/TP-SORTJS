"use strict";

var monTableau = [9, 10, 3, 5, 8, 4, 6, 2, 1, 7]
var jeSuisTrié = false

console.log(monTableau)

while (jeSuisTrié == false) {
  jeSuisTrié = true

  for (let compteur = 0; compteur < monTableau.length; compteur++) {
    console.log(monTableau[compteur])
    
    var valeur_actuelle = monTableau[compteur]
  
    if (monTableau[compteur] > monTableau[compteur+1]){
      jeSuisTrié = false

      monTableau[compteur] = monTableau[compteur+1]
      monTableau[compteur+1] = valeur_actuelle
    }
  }
}

console.log(monTableau)
