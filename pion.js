// Fonction pour les pions de types "Pion"
function pion(){
    
    tourJoueur()
    
    tableauPieceEnMemoireJoueur.push(caseChoisie);

    // Récupère l'id et la lettre de la case choisie
    var numIdCaseChoisie = idDeLaCaseChoisie.split("")[0];
    var lettreIdCaseChoisie = idDeLaCaseChoisie.split("")[1];

    // Récupère les deux case devant, devant à gauche et devant à droite
    let possibilites1 = document.getElementById("case-" + eval(Number(numIdCaseChoisie) + operation + 1) + lettreIdCaseChoisie);
    let possibilites2 = document.getElementById("case-" + eval(Number(numIdCaseChoisie) + operation + 1) + lettreIdCaseChoisie);
    let possibilites3 = document.getElementById("case-" + eval(Number(numIdCaseChoisie) + operation + 1) + lettreIdCaseChoisie);
    let possibilites4 = document.getElementById("case-" + eval(Number(numIdCaseChoisie) + operation + 2) + lettreIdCaseChoisie);

    tableauDeplacementsPossiblesJoueur.push(caseChoisie);

    
    
    // Vérifie si la case devant existe 
    // et qu'un pion n'y est pas présent
    if(possibilites2 !== null && possibilites2.classList.contains("bordure") == false && (possibilites2.hasChildNodes() == false || possibilites2.children.length == 0)){
        
            possibilites2.classList.add("case-possible");
            tableauDeplacementsPossiblesJoueur.push(possibilites2); 
    };

    // Vérifie si la case devant à gauche existe 
    // et qu'un pion est présent
    if(possibilites1.previousElementSibling !== null){

            if(possibilites1.previousElementSibling.children[0] !== undefined && possibilites1.previousElementSibling.classList.contains("bordure") == false){
                possibilites1 = possibilites1.previousElementSibling;
    
                if(possibilites1.children[0].classList[0].split("-")[1] == nomJoueurEnemie){
                    possibilites1.classList.add("case-touchable");
                    tableauDeplacementsPossiblesJoueur.push(possibilites1);
                }
            }
    };

    // Vérifie si la case devant à droite existe 
    // et qu'un pion est présent
    if(possibilites3.nextElementSibling !== null){

            if(possibilites3.nextElementSibling !== null && possibilites3.nextElementSibling.children[0] !== undefined && possibilites3.nextElementSibling.classList.contains("bordure") == false){
                possibilites3 = possibilites3.nextElementSibling;
    
                if(possibilites3.children[0].classList[0].split("-")[1] == nomJoueurEnemie){
                    possibilites3.classList.add("case-touchable");
                    tableauDeplacementsPossiblesJoueur.push(possibilites3);
                }
            }
    };

    // Vérifie si la case devant de deux cases existe
    // et qu'un pion n'y est pas présent
    if(possibilites4 !== null && possibilites1.hasChildNodes() == false && possibilites4.hasChildNodes() == false && caseChoisie.children[0].classList.contains("traverse")){
        
            possibilites4.classList.add("case-possible");
            tableauDeplacementsPossiblesJoueur.push(possibilites4);
    };

    /* On sauvegarde les possibilités dans le bon tableau */
    if(tourDeJeu){

        tableauDeplacementsPossiblesJoueur1 = tableauDeplacementsPossiblesJoueur;
    }
    else{

        tableauDeplacementsPossiblesJoueur2 = tableauDeplacementsPossiblesJoueur;
    };
}