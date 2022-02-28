// Fonction pour les pions de types "Roi"
function roi(){
    
    tourJoueur()
    tableauPieceEnMemoireJoueur.push(caseChoisie);

    // Récupère l'id et la lettre de la case choisie
    var numIdCaseChoisie = idDeLaCaseChoisie.split("")[0];
    var lettreIdCaseChoisie = idDeLaCaseChoisie.split("")[1];

    // Récupère les deux case devant, devant à gauche et devant à droite
    let possibilites1 = document.getElementById("case-" + eval(Number(numIdCaseChoisie) + 1) + lettreIdCaseChoisie);
    let possibilites1a = possibilites1.previousElementSibling;
    let possibilites1b = possibilites1.nextElementSibling;
    
    let possibilites2 = document.getElementById("case-" + eval(Number(numIdCaseChoisie) - 1) + lettreIdCaseChoisie);
    let possibilites2a = possibilites2.previousElementSibling;
    let possibilites2b = possibilites2.nextElementSibling;

    let possibilites3 = caseChoisie.previousElementSibling;
    let possibilites4 = caseChoisie.nextElementSibling;

    tableauDeplacementsPossiblesJoueur.push(caseChoisie);


    // Fonction pour définir le ciblage de la case
    // Si un enemi est présent ou non
    function ciblageCase(direction){
        if(direction.hasChildNodes() == false || direction.children.length == 0){
            if(direction.classList.contains("bordure") == false){
                direction.classList.add("case-possible");
                tableauDeplacementsPossiblesJoueur.push(direction); 
            }
            
        }
        else if(direction.children[0].classList[0].split("-")[1] == nomJoueurEnemie){
            direction.classList.add("case-touchable");
            tableauDeplacementsPossiblesJoueur.push(direction);
            
        }
    }


    // Vérifie si la case devant existe 
    // et qu'un pion n'y est pas présent
    if(possibilites1 !== null && possibilites1.classList.contains("bordure") == false){
        ciblageCase(possibilites1);
    };

    // Vérifie si la case devant à gauche existe 
    // et qu'un pion est présent
    if(possibilites1a !== null && possibilites1a.classList.contains("bordure") == false){
        ciblageCase(possibilites1a)
    };

    // Vérifie si la case devant à droite existe 
    // et qu'un pion est présent
    if(possibilites1b !== null && possibilites1b.classList.contains("bordure") == false){
        ciblageCase(possibilites1b);
    };


    // Vérifie si la case derrière existe 
    // et qu'un pion n'y est pas présent
    if(possibilites2 !== null && possibilites2.classList.contains("bordure") == false){
        ciblageCase(possibilites2);
    };

    // Vérifie si la case derrière à gauche existe 
    // et qu'un pion est présent
    if(possibilites2a !== null && possibilites2a.classList.contains("bordure") == false){
        ciblageCase(possibilites2a)
    };

    // Vérifie si la case derrière à droite existe 
    // et qu'un pion est présent
    if(possibilites2b !== null && possibilites2b.classList.contains("bordure") == false){
        ciblageCase(possibilites2b);
    };

    // Vérifie si la case à gauche existe 
    // et qu'un pion est présent
    if(possibilites3 !== null && possibilites3.classList.contains("bordure") == false){
        ciblageCase(possibilites3)
    };

    // Vérifie si la case à droite existe 
    // et qu'un pion est présent
    if(possibilites4 !== null && possibilites4.classList.contains("bordure") == false){
        ciblageCase(possibilites4);
    };

}