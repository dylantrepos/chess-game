// Fonction pour les pions de types "Cavalier"
function cavalier(){
    
    tourJoueur()
    tableauPieceEnMemoireJoueur.push(caseChoisie);

    // Récupère l'id et la lettre de la case choisie
    var numIdCaseChoisie = idDeLaCaseChoisie.split("")[0];
    var lettreIdCaseChoisie = idDeLaCaseChoisie.split("")[1];

    var direction1 = document.getElementById("case-" + (Number(numIdCaseChoisie) + 2) + lettreIdCaseChoisie);
    var direction2 = document.getElementById("case-" + (Number(numIdCaseChoisie) - 2) + lettreIdCaseChoisie);
    var direction3 = caseChoisie.previousElementSibling.previousElementSibling;
    var direction4 = caseChoisie.nextElementSibling.nextElementSibling;

    tableauDeplacementsPossiblesJoueur.push(caseChoisie);

    // Fonction pour définir le ciblage de la case
    // Si un enemi est présent ou non
    function ciblageCase(direction){
        if(direction.hasChildNodes() == false || direction.children.length == 0){
            direction.classList.add("case-possible");
            tableauDeplacementsPossiblesJoueur.push(direction); 
        }
        else if(direction.children[0].classList[0].split("-")[1] == nomJoueurEnemie){
            direction.classList.add("case-touchable");
            tableauDeplacementsPossiblesJoueur.push(direction);
            
        }
    }

    // Vérifie si la case existe 
    if(direction1 !== null && direction1.previousElementSibling !== null && direction1.previousElementSibling.classList.contains("bordure") == false){
        let direction1a = direction1.previousElementSibling;
        ciblageCase(direction1a);   
    };
    // Vérifie si la case existe 
    if(direction1 !== null && direction1.nextElementSibling !== null && direction1.nextElementSibling.classList.contains("bordure") == false){
        let direction1b = direction1.nextElementSibling;
        ciblageCase(direction1b);   
    };

    // Vérifie si la case existe 
    if(direction2 !== null && direction2.previousElementSibling !== null && direction2.previousElementSibling.classList.contains("bordure") == false){
        let direction2a = direction2.previousElementSibling;
        ciblageCase(direction2a);   
    };
    // Vérifie si la case existe 
    if(direction2 !== null && direction2.nextElementSibling !== null && direction2.nextElementSibling.classList.contains("bordure") == false){
        let direction2b = direction2.nextElementSibling;
        ciblageCase(direction2b);   
    };

    // Vérifie si la case existe 
    if(direction3 !== null && direction3.classList.contains("bordure") == false){
        let direction3a = document.getElementById("case-" + (Number(direction3.id.split("-")[1].split("")[0]) + 1) + direction3.id.split("-")[1].split("")[1]);
        let direction3b = document.getElementById("case-" + (Number(direction3.id.split("-")[1].split("")[0]) - 1) + direction3.id.split("-")[1].split("")[1]);

        if(direction3a !== null && direction3a.classList.contains("bordure") == false){
            ciblageCase(direction3a);   
        };
        if(direction3b !== null && direction3b.classList.contains("bordure") == false){
            ciblageCase(direction3b);   
        };
    };

    // Vérifie si la case existe 
    if(direction4 !== null && direction4.classList.contains("bordure") == false){
        let direction4a = document.getElementById("case-" + (Number(direction4.id.split("-")[1].split("")[0]) + 1) + direction4.id.split("-")[1].split("")[1]);
        let direction4b = document.getElementById("case-" + (Number(direction4.id.split("-")[1].split("")[0]) - 1) + direction4.id.split("-")[1].split("")[1]);

        if(direction4a !== null && direction4a.classList.contains("bordure") == false){
            ciblageCase(direction4a);   
        };
        if(direction4b !== null && direction4b.classList.contains("bordure") == false){
            ciblageCase(direction4b);   
        };
    };

}