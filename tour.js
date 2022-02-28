// Fonction pour les pions de types "Tour"
function tour(){
    
    tourJoueur()
    tableauPieceEnMemoireJoueur.push(caseChoisie);

    // Récupère l'id et la lettre de la case choisie
    var numIdCaseChoisie = idDeLaCaseChoisie.split("")[0];
    var lettreIdCaseChoisie = idDeLaCaseChoisie.split("")[1];

    var direction1Compteur = 1;
    var direction2Compteur = 1;
    var direction1 = document.getElementById("case-" + (Number(numIdCaseChoisie) + direction1Compteur) + lettreIdCaseChoisie);
    var direction2 = document.getElementById("case-" + (Number(numIdCaseChoisie) - direction2Compteur) + lettreIdCaseChoisie);
    var direction3 = caseChoisie.previousElementSibling;
    var direction4 = caseChoisie.nextElementSibling;

    // On ajoute la case choisie dans le tableau des déplacements possibles
    tableauDeplacementsPossiblesJoueur.push(caseChoisie);

    // On appelle toutes les déplacements une première fois
    avancerTour();
    reculerTour();
    coteGaucheTour();
    coteDroiteTour();

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


    function avancerTour(){
        if(direction1 !== null && direction1.classList.contains("bordure") == false){
            
            
            // On récupère la case qui est devant
            direction1 = document.getElementById("case-" + (Number(numIdCaseChoisie) + direction1Compteur) + lettreIdCaseChoisie);
            ciblageCase(direction1);
            // On initialise le numéro pour l'id de
            // la prochaine case
            direction1Compteur = direction1Compteur +1;
            // Si la case est vide on continu
            // sinon on arrête et on réinitialise le compteur
            if(direction1.children[0] === undefined){
                avancerTour()
            }
            else{
                direction1Compteur = 1;
            }
            
        }
    }

    function reculerTour(){
        if(direction2 !== null && direction2.classList.contains("bordure") == false){
            // On récupère la case qui est devant
            
            direction2 = document.getElementById("case-" + (Number(numIdCaseChoisie) - direction2Compteur) + lettreIdCaseChoisie);
            ciblageCase(direction2);
            // Si la case est vide on continu
            // sinon on arrête et on réinitialise le compteur
            direction2Compteur = direction2Compteur + 1;
            // Si la case est vide on continu
            // sinon on arrête et on réinitialise le compteur
            if(direction2.children[0] === undefined){
                reculerTour()
            }
            else{
                direction2Compteur = 1;
            }
            
        }
    }

    function coteGaucheTour(){
        if(direction3 !== null && direction3.classList.contains("bordure") == false){
            // On récupère la case qui est devant
            ciblageCase(direction3);
            
            // Si la case est vide on continu
            // sinon on arrête et on réinitialise le compteur
            if(direction3.children[0] === undefined){
                // Si la case est vide on continu
                // sinon on arrête et on réinitialise le compteur
                direction3 = direction3.previousElementSibling;
                coteGaucheTour()
            }
            
        }
    }

    function coteDroiteTour(){
        if(direction4 !== null && direction4.classList.contains("bordure") == false){
            // On récupère la case qui est devant
            ciblageCase(direction4);
            
            
            // Si la case est vide on continu
            // sinon on arrête et on réinitialise le compteur
            if(direction4.children[0] === undefined){
                // Si la case est vide on continu
                // sinon on arrête et on réinitialise le compteur
                direction4 = direction4.nextElementSibling;
                coteDroiteTour()
            }
        }
    }
}