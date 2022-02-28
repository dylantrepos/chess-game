// Fonction pour les pions de types "Renne"
function renne(){
    
    tourJoueur()
    tableauPieceEnMemoireJoueur.push(caseChoisie);

    // Récupère l'id et la lettre de la case choisie
    var numIdCaseChoisie = idDeLaCaseChoisie.split("")[0];
    var lettreIdCaseChoisie = idDeLaCaseChoisie.split("")[1];

    var direction1Compteur = 1;
    var direction2Compteur = 1;
    // Direction haut, bas, gauche, droite
    var direction1 = document.getElementById("case-" + (Number(numIdCaseChoisie) + direction1Compteur) + lettreIdCaseChoisie);
    var direction2 = document.getElementById("case-" + (Number(numIdCaseChoisie) - direction2Compteur) + lettreIdCaseChoisie);
    var direction3 = caseChoisie.previousElementSibling;
    var direction4 = caseChoisie.nextElementSibling;

    var direction5 = document.getElementById("case-" + (Number(numIdCaseChoisie) + 1) + lettreIdCaseChoisie);
    var direction6 = document.getElementById("case-" + (Number(numIdCaseChoisie) - 1) + lettreIdCaseChoisie);
    var direction5a = direction5.previousElementSibling;
    var direction5b = direction5.nextElementSibling;
    var direction6a = direction6.previousElementSibling;
    var direction6b = direction6.nextElementSibling;

    // On ajoute la case choisie dans le tableau des déplacements possibles
    tableauDeplacementsPossiblesJoueur.push(caseChoisie);

    // On appelle toutes les déplacements une première fois
    avancerRenne();
    reculerRenne();
    coteGaucheRenne();
    coteDroiteRenne();

    avancerRenneGauche();
    avancerRenneDroite();
    reculerRenneGauche();
    reculerRenneDroite();

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


    function avancerRenne(){
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
                avancerRenne()
            }
            else{
                direction1Compteur = 1;
            }
            
        }
    }

    function reculerRenne(){
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
                reculerRenne()
            }
            else{
                direction2Compteur = 1;
            }
            
        }
    }

    function coteGaucheRenne(){
        if(direction3 !== null && direction3.classList.contains("bordure") == false){
            // On récupère la case qui est devant
            ciblageCase(direction3);
            
            // Si la case est vide on continu
            // sinon on arrête et on réinitialise le compteur
            if(direction3.children[0] === undefined){
                // Si la case est vide on continu
                // sinon on arrête et on réinitialise le compteur
                direction3 = direction3.previousElementSibling;
                coteGaucheRenne()
            }
            
        }
    }

    function coteDroiteRenne(){
        if(direction4 !== null && direction4.classList.contains("bordure") == false){
            // On récupère la case qui est devant
            ciblageCase(direction4);
            
            
            // Si la case est vide on continu
            // sinon on arrête et on réinitialise le compteur
            if(direction4.children[0] === undefined){
                // Si la case est vide on continu
                // sinon on arrête et on réinitialise le compteur
                direction4 = direction4.nextElementSibling;
                coteDroiteRenne()
            }
        }
    }


    function avancerRenneGauche(){
        if(direction5a !== null && direction5a.classList.contains("bordure") == false){
            ciblageCase(direction5a);
            // On récupère la case qui est devant
            
            
            // Si la case est vide on continu
            // sinon on arrête et on réinitialise le compteur
            if(direction5a.children[0] === undefined){
                direction5 = document.getElementById("case-" + (Number(direction5a.id.split("-")[1].split("")[0]) + 1) + direction5a.id.split("-")[1].split("")[1]);
                direction5a = direction5.previousElementSibling;
                avancerRenneGauche()
            }
            else{
                direction5 = document.getElementById("case-" + (Number(numIdCaseChoisie) + 1) + lettreIdCaseChoisie);
            }
            
        }
    }

    function avancerRenneDroite(){
        if(direction5b !== null && direction5b.classList.contains("bordure") == false){
            ciblageCase(direction5b);            // On récupère la case qui est devant
            
            
            // Si la case est vide on continu
            // sinon on arrête et on réinitialise le compteur
            if(direction5b.children[0] === undefined){
                direction5 = document.getElementById("case-" + (Number(direction5b.id.split("-")[1].split("")[0]) + 1) + direction5b.id.split("-")[1].split("")[1]);
                direction5b = direction5.nextElementSibling;
                avancerRenneDroite()
            }
            else{
                direction5 = document.getElementById("case-" + (Number(numIdCaseChoisie) + 1) + lettreIdCaseChoisie);
            }
            
        }
    }

    function reculerRenneGauche(){
        if(direction6a !== null && direction6a.classList.contains("bordure") == false){
            ciblageCase(direction6a);
            // On récupère la case qui est devant
            
            
            // Si la case est vide on continu
            // sinon on arrête et on réinitialise le compteur
            if(direction6a.children[0] === undefined){
                direction6 = document.getElementById("case-" + (Number(direction6a.id.split("-")[1].split("")[0]) - 1) + direction6a.id.split("-")[1].split("")[1]);
                direction6a = direction6.previousElementSibling;
                reculerRenneGauche()
            }
            else{
                direction6 = document.getElementById("case-" + (Number(numIdCaseChoisie) - 1) + lettreIdCaseChoisie);
            }
            
        }
    }

    function reculerRenneDroite(){
        if(direction6b !== null && direction6b.classList.contains("bordure") == false){
            ciblageCase(direction6b);
            // On récupère la case qui est devant
            
            
            // Si la case est vide on continu
            // sinon on arrête et on réinitialise le compteur
            if(direction6b.children[0] === undefined){
                direction6 = document.getElementById("case-" + (Number(direction6b.id.split("-")[1].split("")[0]) - 1) + direction6b.id.split("-")[1].split("")[1]);
                direction6b = direction6.nextElementSibling;
                reculerRenneDroite()
            }
            else{
                direction6 = document.getElementById("case-" + (Number(numIdCaseChoisie) - 1) + lettreIdCaseChoisie);
            }
            
        }
    }
}